---
name: taste
description: Log a piece of writing Charlie loves or dislikes into foundation/taste/, capturing his reaction first and then the techniques behind it. Use when Charlie shares an article, column or newsletter he liked or hated, says "add this to my taste", or is building his foundations.
argument-hint: [url or title]
---

# Log a taste piece

**Where Charlie's reactions come from.** He types them in the "Reading notes" tab of the
playbook doc (doc `05bd47a0-3c1d-4781-9726-ab03ceb4ff6d`, tab `237aa61f-e27b`, body
`01488f5c-6195`), under each piece's **Your thoughts:** line. When he says "read my notes",
read that tab with the Claude Docs tools, log every piece with new thoughts, then leave one comment at
the top of the tab saying what was logged and where. Never delete or rewrite his notes in the doc. If he
reacts in chat instead, that works too.

**May create:** `foundation/taste/<writer-slug>-<short-title>.md`. **Stops at:** the file and
one question that sharpens his taste, for Charlie to answer or skip.

1. Get the piece: open the URL, or ask Charlie to paste it if it's paywalled or the site won't open for you (Guardian and The Athletic
   currently can't be fetched; free syndicated copies on Yahoo, AOL or MSN often can). Read it in full.
   Don't save the text into the repo.
2. **His reaction comes first, before any analysis.** If it isn't already in his notes, ask: what grabbed him (or put him off), and
   where in the piece. Record his answer under `## What Charlie said` in his words. If he
   doesn't know, ask one concrete question ("which sentence would you have been proudest to
   write?").
3. Then write `## What's going on`: the techniques that explain his reaction. Opening,
   structure, voice, detail, how data or quotes are used, the ending. Point to places ("para 3"),
   at most one short quote.
4. `## Steal-able`: one or two things he could try in a practice drill.
5. If the piece came from `foundation/taste/_queue.md`, add ✓ after its number there.
6. If this writer now has three or more taste pieces, suggest a `study-writer` profile.
7. If you read or wrote the doc, refresh its copy in `playbook/` (see `playbook/README.md`) in the same commit.

Never tell Charlie what he should like. A dislike is as useful as a love.
