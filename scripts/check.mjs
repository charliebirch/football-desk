#!/usr/bin/env node
// Lint the desk: frontmatter, statuses, story/idea links, gates. Exit 1 on any error.
// Run after changing ideas/, stories/ or outlets/. Usage: node scripts/check.mjs
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validateIdea, validateBrief, validateOutlet, readFm, listMd, listStoryDirs, openItems,
  STORY_FILES, STORY_DIRS,
} from './lib/desk.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

for (const f of listMd(join(root, 'ideas'))) {
  for (const e of validateIdea(f, readFileSync(join(root, 'ideas', f), 'utf8'), root)) err(`ideas/${f}`, e);
}

for (const f of listMd(join(root, 'outlets'))) {
  for (const e of validateOutlet(f, readFileSync(join(root, 'outlets', f), 'utf8'))) err(`outlets/${f}`, e);
}

for (const slug of listStoryDirs(root)) {
  const dir = join(root, 'stories', slug);
  const where = `stories/${slug}`;
  const idea = readFm(join(root, 'ideas', `${slug}.md`));
  if (!idea) err(where, `no matching ideas/${slug}.md`);
  else if (!['greenlit', 'parked', 'killed'].includes(idea.status)) err(where, `ideas/${slug}.md is \`${idea.status}\`, so this story was never greenlit`);

  for (const f of readdirSync(dir)) {
    const isDir = statSync(join(dir, f)).isDirectory();
    if (isDir ? !STORY_DIRS.includes(f) : !STORY_FILES.includes(f)) err(`${where}/${f}`, 'not a story file; see stories/CLAUDE.md');
  }

  const briefPath = join(dir, 'brief.md');
  if (!existsSync(briefPath)) { err(where, 'missing brief.md'); continue; }
  for (const e of validateBrief(slug, readFileSync(briefPath, 'utf8'), root)) err(`${where}/brief.md`, e);

  const status = readFm(briefPath)?.status;
  if (['ready', 'pitched', 'published'].includes(status)) {
    const open = openItems(join(dir, 'factcheck.md'));
    if (open === null) err(where, `is \`${status}\` without a completed factcheck.md`);
    else if (open > 0) err(where, `is \`${status}\` with ${open} open fact-check item(s)`);
  }
  if (['drafting', 'checking', 'ready', 'pitched', 'published'].includes(status) && !existsSync(join(dir, 'sources.md'))) {
    err(where, `is \`${status}\` without sources.md`);
  }
}

if (errors.length) {
  console.log(`check: ${errors.length} problem(s)`);
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}
console.log('check: ok');
