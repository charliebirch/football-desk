# Football Desk

Charlie's journalism factory. Markdown in git, worked in with Claude Code.

## Use it

Open the folder in Conductor or the Claude desktop app's Code tab (or start a cloud session
on the GitHub repo from the phone). At session start Claude sees the pipeline board. Then talk
to it normally; these are the moves:

| Say | What happens | Where it stops |
| --- | --- | --- |
| "idea: ..." or "process the inbox" | `capture-idea` files it in `ideas/` | Asks which to greenlight |
| "greenlight <idea>" / "research <idea>" | `research-brief` opens `stories/<slug>/` | Research summary; you draft |
| "edit my draft of <story>" | `edit-pass` writes `edit-notes.md` | Ranked notes for you to accept |
| "fact-check <story>" | `fact-check` runs in a fresh subagent | Open-item count |
| "pitch <story> to <outlet>" | `pitch` drafts `pitch.md` | Draft; you send |
| "repurpose <story>" | `repurpose` writes `social.md` | Drafts; you post |
| "study <writer>" | `study-writer` builds a craft profile | Techniques for you to pick |
| "satire batch" / "quiz" | Drafts in `brands/` | You pick |

## Checks

```bash
node scripts/board.mjs   # the pipeline, what's waiting on you, what's stale
node scripts/check.mjs   # lint: frontmatter, statuses, gates
```

The write hook (`scripts/hooks/gate.mjs`, wired in `.claude/settings.json`) blocks writes
outside the desk folders, story folders for ideas you haven't greenlit, and idea, brief or
outlet files with broken frontmatter. Needs Node (any recent version; no packages).

See `CLAUDE.md` for how Claude works here and `STATUS.md` for where things stand.
