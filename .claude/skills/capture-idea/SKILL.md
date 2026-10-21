---
name: capture-idea
description: Turn a story idea Charlie mentions, or entries in inbox/dump.md, into ideas/ files. Use when Charlie says "idea:", "add this to my ideas", "process the inbox", or describes a piece he might write. Never greenlights.
---

# Capture an idea

**May create:** `ideas/<slug>.md`. **May edit:** `inbox/dump.md` (marking entries processed),
an existing idea's `## Notes`. **Stops at:** a list of what was captured, for Charlie to read.

1. Get the raw material: Charlie's message; the unprocessed entries in `inbox/dump.md`
   (anything without a `→` marker); and, when he says "process my inbox", the **Ideas inbox**
   tab of the playbook doc (doc `05bd47a0-3c1d-4781-9726-ab03ceb4ff6d`, tab `316f2bd2-9935`,
   body `58c0dd71-a0c4`), where he types ideas from his phone. Read it with the Claude Docs
   tools; every bullet under "New ideas" without a ✓ is unprocessed.
2. For each, decide what it is. Not everything is an idea: a link may belong in a story's
   `sources.md`, an outlet note in `outlets/`, a book in `library/reading-list.md`. Route it
   and say where.
3. Before creating, search for duplicates: `grep -ril "<two or three key words>" ideas/`. A
   variant of an existing idea goes into that file's `## Notes`.
4. Write `ideas/<slug>.md` from `ideas/_template.md`. Charlie's own words in `## The question`
   as far as possible. Pick the pillar from `foundation/pillars.md`. `origin: charlie` unless
   it's a Claude suggestion he has just accepted.
5. Mark each processed inbox entry: `→ ideas/<slug>.md` or `→ <where it went>` or
   `→ not an idea (<reason>)`. Don't delete entries. In the doc tab, append ` ✓` to each
   processed bullet (insert after his words; never reword them) and add the idea's title to
   "Already in the desk".
6. Run `node scripts/check.mjs`.
   If you read or wrote the doc, refresh its copy in `playbook/` (see `playbook/README.md`) in the same commit.
7. Reply with one line per captured idea (title, pillar), and ask which, if any, to greenlight.
   Stop there.

Don't research the ideas, don't write briefs, don't add your own ideas to the batch. If an idea
strikes you, mention it in the reply (max three per session) and wait for a yes.
