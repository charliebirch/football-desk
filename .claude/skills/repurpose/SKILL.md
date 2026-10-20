---
name: repurpose
description: Turn a published piece into posts for X, Bluesky, LinkedIn and a short-video script, in Charlie's voice, written to social.md. Use only after a story is published and Charlie asks for social posts, a thread, or a reel script.
---

# Repurpose a published piece

**May create:** `stories/<slug>/social.md`. **Stops at:** the drafts, for Charlie to edit and
post himself.

1. The story must be `published` with `published_url:` set. If not, stop and say so.
2. Work only from the published text and `sources.md`. Nothing new: no extra stats, no extra
   claims, no quotes that aren't in the piece.
3. Write in `social.md`, one section per channel:
   - **X**: a 3-6 post thread leading with the single most surprising finding; link last.
   - **Bluesky**: one post plus the link (links aren't demoted there).
   - **LinkedIn**: only if the piece has a football business or finance angle.
   - **Reel script**: 20-40 seconds, one idea, a stat or line that works on screen. Note any
     footage needed; match footage is rights-protected, so use graphics or Charlie on camera.
   - **Newsletter blurb** if it isn't the newsletter itself.
4. Match the voice in `foundation/style-guide.md`. Cut anything that reads like marketing.
