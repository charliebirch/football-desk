# library/ - rules of engagement

Research material that outlives one story.

| Path | Holds | Committed? |
| --- | --- | --- |
| `books/` | Charlie's own book files (EPUB, PDF) | **Never.** Gitignored: copyrighted, and the repo is on GitHub |
| `notes/<book-slug>.md` | Claude's notes on a book: arguments, facts with page refs, angles for stories | Yes |
| `reading-list.md` | Books to get and why | Yes |

## Rules

- Notes summarise and point (chapter, page). They don't reproduce passages; one short quote
  per note, attributed, when the exact wording matters.
- Tag each note with the ideas or stories it feeds (`feeds: [are-city-fans-in-denial]`), so a
  grep for a slug finds its reading.
- A fact from a book used in a draft still goes in that story's `sources.md` with the page.
