<!-- Snapshot of the "Freelance Football Journalist: AI Setup Playbook" tab of the playbook doc, exported 2026-10-21. The doc is the live copy; see playbook/README.md. -->

# Freelance Football Journalist: AI Setup Playbook

Oct 20, 2026 · @Charlie Birch

## TL;DR

Write about English football through one clear lens, a Premier League fan and FPL obsessive watching from Australia, publish it on your own site and newsletter, feed it with satire, quizzes and short video, and pitch outlets from that portfolio. Claude is the desk editor; AI stays away from facts, quotes and final prose.

| Job | Recommended tool | Approx. cost |
| --- | --- | --- |
| Desk editor, data analysis, repurposing, pitch pipeline | Claude (Project + scheduled tasks + Gmail/Drive) | Your existing plan |
| Source-grounded research | Gemini Notebook (formerly NotebookLM) | Free; Google AI Plus $4.99/mo for more ([Glasp](https://glasp.co/articles/notebooklm-2026)) |
| Quick cited lookups | Perplexity / Comet | Free tier |
| Football data | Understat + StatsBomb open data + Transfermarkt, then Twelve | Free, then paid |
| Transcription | Otter | Free 300 min/mo; Pro from $8.33/mo |
| Home base | Substack (or beehiiv for automation) | 10% of paid revenue (Substack) |
| Video, later | Riverside + Descript + Opus Clip | Month 3+ |

Two 2026 facts shape everything: FBref's free advanced stats are gone, and platforms plus editors now detect and penalise AI-written text.

## Your angle and brand

Your lens is the Premier League from the other side of the world: broad English-football topics you care about, told by a fan watching from Australia who lives and breathes FPL. The topics aren't niche, but the seat is, and it opens Australian outlets later.

| Pillar | Example pieces | Who it's for |
| --- | --- | --- |
| Big English-football questions | Were goals better before VAR? Are City fans in denial? How much does football matter to the English? | UK features desks; your newsletter |
| The far-away fan | 3am kick-offs, staying connected, supporters' clubs in Sydney | Australian outlets; UK fan-culture outlets |
| FPL and FPL Draft | Draft strategy, data-led player calls | FPL sites; your newsletter |
| Humour and games | Satire headlines, quizzes, Whodle | Social growth engine that feeds the newsletter |

**Brand structure (recommended):**

- **Journalism under your own name.** Editors commission people, and your bylines, site and search results should all point to you. A serious piece on City's ownership reads oddly under a game's brand.
- **Whodle as the games arm,** linked from your site and newsletter, with a quiz or Whodle challenge in every issue as the hook. Reuse its code and hosting for the main site if that saves time, but don't make it the masthead.
- **Satire as a third, separate brand** that never carries your byline (see Content formats).
- **Email:** yes, a dedicated address on a domain you own (firstname@yourname) for pitches and sources; Whodle keeps its own. If it's a Google account, Claude's Gmail connector can run the pitch pipeline there without touching your personal inbox.

## Foundation layer: your style, rules and teachers

The factory runs on three files you own: a style guide, a rulebook, and craft profiles of writers you admire. Every draft, edit and repurposed post is checked against them.

1. **Write three pieces unaided first.** The style guide has to describe your voice, not an average of AI and your heroes.
2. **Build craft profiles.** For each writer in the Library tab, gather five pieces you can access and have Claude profile them: how ledes open, structure, use of data and quotes, sentence rhythm, humour, and how they build an audience. Profiles describe technique; they never store copied text.
3. **Compare and choose.** Claude sets your three pieces beside the profiles and lists where you differ and which techniques could fit. You pick; adopted techniques go into the style guide, credited to the writer you took them from.
4. **Write the rulebook:** the red lines from the Ethics section, British spelling, and a format spec per pillar (length, structure, sign-off, quiz slot).
5. **Load it into the Football Desk project** with a "critic" skill that reviews any draft against the style guide and rulebook and flags phrasing that reads as AI.
6. **Refresh monthly:** add your newest pieces and re-run the comparison so the guide tracks how you're actually writing.

Books you own go into the same project as research sources (see Library). Story ideas live in Story ideas.

## Content formats: satire, games and reels

These three are your audience engine; the journalism is the product. Automate the production, keep a human approve step before anything posts.

| Format | What it looks like | How much AI can do | Watch out for |
| --- | --- | --- | --- |
| **Football satire account** | A Betoota Advocate for English football: deadpan fake headlines on real football news | Claude drafts 20 headlines a day from the news brief; you pick 2–3. Image cards generated from a template | Not empty: Satirical Footy already runs on X ([X](https://x.com/SatiricalFooty)) and The Spoof has a football section ([The Spoof](https://www.thespoof.com/spoof-news/football-soccer)), so the gap is quality and voice. TikTok deleted UK satire site NewsThump's account in Feb 2026 after an automated review ([Wikipedia](https://en.wikipedia.org/wiki/NewsThump)). Label it satire in every bio, and never invent quotes from real people that could pass as genuine |
| **Quizzes and games** | Whodle, plus a weekly quiz in the newsletter and on social | Claude generates questions from the week's matches and FPL data; you check every answer | Wrong answers cost trust fast; verify against the data source |
| **Automated reels** | 20–40s stat explainers, quiz clips, satire headline reads, clips from your own podcast or video | Claude writes the script from each piece; Claude Motion (beta, Team and Enterprise first) animates stat explainers ([Claude blog roundup](https://alexaiupdates.substack.com/p/claudes-new-features-in-october-2026)); Descript's Underlord can be triggered by a new article via its API ([CreateWith](https://www.createwith.com/tool/descript/updates/descript-underlord-brings-natural-language-video-editing-to-automated-workflows)); Opus Clip cuts long video | Instagram now labels AI-generated profiles and limits reach for unlabelled ones ([EmbedSocial](https://embedsocial.com/blog/new-instagram-features-2026/)); match footage is rights-protected, so use your own graphics and voice |

**Proof the satire format can grow:** The Charlotten, a local Onion-style account, reached nearly 30,000 followers in under a year ([Axios](https://www.axios.com/local/charlotte/2026/02/25/the-charlotten-parody-satire-instagram)). A football version with a strong voice has a bigger natural audience.

**Build order:** satire account first (cheapest, fastest feedback on your humour), quiz slot in the newsletter from issue one, automated reels once you have 8–10 published pieces to cut from.

## The market in late 2026

Staff football-writing jobs are shrinking, so the realistic route in is a niche you own, published under your own name, that editors can see before you pitch them.

| What changed | When | What it means for you |
| --- | --- | --- |
| Reach plc proposed a net cut of about 160 editorial jobs and closed three titles ([HoldTheFrontPage](https://www.holdthefrontpage.co.uk/2026/news/more-than-150-jobs-set-to-go-at-reach-in-new-cost-cutting-drive/)); its new roles target subscriptions and long-form video ([Media Copilot](https://mediacopilot.ai/reach-editorial-job-cuts/)) | Sep 2026 | Fewer UK staff roles; editors value engaged time and video, not raw volume |
| Minute Media cut about 12% of staff, including senior Sports Illustrated writers ([Barrett Media](https://barrettmedia.com/2026/05/29/sports-illustrated-layoffs-underway/)) | May 2026 | More experienced freelancers competing for the same commissions |
| FBref lost its Opta advanced data (xG, xA, progressive actions) after Stats Perform ended the deal ([Sports Reference](https://www.sports-reference.com/blog/2026/01/fbref-stathead-data-update/)) | Jan 2026 | The default free stats source is gone; your data stack needs rebuilding (see Data section) |
| Substack added Pangram AI-detection that readers can run on any post, plus an optional AI author's note ([TechCrunch](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/)) | Jul 2026 | Readers can now check how much of your prose is AI. Draft in your own words |
| Entry-level paid work still exists at fan/SEO networks, e.g. Football League World hiring remote EFL freelancers who know SEO and NewsNow ([Qwoted listing](https://app.qwoted.com/job_postings/football-league-world-efl-football-journalist-remote-b6df2265-4f63-49cd-8469-9faa4a9807a7)) | Aug 2026 | Fastest way to bylines and pay, but volume-driven and weekend shifts |

**What the money looks like independently.** Most paid sports Substacks charge $7–8 a month ([Write Sports](https://theianpowers.substack.com/p/from-5-to-250-what-the-top-100-sports)), and the same writer reports typical free-to-paid conversion of 1–3% ([Write Sports](https://theianpowers.substack.com/p/substack-is-the-home-stadium)). So 10,000 free readers is roughly 100–300 paying, or about $8.4k–25k a year before fees. Swiss Ramble (club finance) is the proof that a sharp football niche can become a brand ([Favikon](https://www.favikon.com/blog/top-substack-influencers-sports)).

**Implication:** treat the newsletter as your portfolio and lead magnet, and freelance commissions as the early revenue. AI's job is to let one person run research, publishing and pitching at the output of a small desk, without the writing itself reading as AI.

## Where AI helps, and where it mustn't

Use AI heavily for research, data and distribution, moderately for editing, and never as the source of facts, quotes or your finished prose.

| Stage | AI does | You do | Tool |
| --- | --- | --- | --- |
| News monitoring | Morning brief of overnight stories, injuries, press-conference lines for your niche | Decide what's a story | Claude scheduled task; Perplexity |
| Background research | Dossiers on clubs, owners, coaches from documents you chose | Read the primary sources it cites | Gemini Notebook; Gemini Deep Research |
| Data and stats | Scrape, clean and chart Understat/StatsBomb data; suggest patterns | Check every number against the source; decide what it means | Claude (code), Twelve |
| Ideation | Generate angles from the data and news; spot what's under-covered | Pick, and kill the obvious ones | Claude project |
| Interviews | Transcribe, timestamp, pull candidate quotes | Re-listen to every quote you use | Otter |
| Drafting | Outline challenge; "what's missing?"; counter-arguments | Write the piece | You |
| Editing | Line edits against your style guide; cut 20%; headline options | Accept or reject each change | Claude |
| Fact-check | List every factual claim in the draft for you to verify | Verify each one | Claude + Perplexity Check Sources |
| Distribution | Turn a piece into an X thread, Bluesky post, LinkedIn post, carousel copy, clip selections | Edit to your voice | Claude; Opus Clip; YouTube Ask Studio |
| Pitching | Outlet research; critique your pitch as the editor | Write and send the pitch | Claude + Gmail |
| Admin | Tracker updates, follow-up reminders, invoice drafts | Approve and send | Claude + Sheets/Gmail |

**Where your edge is:** relationships, access, watching matches, and an opinion people want. AI compresses everything around those so you spend more time on them.

## Ideal workflow

Run the same weekly loop every week: AI handles monitoring, research, editing passes, repurposing and pipeline admin, while you own the angle choice, the writing and every fact.

**The weekly loop (a diagram in the doc).** The highlighted step is the one AI never does for you.

1. **Monitor:** Claude morning brief; Perplexity checks
2. **Research:** Gemini Notebook; Understat, StatsBomb
3. **Find the angle:** Claude project; AI proposes, you pick
4. **Write (highlighted):** you, not AI; Otter for quotes
5. **Edit and verify:** Claude line edit; you verify each claim
6. **Publish:** Substack, with an honest AI note
7. **Repurpose:** Claude, Opus Clip; X, Bluesky, LinkedIn
8. **Pitch:** Claude + Gmail; you send it

Weekly review: what drove subscribers and commissions sets next week's brief.

Each published piece doubles as portfolio for the pitch step, and the weekly review feeds back into what Monday's brief looks for.

| Day (Sydney) | Focus |
| --- | --- |
| Mon | Read the brief on weekend matches; pick the week's angle |
| Tue–Wed | Research, data, write |
| Thu | Edit, verify, publish |
| Fri | Repurpose; send 3 pitches; update tracker |
| Sat–Sun nights | Watch your niche's matches live (UK evening kick-offs land early morning in Sydney) |

## AI assistants and research tools

Run one primary assistant as your desk editor and one grounded-research tool for anything you will quote; the rest are optional.

| Tool | Latest features that matter (as of Oct 2026) | Football-journalist use |
| --- | --- | --- |
| **Claude** (primary) | Opus 5.5 (Sep 22), Sonnet 5.5 (Sep 28), Haiku 5.5 with 1M-token context (Oct 7) ([MemoryPlugin](https://blog.memoryplugin.com/claude-new-features-october-2026/)). Docs, Slides and Design out of beta on every plan, plus Dashboards and Motion in beta (Oct 8) ([Unite.AI](https://www.unite.ai/anthropic-launches-claude-dashboards-and-motion-takes-docs-out-of-beta/)). Google Docs/Sheets/Slides connectors (Oct 6) and Cowork coming to mobile and web (Oct 15) ([Anthropic](https://claude.com/resources/product-announcements)) | Project per beat with your style guide and source notes; editing passes on your drafts; pitch drafting; Motion for short animated stat explainers; scheduled tasks for a morning news brief |
| **ChatGPT** | GPT-6 with Intelligent UI: answers as interactive charts, forms and small tools (Oct 7) ([MacRumors](https://www.macrumors.com/2026/10/07/chatgpt-intelligent-ui/)). GPT-Live-1.1 voice (Oct 15) and Slides for Pro (Oct 16) ([Releasebot](https://releasebot.io/updates/openai/chatgpt)). Custom GPTs being migrated to plugins and retired ([MemoryPlugin](https://blog.memoryplugin.com/chatgpt-new-features-october-2026/)). Atlas browser shut down Aug 9 ([Wikipedia](https://en.wikipedia.org/wiki/ChatGPT_Atlas)) | Second opinion on angles; voice mode for talking a piece through on a walk. Don't build on custom GPTs now |
| **Gemini** | Gemini 4 Argon is the new frontier model (Oct 13) ([Google AI](https://ai.google.dev/gemini-api/docs/changelog)). Free users limited to Flash-Lite from Oct 9; AI Pro gets Deep Think ([9to5Google](https://9to5google.com/2026/10/03/gemini-model-limits-oct-26/)). Deep Research by voice in Gemini Live ([9to5Google](https://9to5google.com/2026/08/19/gemini-app-ai-mode-study-tools/)). Skills (reusable prompts) rolling out from Oct 13 ([Workspace Updates](https://workspaceupdates.googleblog.com/2026/)) | Deep Research for background dossiers (a club's ownership history, a coach's career). YouTube-native, so useful for summarising press-conference videos |
| **Gemini Notebook** (formerly NotebookLM) | Renamed Jul 16, now with a per-notebook cloud computer that runs code on your sources; Drive auto-sync; 60-second vertical video overviews ([Glasp](https://glasp.co/articles/notebooklm-2026)). Can now suggest and gather sources from a chat ([TechCrunch](https://techcrunch.com/2026/06/08/notebooklms-new-update-will-help-you-build-source-repository-from-chat/)) | One notebook per club or long read: annual reports, transcripts, your interview notes. Answers stay grounded in sources you chose, which is what you want before quoting |
| **Perplexity + Comet** | Comet browser free on Mac, Windows, iOS and Android; Pro/Max add background Work mode ([GeoToolbox](https://geotoolbox.ai/blog/perplexity-comet)). Recent releases added Check Sources and a Source Context Panel ([Releasebot](https://releasebot.io/updates/perplexity-ai)) | Fast cited lookups while browsing ("when did X last start away at Anfield?"); Check Sources before a fact goes in copy |

**Pick for you:** Claude as the hub (you already live in it), Gemini Notebook for source-grounded research, Perplexity for quick cited checks. Skip paying for ChatGPT unless voice mode becomes part of your process.

## Football data platforms

Since FBref lost Opta in January 2026 there is no single free source of current advanced stats, so you combine a free stack with one affordable AI-native tool and let Claude do the analysis in code.

| Source | Cost | What it gives you | AI angle |
| --- | --- | --- | --- |
| [Understat](https://understat.com) | Free | xG and shot data for the top five leagues plus Russia, back to 2014/15 ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)) | Claude can scrape and chart it in Python for you |
| [StatsBomb open data](https://github.com/statsbomb/open-data) | Free | Detailed event data for selected competitions and historical seasons ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)) | Best dataset for learning pass maps and shot maps with Claude-written code |
| FBref (historical only) | Free | Basic stats for 100+ competitions; advanced metrics deleted ([Sports Reference](https://www.sports-reference.com/blog/2026/01/fbref-stathead-data-update/)) | Context and long-run trends, not current-season analysis |
| Sofascore, WhoScored, FotMob | Free | Match ratings and per-game stats across many leagues; need scraping ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)). FotMob is among the free xG alternatives ([StatPair](https://statpair.com/blog/best-xg-websites-2026-comparison)) | Quick checks; cross-reference any number before publishing |
| [Transfermarkt](https://www.transfermarkt.co.uk) | Free | Market values, contract expiries, transfer and injury history ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)) | Raw material for transfer-window pieces |
| [Opta Analyst](https://theanalyst.com/press) | Free to read; press office | Its press team offers custom data requests and player comparisons for journalists working on a story ([Opta Analyst](https://theanalyst.com/press)) | Underused route to official Opta numbers you can cite. Pitch them a specific question |
| [Twelve](https://twelve.football) + Earpiece | Paid, individual-friendly | Player comparison and possession-value metrics; Earpiece is a football-trained AI assistant usable via WhatsApp ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)) | The closest thing to a football-specific Claude |
| [ScoutingStats.AI](https://scoutingstats.ai) | Paid, individual-friendly | Event data across 150+ leagues with advanced search and scatter plots ([Henshaw](https://www.liamhenshaw.com/writing/where-to-find-football-data)) | Good for lower-league or overseas niches |
| Hudl Wyscout | Individual tiers from about €299/yr (early-2026 pricing, check) ([360 Scouting](https://360scouting.com/wyscout-alternatives/)) | Largest match video library; individual tiers exclude full matches ([360 Scouting](https://360scouting.com/wyscout-alternatives/)) | Only once you need video clips for scouting-style pieces |
| Opta Vision / OptaAI Studio, StatsBomb IQ | Enterprise, no public pricing ([GameCode](https://gamecode.ai/insights/articles/opta-vs-statsbomb-vs-wyscout/)) | AI-enriched tracking metrics such as pressure intensity and off-ball runs, live in the Premier League for 2026-27 ([Stats Perform](https://www.statsperform.com/insights/the-premier-league-is-back-the-opta-insights-powering-the-new-season/)) | You'll meet these through an outlet, not buy them |

**For your angle:** the free stack covers the Premier League well (Understat, FotMob, Transfermarkt), and the FPL API adds player-level ownership and points data for FPL pieces. A-League coverage can follow in phase 2 once the process runs.

## Publishing and audience platforms

Own one home (newsletter) and use two social channels to feed it; every other platform is a repurposing target, not a place you write for.

| Platform | AI features as of Oct 2026 | Role in your stack |
| --- | --- | --- |
| **Substack** | Pangram "Scan for AI text" on posts and notes from 21 Jul 2026; optional reader badges on 100%-AI content; Block AI training toggle ([Substack Help](https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack)). Recording Studio for pre-recorded shows (Mar 2026) ([AlternativeTo](https://alternativeto.net/software/substack/news)). Takes 10% of paid revenue ([Sportuccino](https://sportscreator.substack.com/p/7-reasons-athletes-must-be-on-substack)) | **Recommended home.** Built-in discovery (Notes, Recommendations) matters more than tooling when you start at zero. Write the prose yourself; fill in the AI author's note honestly |
| **beehiiv** | Summer Release (16 Jul): Copilot, an AI operator that knows your subscribers and metrics and can act; AI website builder; native podcasts; Community ([CreateWith](https://www.createwith.com/tool/beehiv/updates/beehiv-launches-community-podcasts-and-ai-tools-in-major-platform-expansion)). MCP with write access, so Claude can draft posts and build automations directly ([CreateWith](https://www.createwith.com/tool/beehiv/updates/beehiiv-adds-write-access-to-mcp-lets-ai-create-posts-and-build-automations)). Metered paywalls and paid trials (Apr) ([TechCrunch](https://techcrunch.com/2026/04/23/beehiiv-rolls-out-new-creator-tools-including-webinars-and-customizable-paywalls/)) | Better choice if you want automation and sponsorship tooling over discovery. The MCP link fits your agent-building skills |
| **X** | Grok built in for writing and research; Premium gets boosted reach and up to 25,000-character posts; ad-revenue sharing ([TweetHunter](https://tweethunter.io/blog/twitter-vs-bluesky)) | Still where transfer news and club fanbases move fastest. Use for breaking reaction and stat cards |
| **Bluesky** | No native AI tooling, no ads, no creator fund; 47M+ registered users (Oct 2026) ([Wikipedia](https://en.wikipedia.org/wiki/Bluesky)). Doesn't demote outbound links ([Hootsuite](https://blog.hootsuite.com/what-is-bluesky/)) | Where many UK football writers now post (e.g. Ed Aarons, James Horncastle, Jacob Steinberg) ([starter pack](https://blueskystarterpack.com/football-commentary)). Best channel for editor relationships and link clicks |
| **YouTube** | Made on YouTube (23 Sep): Ask Studio gives AI feedback on draft videos, suggests titles and thumbnails, and can autonomously A/B test old thumbnails; research feed of what's working ([TechCrunch](https://techcrunch.com/2026/09/23/youtube-releases-new-ai-features-for-creators-within-its-studio-app/)). Live auto-dubbing pilot early 2027 ([TechCrunch](https://techcrunch.com/2026/09/23/youtube-adds-new-creator-tools-like-video-a-b-testing-dynamic-thumbnails-and-live-dubbing/)) | Phase 2. Talking-head tactical breakdowns; publishers (Reach included) are hiring for long-form video |
| **Instagram / Threads** | Edits app AI assistant built on your own Instagram data (US first, Sep 30) ([EmbedSocial](https://embedsocial.com/blog/new-instagram-features-2026/)). Threads Insights AI summaries and "Ask Meta AI" on posts ([EmbedSocial](https://embedsocial.com/blog/new-threads-features-2026/)) | Carousels of stat graphics. Low priority until the newsletter has a rhythm |
| **TikTok** | AI creation tools (Image/Text to Video, AI Outline, Smart Split) ([SocialBee](https://socialbee.com/blog/tiktok-updates/)); 3B+ AI videos labelled via Content Credentials ([Gain](https://blog.gainapp.com/social-media-updates/)) | Optional; only if you enjoy short video |
| **LinkedIn** | Feed rebuilt on LLMs, and reach limited for low-effort "AI slop"; newsletters open to all members ([SocialPilot](https://socialpilot.co/blog/new-linkedin-features-and-updates)) | Underrated for football business/finance angles and for reaching sports-industry editors |

**Recommended combo:** Substack as home, Bluesky plus X for distribution, YouTube added in month 3+. Every platform above now detects, labels or down-ranks obvious AI output, which is the strongest argument for using AI around your writing rather than for it.

## Audio, video and transcription

You need one transcription tool from day one; video tools only matter once you start a podcast or YouTube channel.

| Tool | Latest AI features | When you need it |
| --- | --- | --- |
| **Otter** | Rated the best daily transcription pick for most journalists, with filler-word removal and AI summaries linked back to the transcript ([Media Copilot](https://mediacopilot.ai/otter-ai-review-the-all-around-transcription-tool-that-still-hits-the-sweet-spot/)). Pro from $8.33/user/month billed annually; free tier 300 min/month ([Sonix](https://sonix.ai/resources/fr/avis-sur-otter-ai-tarifs/)) | Day one: interviews, press conferences watched online, podcast quotes |
| **Descript** | Underlord AI co-editor now runs Claude Opus 5 ([CreateWith](https://www.createwith.com/tool/descript/updates/descript-integrates-anthropics-claude-opus-5-into-underlord-ai-co-editor)), keeps persistent editing instructions ([CreateWith](https://www.createwith.com/tool/descript/updates/descripts-underlord-ai-now-learns-your-editing-style-with-custom-instructions)), and can be called from Claude or ChatGPT or via an editing API ([CreateWith](https://www.createwith.com/tool/descript/updates/descript-underlord-brings-natural-language-video-editing-to-automated-workflows)) | When you start a podcast or talking-head videos; edit by editing the transcript |
| **Riverside** | Remote studio-quality recording with AI transcription and Magic Clips that picks short clips and scores them ([Feisworld](https://www.feisworld.com/blog/riverside-magic-clips-youtube-shorts)) | Recording interviews with guests in the UK from Sydney |
| **Opus Clip** | Contextual prompting to steer which moments get clipped, auto B-roll, and Zapier/Make integrations ([AI Tools DevPro](https://aitoolsdevpro.com/ai-tools/opus-clip-guide/)) | Turning a long podcast or YouTube breakdown into Shorts, Reels and TikToks |
| **Substack Recording Studio** | Pre-recorded shows with overlays, inside Substack (Mar 2026) ([AlternativeTo](https://alternativeto.net/software/substack/news)) | If you want video without adding another tool |

**Lean setup:** Otter now; add Riverside + Descript together if you launch a podcast. Opus Clip only once you have long-form video worth cutting.

## Pitching and business admin

Pitch specific stories, short, to outlets whose rates you know; AI's role is finding the angle and keeping the pipeline moving, not writing the pitch email for you.

**Markets currently asking for pitches (verify before sending):**

| Outlet | What they want | Rate | Source |
| --- | --- | --- | --- |
| Front Office Sports | Sports business and media | $0.50–1.00/word | [Litworth, Jun 2026](https://markets.litworth.com/posts/12075) |
| Off-Field | Ground-reported longreads on niche sport subcultures, 2,500+ words; Volume #2 closes 23 Oct 2026 | £500 print longread | [Freedom With Writing](https://www.freedomwithwriting.com/freedom/uncategorized/15-calls-for-pitches-freelance-jobs-for-writers/) |
| Football League World | EFL opinion and analysis, SEO-led, weekend shifts | Not stated | [Qwoted, Aug 2026](https://app.qwoted.com/job_postings/football-league-world-efl-football-journalist-remote-b6df2265-4f63-49cd-8469-9faa4a9807a7) |
| Analytics FC | Football analytics, talent ID, club workings | £100/article (older listing) | [Freedom With Writing](https://www.freedomwithwriting.com/freedom/uncategorized/30-calls-for-pitches-directly-from-editors-up-to-1-per-word/) |

For UK rate benchmarks, the NUJ London Freelance Branch publishes rates freelancers actually report, updated June 2026; recent entries include a Big Issue 1,500-word feature at £200 ([NUJ Rate for the Job](https://www.londonfreelance.org/rates/index.html), [news rates](https://www.londonfreelance.org/rates/w1000new.html)).

**Pitch format editors respond to:** subject line starting "PITCH:" plus your proposed headline, a few short paragraphs, portfolio link at the bottom, and one follow-up after a week ([WorkInSports](https://www.workinsports.com/resourcecenter/jobseeker/pages/freelance-sports-writing-101)). Start with smaller, team-specific and regional outlets, which are more open to new writers ([WorkInSports](https://www.workinsports.com/resourcecenter/jobseeker/pages/freelance-sports-writing-101)).

**AI-assisted pipeline:**

- **Outlet profiles:** a Claude project file per target outlet (recent headlines, word counts, editor names, rates). Ask Claude to critique a pitch *as that editor*.
- **Angle-finding:** feed Claude the week's data (Understat, Transfermarkt) and ask for five angles nobody has written; you choose and verify.
- **Pitch drafting:** you write the pitch; Claude cuts it to 150 words and stress-tests the headline. Remember editors are now screening for AI-written pitches (see Ethics).
- **Tracker:** a sheet with outlet, editor, pitch, date sent, follow-up date, status, fee, invoice paid. Claude's Gmail connector can find replies and draft follow-ups for you to send.
- **Admin:** register as a sole trader (ABN in Australia), keep commissions and invoices in one folder, and ask every outlet about rights and payment terms when commissioned.

## Ethics, disclosure and red lines

One fabricated quote ends a freelance career, and 2026 has a long list of journalists who learned that the hard way.

**What has gone wrong this year.** Press Gazette's live tracker logs AI incidents including Ars Technica firing a reporter over fabricated AI quotes (Mar 2026), the Sydney Morning Herald removing an AI-written opinion piece (Jun 2026), and Marie Claire Australia publishing an article with the AI prompt left in (Jul 2026). Its editor was also alerted to a suspicious freelance pitch that turned out to be AI-generated ([Press Gazette](https://pressgazette.co.uk/publishers/digital-journalism/ai-journalism-mistakes/)). Editors are now actively screening freelance pitches for AI.

**The rules you work under.**

- **UK (IPSO):** editors are accountable for Editors' Code compliance whatever tools are used ([IPSO](https://www.ipso.co.uk/resources-guidance/resources-and-guidance-for-journalists-and-editors/artificial-intelligence/)). As a freelancer, that means the commissioning editor will hold you to it.
- **NUJ:** calls for disclosure whenever AI plays a significant role in creating or selecting content ([UK Journo Hub](https://www.ukjournohub.com/ethics/ai-disclosure-detailed-uk)).
- **SPJ:** its draft code revision (the first since 2014) puts responsibility on the journalist regardless of tools, and now addresses independent creator journalists ([AP via ABC News](https://abcnews.com/Business/wireStory/century-journalists-voluntary-ethics-code-editors-giving-ai-136115151)).
- **Australia (MEAA/Press Council):** I didn't find a 2026 AI-specific update in this search. Open question to check before pitching Australian outlets.
- **Platforms:** Substack readers can scan your posts for AI percentage ([Substack Help](https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack)); LinkedIn limits reach on low-effort AI content ([SocialPilot](https://socialpilot.co/blog/new-linkedin-features-and-updates)).

**Your red lines (write these into your Claude project instructions):**

- [ ] Never publish a quote you didn't hear, read in a primary source, or have on tape. AI never supplies quotes.
- [ ] Every stat is traced to a named source you opened yourself; no stat comes from a chatbot's memory.
- [ ] Final prose is yours. AI edits, challenges and restructures; it doesn't ghost-write your byline.
- [ ] Ask each outlet about its AI policy when commissioned, and disclose significant use.
- [ ] Don't upload embargoed material or off-the-record notes to tools that train on your data; check each tool's training toggle.

## 90-day plan and your Claude setup

By day 90 you should have a niche, 12 published pieces, a small list, and your first paid commission, with the AI stack running in the background.

### Claude setup (do this in week 1)

- **Project: "Football Desk"** with four files: niche brief (who you write for, what you cover, what you don't), style guide (built from 3–5 writers you admire, described not copied), red lines (from the Ethics section), outlet profiles.
- **Scheduled task:** a weekday morning brief at 7:00 Sydney time covering overnight news, injuries and press-conference lines for your niche, so UK evening football lands with you at breakfast.
- **Skills:** one for "data piece" (pull Understat/StatsBomb data, chart it, list claims to verify) and one for "repurpose" (piece to X thread, Bluesky post, LinkedIn post).
- **Connectors:** Gmail and Google Drive (already linked) for the pitch tracker and follow-ups; beehiiv MCP only if you choose beehiiv.
- **Agent to build later:** a "story radar" that watches transfer news, Understat updates and press-conference transcripts and flags anomalies in your niche. You already have football-data plumbing from your FPL agent to reuse.

### Days 1–30: foundations

- [x] Pick a niche two levels deeper than "football": done, English football seen from Australia, plus FPL
- [ ] Launch the newsletter; publish one data-led piece a week
- [ ] Set up Otter, Gemini Notebook and the Claude project
- [ ] Join Bluesky and X; follow and engage with 50 journalists and editors in your niche
- [ ] Join the NUJ or MEAA freelance network

### Days 31–60: first bylines

- [ ] Pitch 3 outlets a week from the tracker
- [ ] Apply to one volume outlet (e.g. Football League World) for paid practice
- [ ] Send Opta Analyst's press office one specific data request for a story
- [ ] Repurpose every piece to two social channels

### Days 61–90: compound

- [ ] First paid commission landed and invoiced
- [ ] Turn on paid subscriptions only once free subscribers are growing week on week
- [ ] Trial one video format (Riverside + Descript) and judge it on Ask Studio feedback
- [ ] Review: which pieces drove subscribers and commissions? Double down on that

## Sources

- [Sports Reference: FBref & Stathead data update](https://www.sports-reference.com/blog/2026/01/fbref-stathead-data-update/)
- [Liam Henshaw: Where to find football data in 2026](https://www.liamhenshaw.com/writing/where-to-find-football-data)
- [HoldTheFrontPage: Reach job cuts](https://www.holdthefrontpage.co.uk/2026/news/more-than-150-jobs-set-to-go-at-reach-in-new-cost-cutting-drive/)
- [Media Copilot: Reach engaged-time shift](https://mediacopilot.ai/reach-editorial-job-cuts/)
- [TechCrunch: Substack AI detection](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/)
- [Substack Help: Scan for AI text](https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack)
- [Write Sports: Top 100 sports Substacks](https://theianpowers.substack.com/p/from-5-to-250-what-the-top-100-sports)
- [Unite.AI: Claude Dashboards, Motion, Docs GA](https://www.unite.ai/anthropic-launches-claude-dashboards-and-motion-takes-docs-out-of-beta/)
- [Anthropic product announcements](https://claude.com/resources/product-announcements)
- [MacRumors: GPT-6 Intelligent UI](https://www.macrumors.com/2026/10/07/chatgpt-intelligent-ui/)
- [9to5Google: Gemini model limits](https://9to5google.com/2026/10/03/gemini-model-limits-oct-26/)
- [Glasp: Gemini Notebook 2026 guide](https://glasp.co/articles/notebooklm-2026)
- [GeoToolbox: Perplexity Comet](https://geotoolbox.ai/blog/perplexity-comet)
- [CreateWith: beehiiv Summer Release](https://www.createwith.com/tool/beehiv/updates/beehiv-launches-community-podcasts-and-ai-tools-in-major-platform-expansion)
- [TechCrunch: YouTube Studio AI tools](https://techcrunch.com/2026/09/23/youtube-releases-new-ai-features-for-creators-within-its-studio-app/)
- [Stats Perform: Opta insights for 2026-27](https://www.statsperform.com/insights/the-premier-league-is-back-the-opta-insights-powering-the-new-season/)
- [Opta Analyst press office](https://theanalyst.com/press)
- [Press Gazette: AI journalism mistakes tracker](https://pressgazette.co.uk/publishers/digital-journalism/ai-journalism-mistakes/)
- [IPSO: Artificial intelligence](https://www.ipso.co.uk/resources-guidance/resources-and-guidance-for-journalists-and-editors/artificial-intelligence/)
- [NUJ London Freelance Branch: Rate for the Job](https://www.londonfreelance.org/rates/index.html)
- [Media Copilot: Otter review](https://mediacopilot.ai/otter-ai-review-the-all-around-transcription-tool-that-still-hits-the-sweet-spot/)

Other sources are linked inline in each table.
