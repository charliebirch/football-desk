// Shared rules for check.mjs, board.mjs and the write hook. One place, so the hook and the
// lint can never disagree about what a valid file is. Zero dependencies on purpose.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

export const ROOT_FILES = ['CLAUDE.md', 'CLAUDE.local.md', 'STATUS.md', 'README.md', '.gitignore'];
export const TOP_DIRS = ['.claude', 'foundation', 'inbox', 'ideas', 'stories', 'outlets',
  'library', 'data', 'brands', 'scripts'];

export const IDEA_STATUS = ['idea', 'greenlit', 'parked', 'killed'];
export const STORY_STATUS = ['greenlit', 'researching', 'drafting', 'checking', 'ready',
  'pitched', 'published', 'parked', 'killed'];
export const ORIGINS = ['charlie', 'claude'];
export const STORY_FILES = ['brief.md', 'research.md', 'sources.md', 'draft.md',
  'edit-notes.md', 'factcheck.md', 'pitch.md', 'social.md', 'CLAUDE.md'];
export const STORY_DIRS = ['assets'];
export const STALE_DAYS = 30;

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Minimal YAML: `key: value`, `key: [a, b]`, trailing `# comments`. Enough for our frontmatter.
export function parseFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/.exec(text);
  if (!m) return null;
  const out = {};
  for (const raw of m[1].split(/\r?\n/)) {
    const line = raw.replace(/\s+#.*$/, '');
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else {
      v = v.replace(/^["']|["']$/g, '');
    }
    out[kv[1]] = v;
  }
  return out;
}

export function loadPillars(root) {
  const p = join(root, 'foundation', 'pillars.md');
  if (!existsSync(p)) return [];
  return [...readFileSync(p, 'utf8').matchAll(/^\|\s*`([a-z0-9-]+)`\s*\|/gm)].map(x => x[1]);
}

export function readFm(path) {
  return existsSync(path) ? parseFrontmatter(readFileSync(path, 'utf8')) : null;
}

function need(fm, keys, errs) {
  for (const k of keys) {
    const v = fm[k];
    if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) errs.push(`missing \`${k}\``);
  }
}

function oneOf(fm, key, allowed, errs) {
  if (fm[key] && !allowed.includes(fm[key])) errs.push(`\`${key}: ${fm[key]}\` must be one of: ${allowed.join(', ')}`);
}

function dates(fm, keys, errs) {
  for (const k of keys) if (fm[k] && !DATE.test(fm[k])) errs.push(`\`${k}\` must be YYYY-MM-DD`);
}

export function validateIdea(file, content, root) {
  const errs = [];
  const fm = parseFrontmatter(content);
  if (!fm) return ['no frontmatter; copy ideas/_template.md'];
  need(fm, ['type', 'slug', 'title', 'status', 'pillar', 'origin', 'for', 'created', 'updated'], errs);
  if (fm.type && fm.type !== 'idea') errs.push('`type` must be idea');
  if (fm.slug && fm.slug !== basename(file, '.md')) errs.push(`\`slug: ${fm.slug}\` must match the file name`);
  oneOf(fm, 'status', IDEA_STATUS, errs);
  oneOf(fm, 'pillar', loadPillars(root), errs);
  oneOf(fm, 'origin', ORIGINS, errs);
  dates(fm, ['created', 'updated'], errs);
  return errs;
}

export function validateBrief(slug, content, root) {
  const errs = [];
  const fm = parseFrontmatter(content);
  if (!fm) return ['no frontmatter; copy stories/_template/brief.md'];
  need(fm, ['type', 'slug', 'title', 'status', 'pillar', 'for', 'idea', 'greenlit', 'updated'], errs);
  if (fm.type && fm.type !== 'brief') errs.push('`type` must be brief');
  if (fm.slug && fm.slug !== slug) errs.push(`\`slug: ${fm.slug}\` must match the folder name`);
  if (fm.idea && fm.idea !== `ideas/${slug}.md`) errs.push(`\`idea\` must be ideas/${slug}.md`);
  oneOf(fm, 'status', STORY_STATUS, errs);
  oneOf(fm, 'pillar', loadPillars(root), errs);
  dates(fm, ['greenlit', 'updated'], errs);
  if (fm.status === 'published' && !fm.published_url) errs.push('`published` needs `published_url`');
  return errs;
}

export function validateOutlet(file, content) {
  const errs = [];
  const fm = parseFrontmatter(content);
  if (!fm) return ['no frontmatter; copy outlets/_template.md'];
  need(fm, ['type', 'slug', 'name', 'checked'], errs);
  if (fm.type && fm.type !== 'outlet') errs.push('`type` must be outlet');
  if (fm.slug && fm.slug !== basename(file, '.md')) errs.push(`\`slug: ${fm.slug}\` must match the file name`);
  dates(fm, ['checked'], errs);
  return errs;
}

// Open items in a factcheck.md, or null if the file says nothing parseable.
export function openItems(path) {
  if (!existsSync(path)) return null;
  const m = /\*\*Open items:\*\*\s*(\d+)/.exec(readFileSync(path, 'utf8'));
  return m ? Number(m[1]) : null;
}

export function listMd(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'CLAUDE.md' && !f.startsWith('_'));
}

export function listStoryDirs(root) {
  const dir = join(root, 'stories');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(d => !d.startsWith('_') && statSync(join(dir, d)).isDirectory());
}

export function daysSince(date, today = new Date()) {
  if (!DATE.test(date || '')) return null;
  return Math.floor((today - new Date(`${date}T00:00:00`)) / 86400000);
}
