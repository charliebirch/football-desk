# Where the Football Desk is

Living status. **Read this first when picking the project back up.** `CLAUDE.md` says how to
work here; this says what state the project is in, what's open, and what was decided.

Last updated **2026-10-21**.

## State

Scaffold built 20 October 2026; on GitHub at charliebirch/football-desk. **In the foundation
stage**: Charlie is new to writing, so taste, teachers, craft and practice come before any
story (see `foundation/CLAUDE.md`). Stories are locked until the style guide reaches v1.

Taste is done for now (17 pieces queued, 15 with reactions, draft profile in
`foundation/taste/_profile.md`). Next is picking craft techniques, then practice drills.

## Roadmap

Replaces the 90-day plan in `playbook/strategy.md`, which assumed writing would start in week
one. Each phase starts when the one before it is done, not on a date.

1. **Set-up: done (20-21 Oct).** Strategy research, this repo, skills and hooks, Whodle
   repurposed as the satire brand, hello@whodle.io, X account.
2. **Foundations: now.** Taste (done) → craft picks and `foundation/craft.md` → writer
   profiles (Liew first, then Opta Analyst) → craft books (`library/reading-list.md`) → practice
   drills, starting with a short column, until three pieces sit in `voice-samples/` → style
   guide v1, which unlocks stories.
3. **Home and first pieces.** Choose the newsletter home (the strategy recommends Substack; not
   decided). Greenlight the first idea from `ideas/`, research it, Charlie drafts. Aim for one
   piece a week at 700-900 words. Distribution on Bluesky and X.
4. **First bylines.** Fill `outlets/`, then pitch about three a week. Try one volume outlet for
   paid practice, and send one specific data request to the Opta Analyst press office.
5. **Compound.** First paid commission. Paid subscriptions only once free sign-ups grow week on
   week. Try one video format. Review what drove readers and commissions, and do more of that.

**Parked or later, each with its trigger:**
- Satire on Whodle: after the foundations (parked 20 Oct).
- Quiz slot in the newsletter: when the newsletter launches.
- Retiring the Whodle game: any time; reuse its games in the newsletter.
- Podcast scanning for story ideas: after a few pieces have gone through the pipeline.
- Live football database, and a weekly editor's-notes scan: Charlie's ideas, 21 Oct. Needed
  once there's data-led work and published pieces.
- Reels and video: once there are 8-10 published pieces to cut from.
- A-League: phase 2, once the process runs.

## Open threads

- **Taste profile:** Charlie answered its questions on 21 Oct: lane confirmed as a start,
  column first, ~700-900 words. **Still waiting on** his craft picks (C1-C14, a checklist in the
  doc's Reading notes tab) and his reactions to #16/#17 (first person vs third). Then: profile
  to v1, fill `foundation/craft.md`, first column drill. #5 (Delaney) unread: the notes first
  logged as #5 were for #4 (Wilson), corrected 21 Oct.
- **Ideas inbox:** seven new ideas in the doc's Ideas inbox tab (copy in
  `playbook/ideas-inbox.md`), not yet in `ideas/`. Say "process my inbox". Claude's two
  suggestions (the 3am fan; FPL Draft) are still waiting for a yes.
- **Process ideas** (21 Oct, not started): a football database that updates live as a
  foundation for the writing; a weekly editor's-notes scan for published pieces that need
  updating.
- **Craft books:** get the four in `library/reading-list.md` (craft section) into
  `library/books/`.
- **Satire:** craft guide done (`brands/satire/craft.md`). **Parked by Charlie on 20 Oct** until
  the writing foundations are in place. The X account is set up as Whodle (d-newsprint picture,
  banner, bio, 2FA); nothing posted. Bluesky, Instagram, TikTok to follow.
- **Brand and domain:** journalism under Charlie's own name; pitches go from his personal email
  until he buys a domain in his name. hello@whodle.io forwards to his Gmail via Cloudflare
  Email Routing (free; no Google Workspace).
- **Whodle game:** Charlie plans to retire it and reuse its games in the newsletter. Not done
  yet; the repo stays archived, not deleted. Whether quizzes also run under Whodle is open.

