# playbook/ - a copy of the playbook doc

The playbook doc (https://claude.ai/artifact/1i79F7Cw76QG8ySqdU8F3z, doc id
`05bd47a0-3c1d-4781-9726-ab03ceb4ff6d`) is where Charlie types from his phone or laptop. This
folder is a markdown copy of it, so the project can be picked up anywhere without access to
Claude's docs. **The doc is the live copy; these files are snapshots.**

| File | Doc tab | What it holds |
| --- | --- | --- |
| `strategy.md` | Freelance Football Journalist: AI Setup Playbook (`9f52a570-6a38`) | The original research (20 Oct 2026): angle, market, where AI fits, tools, platforms, data sources, pitching, ethics, the 90-day plan |
| `reading-notes.md` | Reading notes (`237aa61f-e27b`) | Charlie's raw reactions to the taste queue, plus the craft-picks checklist |
| `ideas-inbox.md` | Ideas inbox (`316f2bd2-9935`) | Ideas typed from his phone. Unticked bullets aren't in `ideas/` yet |
| `library.md` | Library (`bd88a78f-37d6`) | The first book and writer list; `library/reading-list.md` supersedes it |

## Rules

- **Never edit these files by hand.** Change the doc, then refresh the copy. Refreshing means
  exporting each tab as markdown with the Claude Docs tools and replacing the file, keeping the
  one-line header.
- **Refresh at the end of any session that read or wrote the doc,** and in the same commit as
  the work it fed (taste files, ideas).
- **Where the strategy and the repo disagree, the repo wins.** `strategy.md` was written before
  the repo existed. Later decisions in `STATUS.md` replace parts of it. For example: the factory
  is this repo, not a claude.ai Project; foundations come before "three pieces unaided"; satire
  is parked; Whodle is the satire account. `STATUS.md` has the roadmap that replaces the 90-day
  plan.
