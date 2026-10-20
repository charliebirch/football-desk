# Whodle logos

Profile-picture options for the Whodle satire account, made 20 October 2026 from the Whodle
game's existing W mark and palette. Each has the SVG source and an 800×800 PNG ready to upload.
`preview.png` shows all four in a circle crop at full and feed size.

**In use: `d-newsprint`** (chosen by Charlie, 2026-10-20). Ink W with a red full stop between
two newspaper rules, on paper. Leans into the fake-news-outlet idea.

| File | Look | Notes |
| --- | --- | --- |
| `d-newsprint` | Ink W, red full stop, newspaper rules on paper | **Current** |
| `b-centre-circle` | W inside a centre circle on a striped pitch | Strongest at feed size; Claude's original pick |
| `a-classic` | The game's W mark on full green | Closest to the old Whodle game |
| `c-sticker` | Green W on a tilted paper sticker | Echoes the game's album-page design; small in feed |

## X header banner

`whodle-x-banner.png` (1500×500, in use from 2026-10-20): newspaper masthead with the red full
stop, dateline "Vol. I · No. 1 / Football news, mostly made up / Sydney edition · Satire".
`banner-mock.png` shows how it sits with the profile picture overlapping. Regenerate with
`python3 banner.py` from this folder (needs Pillow); the dateline text is at the bottom of the
script. Content sits in the middle band because X crops the top and bottom on phones.

## Palette (from the Whodle game)

| Name | Hex |
| --- | --- |
| Paper | `#faf6ee` |
| Ink | `#1a1714` |
| Green | `#1e7a45` |
| Green, dark | `#17663a` |
| Red | `#b23c36` |
| Rule line | `#ddd2be` |

Display typeface is Barlow Condensed 700 (OFL licence, copy in `fonts/`). To make a new size, edit
the SVG and render it to PNG; don't redraw the W by hand.