## What lives outside this repo

Everything needed to carry on is in git, except these. If the project moves, take them too.

| What | Where | Copy in the repo? |
| --- | --- | --- |
| The playbook doc, where Charlie types notes and ideas | https://claude.ai/artifact/1i79F7Cw76QG8ySqdU8F3z | Yes, `playbook/`, refreshed each session that touches the doc |
| Charlie's writing rule for how Claude talks to him | `~/.claude/CLAUDE.md` on his Mac | **No.** A cloud session or a new tool won't see it |
| Email forwarding for hello@whodle.io | Cloudflare dashboard, whodle.io → Email Routing | Described above; nothing to copy |
| The Whodle X account | x.com, Charlie's login | Logos and banner in `brands/satire/logos/` |
| The Whodle game | github.com/charliebirch/whodle, live at whodle.io | Separate repo |
| Claude's memory of Charlie | claude.ai memory | Not needed: anything the desk depends on is written here |

## Decisions log

Newest first. Each says why, so it isn't re-argued by accident.

| Date | Decision | Why |
| --- | --- | --- |
| 2026-10-21 | `playbook/` holds a markdown copy of the playbook doc, refreshed in any session that touches the doc | Charlie wants to be able to move the project anywhere and pick it up from GitHub alone. The doc stays the place he types |
| 2026-10-21 | Practise the column first, at 700-900 words for real pieces (1,000 ceiling); drills 200-500 | Charlie's call on the column: it needs no insider access, and it suits his data and his far-away view. Length is Claude's recommendation from #4 and #10, to confirm after the first drills |
| 2026-10-21 | Working lane: data-backed, plain-spoken, a bit of wit, from the far-away seat | Drawn from his reactions to 15 pieces; Charlie: "a good start", not the whole picture |
| 2026-10-20 | Whodle satire follows `brands/satire/craft.md`: copy the newspaper form, keep everything true but one thing, headline-first with high volume, six tagged joke engines, punch up | Codified from how The Onion and The Betoota Advocate describe their own craft (sources in the file), so batches get better by engine rather than by luck |
| 2026-10-20 | Foundations first: no story until the style guide is v1, built from taste, craft and practice, not from three unaided pieces | Charlie is new to writing and wants the foundations in place before iterating on a piece. Enforced in the write hook so it can't drift |
| 2026-10-20 | Whodle profile picture: `d-newsprint` (options in `brands/satire/logos/`) | Charlie's pick; leans into the fake-news-outlet idea. `b-centre-circle` is the alternative if it underperforms at feed size |
| 2026-10-20 | The satire account is Whodle, on whodle.io | Charlie owns the domain and the name; the game had a small audience (about 285 finished games when last measured) and no email list, so retiring it costs little. Keeps satire well away from his byline |
| 2026-10-20 | Angle: English football and the PL seen from Australia, plus FPL. A-League is phase 2 | Charlie writes best about what he cares about; the far-away seat is the distinctive part, not the topic |
| 2026-10-20 | Journalism under Charlie's name; Whodle as the games arm, not the masthead | Editors commission people. Whodle's codebase is a game with deliberate constraints (no build step, host-only cookie identity) and shouldn't carry articles |
| 2026-10-20 | Charlie drafts anything under his byline; AI researches, edits, checks | Editors now screen pitches for AI; Substack readers can scan posts for AI share; one fabricated fact ends a freelance career |
| 2026-10-20 | Repo of markdown + Claude Code, not a claude.ai Project | CLAUDE.md per folder, skills, hooks and git history are only available this way, and it works in Conductor and from the phone via cloud sessions |
| 2026-10-20 | Folder CLAUDE.md files rather than `.claude/rules/` | Charlie wanted the rules of engagement visible in each folder; they lazy-load the same way. One mechanism, not two |
| 2026-10-20 | Hooks enforce structure (allowed folders, frontmatter, greenlight gate); CLAUDE.md asks for judgement | Instructions are requests; hooks are guarantees. Put the things that must always hold in hooks |
