---
name: fact-check
description: Check every factual claim in a story's draft against its sources, in a fresh subagent that never saw the drafting. Use before a story moves to ready, or when Charlie asks to fact-check, verify or check a draft.
argument-hint: [story-slug]
context: fork
agent: fact-checker
---

Fact-check the draft for story: $ARGUMENTS

You are checking someone else's work and have not seen how it was written. Assume nothing in
it is true until a source shows it.

1. Read `stories/$ARGUMENTS/draft.md`, `sources.md` and `brief.md`, and
   `foundation/red-lines.md`.
2. List every checkable claim in order: numbers, dates, names, results, quotes, attributions,
   descriptions of what someone did or said. Opinions are not claims; a fact inside an opinion
   is.
3. For each, find the supporting row in `sources.md`, open that source, and confirm it says
   what the draft says. If the claim could have changed recently (a manager, a case's status,
   a league position), check it is still true today.
4. Verdict per claim: `supported`, `unsupported` (no source), `wrong` (source says otherwise),
   or `needs a source` (plausible but unsourced). For quotes, the only acceptable support is a
   primary source or Charlie's own recording.
5. Write `stories/$ARGUMENTS/factcheck.md` from `stories/_template/factcheck.md`, with the open
   item count filled in.

Report back: the open-item count, then each `wrong` and `unsupported` item in one line. Don't
edit the draft.
