# Meridian — Coworking Aggregator News (PRD)

## Original Problem Statement
> Can you build a coworking aggregator news website where we fetch news from around the world in what's going on each country and location?
> I just need the homepage for now.
> It will have news and also info for remote workers/people looking for coworking spaces.

## User Choices (verbatim)
- News source: frontend only (no backend, no live API)
- Coworking spaces data: curated static list of popular hubs by city
- Design style: Editorial magazine look (Monocle / Kinfolk lineage)
- Homepage sections: Hero + featured story, Latest news feed, Coworking spaces / cities spotlight, Remote work tips/resources

## Architecture
- **Frontend only**: React 19 + Tailwind 3, no backend calls, no Mongo usage.
- **Fonts**: Cormorant Garamond (serif) + IBM Plex Sans/Mono (loaded from Google Fonts in `index.css`).
- **Palette**: `#F4F3EF` paper / `#EAE8E1` cream / `#1C1B1A` ink / `#A64B2A` terracotta.
- **Aesthetic**: sharp corners, hairline dividers, generous spacing, grayscale-to-color image hover, paper-grain SVG overlay.

## Files
```
/app/frontend/src/
├── App.js                          # Home route + Toaster
├── App.css                         # minimal .App wrapper
├── index.css                       # fonts, tokens, animations, grain texture
├── data/mockData.js                # NEWS, CITIES, TIPS, TICKER, STATS, FEATURED
└── components/site/
    ├── Header.jsx                  # Masthead + nav + mobile toggle
    ├── Ticker.jsx                  # Marquee wire
    ├── Hero.jsx                    # Featured cover story + stats
    ├── NewsFeed.jsx                # Region-filtered dispatch list
    ├── CitySpotlight.jsx           # 6-city grid
    ├── RemoteWorkTips.jsx          # 6 field-note rules
    ├── Subscribe.jsx               # Newsletter form + sonner toasts
    └── Footer.jsx                  # Masthead + directory
```

## What's Been Implemented (Feb 12, 2026)
- Sticky editorial masthead with issue date and mobile drawer nav
- Live-wire marquee ticker (8 items, seamless loop)
- Hero split layout: 7-col headline + 5-col grayscale editorial photo, followed by 4 stats
- News feed with 6 region filters (All / Europe / Asia-Pacific / Americas / Africa / Middle East) and 8 dispatches
- 6 city files (Bali, Lisbon, Mexico City, Berlin, Chiang Mai, Medellín) with wifi/cost/temp metadata
- 6 field-note "rules" for remote workers
- Subscribe form with client-side validation + sonner toast feedback
- Full editorial footer with masthead

## Test Status
- Testing agent iteration 1: **100% frontend pass**. No bugs. All data-testids validated. All images load. Filters and form validation work.

## Deferred / P1 Backlog
- P1: Live news integration (NewsAPI or GNews) — needs API key
- P1: Individual article routes + city detail pages
- P1: Search functionality (icon in header is currently decorative)
- P1: Real subscribe backend (currently toast-only)
- P2: Dark mode / dusk edition theme
- P2: RSS export
- P2: Editor login + CMS for adding new dispatches
- P2: Multi-language editions

## Next Tasks
Await user feedback on look/feel and decide whether to (a) wire a real news API, (b) add article detail pages, or (c) add coworking space directory / city detail pages.
