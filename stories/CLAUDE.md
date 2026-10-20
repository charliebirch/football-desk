# stories/ - rules of engagement

One folder per greenlit piece: `stories/<slug>/`, slug identical to its `ideas/<slug>.md`.
The write hook refuses to create anything here unless that idea file says `status: greenlit`
(or the story already has a `brief.md`). That is the gate that stops the factory making work
nobody asked for.

## What lives in a story folder

Copy from `stories/_template/`. Create a file when its stage arrives, not up front.

| File | Stage | Written by | Purpose |
| --- | --- | --- | --- |
| `brief.md` | greenlit | Claude from the idea, Charlie confirms | Angle, audience, destination, length, deadline, stage |
| `research.md` | researching | `research-brief` | What's known, what's contested, what's missing |
| `sources.md` | researching onwards | Anyone | Every source: URL or primary source, date checked, what it supports |
| `draft.md` | drafting | **Charlie** | The piece. Claude edits only when asked |
| `edit-notes.md` | checking | `edit-pass` | Suggested changes with reasons, for Charlie to accept or reject |
| `factcheck.md` | checking | `fact-check` (fresh subagent) | Every claim, its source, verdict |
| `pitch.md` | ready | `pitch` | Pitch email drafts per outlet, and what happened |
| `social.md` | published | `repurpose` | Posts derived from the published piece |

## Stage rules

- The stage lives in `brief.md` frontmatter (`status:`). Update `updated:` with it.
- When Charlie starts `draft.md`, set `drafting`. When he asks for an edit or check, `checking`.
- **`checking` → `ready` needs `factcheck.md` with no open items.** Say so if any remain.
- **`published` needs the URL** in `brief.md` (`published_url:`), and a copy of the final
  text in `foundation/voice-samples/` if Charlie wrote it unaided.
- After publishing, ask whether to `repurpose`. Don't do it unasked.

## Never

- Write into `draft.md` beyond an edit Charlie asked for.
- Add a fact to `draft.md` that isn't in `sources.md`.
- Start a second folder for the same story, or keep story material anywhere else.
