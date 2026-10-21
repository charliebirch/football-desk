# Taste

One file per piece Charlie loves or dislikes: `<writer-slug>-<short-title>.md`, made by the
`taste` skill. `_profile.md` is the synthesis across all of them; `_queue.md` is the reading
list. Football writing first, but anything he loves the writing of counts.

Format:

```markdown
---
type: taste
verdict: love            # love | mixed | dislike
writer:
title:
url:
outlet:
form:                    # news report, column, data piece...
queue:                   # number in _queue.md, if from there
claude_read: yes         # or no (and why), so analysis that rests only on his notes is visible
added: YYYY-MM-DD
---

## What Charlie said
His reaction, in his words, captured before any analysis.

## What's going on
The techniques behind his reaction: opening, structure, voice, detail, ending.

## Steal-able
One or two things he might try in a practice drill.
```
