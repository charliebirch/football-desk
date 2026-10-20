#!/usr/bin/env node
// The pipeline at a glance: what's where, what's waiting on Charlie, what's gone stale.
// Runs at session start (via .claude/settings.json) with --brief. Usage: node scripts/board.mjs [--brief]
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFm, listMd, listStoryDirs, openItems, daysSince, STALE_DAYS, STORY_STATUS } from './lib/desk.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const brief = process.argv.includes('--brief');

const ideas = listMd(join(root, 'ideas')).map(f => ({ file: `ideas/${f}`, ...readFm(join(root, 'ideas', f)) }));
const stories = listStoryDirs(root).map(slug => ({
  slug,
  ...readFm(join(root, 'stories', slug, 'brief.md')),
  open: openItems(join(root, 'stories', slug, 'factcheck.md')),
}));

const age = x => daysSince(x.updated);
const stale = [...ideas.filter(i => i.status === 'idea'), ...stories.filter(s => !['published', 'parked', 'killed'].includes(s.status))]
  .filter(x => (age(x) ?? 0) >= STALE_DAYS);

const waiting = [];
for (const i of ideas.filter(i => i.status === 'idea')) waiting.push(`greenlight, park or kill: ${i.title} (${i.file})`);
for (const s of stories) {
  if (s.status === 'researching') waiting.push(`research done, Charlie drafts: ${s.title}`);
  if (s.status === 'checking' && (s.open ?? 1) > 0) waiting.push(`fix ${s.open ?? '?'} fact-check item(s): ${s.title}`);
  if (s.status === 'ready') waiting.push(`pitch or publish: ${s.title}`);
}

const lines = [];
lines.push(`Football Desk board, ${new Date().toISOString().slice(0, 10)}`);
lines.push(`Ideas: ${ideas.filter(i => i.status === 'idea').length} open, ${ideas.filter(i => i.status === 'parked').length} parked, ${ideas.filter(i => i.status === 'killed').length} killed`);
const byStage = STORY_STATUS.map(st => [st, stories.filter(s => s.status === st)]).filter(([, l]) => l.length);
lines.push(`Stories: ${stories.length ? byStage.map(([st, l]) => `${l.length} ${st}`).join(', ') : 'none yet'}`);

if (!brief) {
  for (const [st, l] of byStage) {
    lines.push('', `## ${st}`);
    for (const s of l) lines.push(`- ${s.title} (stories/${s.slug}/)${s.for ? `, for ${[].concat(s.for).join(', ')}` : ''}`);
  }
  lines.push('', '## Open ideas');
  for (const i of ideas.filter(i => i.status === 'idea')) lines.push(`- ${i.title} [${i.pillar}] ${i.origin === 'claude' ? '(Claude suggestion) ' : ''}- ${i.file}`);
}

lines.push('', 'Waiting on Charlie:');
lines.push(...(waiting.length ? waiting.map(w => `- ${w}`) : ['- nothing']));
if (stale.length) {
  lines.push(`Stale (${STALE_DAYS}+ days untouched; propose park or kill, never delete):`);
  lines.push(...stale.map(x => `- ${x.title}`));
}
console.log(lines.join('\n'));
