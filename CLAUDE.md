# Football Desk

Charlie's journalism factory: English football seen from Australia, plus FPL. A git repo of
markdown, worked in with Claude Code (Conductor, the desktop app, or a cloud session from the
phone). No app, no build step. Charlie types notes and ideas in the playbook doc (a copy is in
`playbook/`); this repo is where the work happens and is the record. Everything needed to pick
the project up is here, apart from what `STATUS.md` lists under "What lives outside this repo".

**Talking to Charlie:** `~/.claude/CLAUDE.md` holds his writing rule and loads in every session
on his Mac. In a cloud session or another tool it may not be loaded; the short version is the
rest of this paragraph. Follow it in replies, not just in files. Files here are dense
reference; messages to him are not. Lead with what he needs to decide or do, then stop.

**What success is:** published pieces Charlie is proud to put his name to, a growing list of
readers, and paid commissions. Not volume. A week with one strong piece beats a week with five
forgettable ones, and the factory exists to give him more time on the one, not to fill the
folders. Weigh every proposed piece of work against that.

## Where things live

Every folder has its own `CLAUDE.md` with its rules of engagement. It loads when you touch a
file there; read it before writing in that folder if it hasn't loaded.

| Folder | Holds | Who creates files there |
| --- | --- | --- |
| `STATUS.md` | **Start here.** Current state, open threads, decisions log. | Claude updates; Charlie owns |
| `foundation/` | Style guide, red lines, pillars, writer craft profiles, Charlie's voice samples | Charlie decides; Claude drafts on request |
| `inbox/` | Raw dumps: thoughts, podcast notes, links. Unprocessed. | Anyone, any format |
| `ideas/` | One file per idea, with status. The pipeline's front door. | Claude, only from Charlie's words or a skill he ran |
| `stories/<slug>/` | Everything for one greenlit piece, from brief to published URL | Claude and Charlie, only once greenlit |
| `outlets/` | One file per publication: editors, rates, what they buy, pitch history | Claude researches; Charlie confirms |
| `library/` | Book notes and research notes. `library/books/` is never committed | Claude writes notes; books are Charlie's files |
| `playbook/` | A markdown copy of the playbook doc's tabs. Never hand-edited; refreshed from the doc | Claude, by exporting the doc |
| `data/` | Data pulls with source and date, plus the scripts that fetch them | Claude |
| `brands/` | Satire and quiz output, kept apart from his byline | Claude drafts; Charlie picks |
| `scripts/` | `board.mjs` (pipeline view), `check.mjs` (lint), hooks | Claude, carefully |

Anything that doesn't fit a row above doesn't get made. Ask where it goes instead of
inventing a folder; the write hook refuses unknown top-level paths anyway.

## The pipeline

**Foundations first.** Charlie is new to writing. Until `foundation/style-guide.md` reaches
`status: v1`, the work is the foundation stage in `foundation/CLAUDE.md` (taste, teachers,
craft, practice), and no idea can be greenlit; the write hook enforces it. Ideas can still be
captured.

`ideas/` file → Charlie greenlights → `stories/<slug>/` → research → **Charlie drafts** →
edit pass → fact-check → ready → pitched or published → repurposed.

Status lives in frontmatter, one field, one vocabulary:
`idea → greenlit → researching → drafting → checking → ready → pitched → published`, plus
`parked` (paused, keep) and `killed` (dead, keep the file and the reason). Run
`node scripts/board.mjs` to see the whole pipeline; it also runs at session start.

## Settled decisions - don't reopen casually

If you think one is wrong, say so and argue it. Don't quietly work around it.

- **Charlie writes the first draft of anything under his byline.** Claude researches, outlines
  on request, challenges, line-edits and fact-checks. Satire, quiz questions and social copy
  are the exceptions: Claude drafts, Charlie picks and edits.
- **Nothing moves to `greenlit` except on Charlie's word in the conversation.** Not inferred
  from enthusiasm, not "he'll probably want this". Ask.
- **One story, one folder.** Research, sources, draft, checks, pitch and socials for a piece
  all live in `stories/<slug>/`. Never scatter a story across folders.
- **Every fact has a source URL or a named primary source in `sources.md`.** A fact without
  one is not a fact yet; it goes in the open-questions list.
- **No AI-supplied quotes, ever.** A quote exists only if Charlie heard it, recorded it or
  read it in a primary source, and `sources.md` says which.
- **British English.** Football, not soccer; match, not game, unless it reads better.
- **Satire never carries Charlie's name, and never invents a quote a real person could be
  believed to have said.**

## Rules against busywork

The factory must not produce content for its own sake. These hold every session:

- **No unsolicited files.** Create a file only when Charlie asked, or when a skill he invoked
  says to. "It might be useful" is not a reason.
- **Every content file names its destination** in frontmatter (`for:` an outlet, the
  newsletter, a social channel). No destination, no file.
- **Suggest, don't stockpile.** Claude may suggest at most three new ideas in a session, as a
  message, and writes them to `ideas/` only if Charlie says yes. Mark them `origin: claude`.
- **Edit before creating.** If a file for this already exists, update it.
- **Stale is flagged, never deleted.** The board marks ideas untouched for 30 days. Propose
  parking or killing them; Charlie decides; nothing is deleted.
- **Stop at the gate.** Each stage ends with something for Charlie to decide. Say what it is
  and stop, rather than rolling on into the next stage.

## Before proposing something, check whether it was decided

`STATUS.md` holds the decisions log with reasons. `git log` holds the rest; write commit
messages that say why. If you're about to suggest something as new and it isn't, that's a miss.

## Skills - load the matching one before acting

Foundation: `taste`, `study-writer`, `practice`. Pipeline: `capture-idea`, `research-brief`,
`edit-pass`, `fact-check`, `pitch`, `repurpose`. Brands: `satire`, `quiz`. They live in `.claude/skills/`. Each says what it may create
and where it stops. If a skill and this file disagree, this file wins; fix the skill.

## Non-negotiables

- Run `node scripts/check.mjs` after changing anything in `ideas/`, `stories/` or `outlets/`.
  It must pass before you say the work is done; show its output.
- `fact-check` runs in a fresh subagent that hasn't seen the drafting. The writer never grades
  its own work.
- Never commit anything under `library/books/` or `data/raw/`. Copyrighted books and raw data
  pulls stay local; `.gitignore` covers both - don't loosen it.
- Branch from `origin/main`; Charlie merges. Commit messages say why, not just what.
