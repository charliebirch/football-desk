# ideas/ - rules of engagement

The front door of the pipeline. One file per idea: `ideas/<slug>.md`, slug in kebab-case and
identical to the `slug:` field. Copy `_template.md`. The write hook rejects a file whose
frontmatter is missing a required field or uses an unknown status or pillar.

## Who writes here

- From Charlie's own words, or from `capture-idea` processing the inbox at his request.
- Claude's own suggestions only after Charlie says yes to them, with `origin: claude`.
- Before creating, search: `grep -ril "<key words>" ideas/`. If it's a variant of an
  existing idea, add it to that file's notes instead.

## Status here

`idea` → `greenlit` (Charlie's word only) → from then on the story's `brief.md` carries the
stage. Or `parked` / `killed`, with a one-line reason under `## Decision`. Never delete an
idea file; a killed idea stops the same one being suggested again.

## A good idea file

- The question in one sentence. If it can't be put as a question someone wants answered,
  it isn't ready.
- Why it's Charlie's to write: the far-away seat, FPL knowledge, a source he has.
- Where to start: two to five concrete sources or data sets.
- Destination (`for:`) and pillar.

Keep it under a page. Research belongs in the story folder once greenlit, not here.
