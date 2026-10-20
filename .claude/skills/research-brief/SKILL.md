---
name: research-brief
description: Greenlight an idea and build its research pack - brief.md, research.md and sources.md in stories/<slug>/. Use when Charlie says to greenlight, start, research or dig into an idea, or asks what's known about a story. Requires Charlie's explicit go-ahead in the conversation.
---

# Greenlight and research a story

**May create:** `stories/<slug>/brief.md`, `research.md`, `sources.md`. **May edit:** the
idea's `status:` to `greenlit`. **Stops at:** the research summary and the open questions,
for Charlie to read before he drafts.

## 0. Gate

Charlie must have said to go ahead with this idea in this conversation. If he hasn't, ask.
Then set `status: greenlit` and `updated:` in `ideas/<slug>.md` and add a dated line under
`## Decision`. The write hook will refuse the story folder until this is done.

## 1. Brief

Copy `stories/_template/brief.md`. Fill angle, reader, destination, length if known. Leave
anything you'd be guessing blank and list it under `## Open questions`.

## 2. Research

Search the current web; don't rely on memory for anything that could have changed (who
manages whom, what a case's status is, this season's numbers). For each finding:

- Open the page, don't trust the snippet. Record it in `sources.md` with the date checked and
  exactly what it supports.
- Prefer primary sources: club accounts, league statements, official data, the person's own
  words on record.
- Where sources disagree, record both and say which is stronger and why.

Write `research.md` as: what's established (each line citing source #), what's contested,
what's missing, three to five possible angles, and people worth talking to.

For a book Charlie owns, read `library/notes/` first; cite chapter and page.

## 3. Hand back

Set `status: researching` in `brief.md`. Run `node scripts/check.mjs`. Reply with the three
strongest findings, the biggest gap, and the angle you'd pick and why. Then stop: Charlie
drafts next. Offer an outline only if he asks.
