# Where the Football Desk is

Living status. **Read this first when picking the project back up.** `CLAUDE.md` says how to
work here; this says what state the project is in, what's open, and what was decided.

Last updated **2026-10-20**.

## State

Scaffold built 20 October 2026. No pieces published yet. Foundation files are templates
waiting for Charlie's three unaided pieces (see `foundation/CLAUDE.md`, step 1).

Strategy and research: the playbook doc,
https://claude.ai/code/artifact/05bd47a0-3c1d-4781-9726-ab03ceb4ff6d (tabs: playbook, Story
ideas, Library). The repo is the source of truth for ideas from here on; the doc's Story
ideas tab was the seed.

## Open threads

- Write three pieces unaided so `foundation/style-guide.md` can describe Charlie's real voice.
- Choose writers for the first craft profiles (`study-writer`). Shortlist in
  `foundation/writers/README.md`.
- Brand and domain: journalism under Charlie's own name; pitches go from his personal email
  until he buys a domain in his name. Whodle is the satire account (see decisions).
  hello@whodle.io forwards to his Gmail via Cloudflare Email Routing (free; no Google
  Workspace). X account being set up as Whodle; Bluesky, Instagram, TikTok to follow.
- Whodle game: Charlie plans to retire it and reuse its games in the newsletter. Not done
  yet; the repo stays archived, not deleted. Whether quizzes also run under Whodle is open.
- Podcast scanning (Football Ramble, Tifo, Business of Sport, On the Continent): deliberately
  deferred until the scaffold has been used for a few pieces.

## Decisions log

Newest first. Each says why, so it isn't re-argued by accident.

| Date | Decision | Why |
| --- | --- | --- |
| 2026-10-20 | Whodle profile picture: `d-newsprint` (options in `brands/satire/logos/`) | Charlie's pick; leans into the fake-news-outlet idea. `b-centre-circle` is the alternative if it underperforms at feed size |
| 2026-10-20 | The satire account is Whodle, on whodle.io | Charlie owns the domain and the name; the game had a small audience (about 285 finished games when last measured) and no email list, so retiring it costs little. Keeps satire well away from his byline |
| 2026-10-20 | Angle: English football and the PL seen from Australia, plus FPL. A-League is phase 2 | Charlie writes best about what he cares about; the far-away seat is the distinctive part, not the topic |
| 2026-10-20 | Journalism under Charlie's name; Whodle as the games arm, not the masthead | Editors commission people. Whodle's codebase is a game with deliberate constraints (no build step, host-only cookie identity) and shouldn't carry articles |
| 2026-10-20 | Charlie drafts anything under his byline; AI researches, edits, checks | Editors now screen pitches for AI; Substack readers can scan posts for AI share; one fabricated fact ends a freelance career |
| 2026-10-20 | Repo of markdown + Claude Code, not a claude.ai Project | CLAUDE.md per folder, skills, hooks and git history are only available this way, and it works in Conductor and from the phone via cloud sessions |
| 2026-10-20 | Folder CLAUDE.md files rather than `.claude/rules/` | Charlie wanted the rules of engagement visible in each folder; they lazy-load the same way. One mechanism, not two |
| 2026-10-20 | Hooks enforce structure (allowed folders, frontmatter, greenlight gate); CLAUDE.md asks for judgement | Instructions are requests; hooks are guarantees. Put the things that must always hold in hooks |
