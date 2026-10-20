#!/usr/bin/env node
// PreToolUse hook for Write|Edit|MultiEdit. Enforces what CLAUDE.md can only ask for:
//   1. files go only in known top-level folders
//   2. nothing is written under stories/<slug>/ until the style guide is v1 (foundations first)
//      and ideas/<slug>.md is greenlit
//   3. only known file names inside a story folder
//   4. idea, brief and outlet files have valid frontmatter after the change
// Exit 2 blocks the call and sends stderr back to Claude as the reason. Exit 0 allows.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, sep, basename } from 'node:path';
import {
  ROOT_FILES, TOP_DIRS, STORY_FILES, STORY_DIRS, readFm, validateIdea, validateBrief, validateOutlet,
  parseFrontmatter, foundationDone,
} from '../lib/desk.mjs';

const FOUNDATION_MSG = root => `the foundation stage isn't finished: foundation/style-guide.md is \`${readFm(resolve(root, 'foundation', 'style-guide.md'))?.status || 'missing'}\`, and ideas can't be greenlit until it's v1. See foundation/CLAUDE.md.`;
const block = msg => { process.stderr.write(`Blocked by the Football Desk write gate: ${msg}\n`); process.exit(2); };

let input;
try { input = JSON.parse(readFileSync(0, 'utf8')); } catch { process.exit(0); }
const ti = input.tool_input || {};
if (!ti.file_path) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
const abs = resolve(root, ti.file_path);
const rel = relative(root, abs);
if (rel.startsWith('..') || rel === '') process.exit(0); // outside the desk: not ours to police
const parts = rel.split(sep);

// 1. Known places only.
if (parts.length === 1) {
  if (!ROOT_FILES.includes(parts[0])) block(`\`${rel}\` isn't one of the root files (${ROOT_FILES.join(', ')}). Put it in the right folder; see the map in CLAUDE.md.`);
} else if (!TOP_DIRS.includes(parts[0])) {
  block(`\`${parts[0]}/\` isn't a desk folder. Allowed: ${TOP_DIRS.join(', ')}. Ask Charlie before adding one.`);
}

// What the file will contain after this call.
function after() {
  if (input.tool_name === 'Write') return ti.content ?? '';
  let text = existsSync(abs) ? readFileSync(abs, 'utf8') : '';
  const edits = input.tool_name === 'MultiEdit' ? (ti.edits || []) : [ti];
  for (const e of edits) {
    if (typeof e.old_string !== 'string') continue;
    text = e.replace_all ? text.split(e.old_string).join(e.new_string ?? '') : text.replace(e.old_string, e.new_string ?? '');
  }
  return text;
}

// 2 + 3. Story folders.
if (parts[0] === 'stories' && parts.length >= 2 && parts[1] !== 'CLAUDE.md' && !parts[1].startsWith('_')) {
  if (parts.length === 2) block('story material lives in stories/<slug>/, not loose in stories/.');
  const slug = parts[1];
  const name = parts[2];
  if (parts.length === 3 ? !STORY_FILES.includes(name) : !STORY_DIRS.includes(name)) {
    block(`\`${name}\` isn't a story file. Allowed: ${STORY_FILES.join(', ')} and ${STORY_DIRS.join(', ')}/. See stories/CLAUDE.md.`);
  }
  const hasBrief = existsSync(resolve(root, 'stories', slug, 'brief.md'));
  if (!hasBrief) {
    if (!foundationDone(root)) block(FOUNDATION_MSG(root));
    const idea = readFm(resolve(root, 'ideas', `${slug}.md`));
    if (!idea) block(`there's no ideas/${slug}.md. Every story starts as an idea Charlie greenlights.`);
    if (idea.status !== 'greenlit') block(`ideas/${slug}.md is \`${idea.status}\`. Only Charlie greenlights; ask him, then set status: greenlit.`);
    if (name !== 'brief.md') block(`start the story with stories/${slug}/brief.md.`);
  }
  if (name === 'brief.md' && parts.length === 3) {
    const errs = validateBrief(slug, after(), root);
    if (errs.length) block(`stories/${slug}/brief.md: ${errs.join('; ')}`);
  }
}

// 4. Frontmatter on ideas and outlets.
const file = basename(rel);
if (parts.length === 2 && file.endsWith('.md') && file !== 'CLAUDE.md' && !file.startsWith('_')) {
  if (parts[0] === 'ideas') {
    const text = after();
    const errs = validateIdea(file, text, root);
    if (errs.length) block(`${rel}: ${errs.join('; ')}`);
    if (parseFrontmatter(text)?.status === 'greenlit' && !foundationDone(root)) block(FOUNDATION_MSG(root));
  }
  if (parts[0] === 'outlets') {
    const errs = validateOutlet(file, after());
    if (errs.length) block(`${rel}: ${errs.join('; ')}`);
  }
}

process.exit(0);
