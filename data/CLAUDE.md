# data/ - rules of engagement

Numbers the pieces lean on. Since FBref lost its Opta data in January 2026 there's no single
free source; see the playbook's data section for the stack (Understat, StatsBomb open data,
Transfermarkt, FotMob, the FPL API).

| Path | Holds | Committed? |
| --- | --- | --- |
| `raw/` | Pulled files as fetched | No, gitignored; re-fetchable |
| `snapshots/<date>-<what>.csv` | Cleaned extracts a story actually uses | Yes |
| `fetch/` | The scripts that pull and clean | Yes |

## Rules

- Every snapshot has a sidecar `.md` (same name) saying source URL, date pulled and what was
  filtered. A number without provenance can't go in a draft.
- Keep the script that made a snapshot, so it can be re-run when Charlie asks "is that still
  true?".
- Respect each source's terms; prefer official or open data. Don't build anything that
  scrapes at volume.
- Charts for a piece are made from a snapshot, never typed in by hand.
