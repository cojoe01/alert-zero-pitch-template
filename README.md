# alert-zero-pitch-template

An independent copy of the AlertZero presentation built with [fslides](https://github.com/fslides/fslides). Every slide is an HTML file in `slides/` — edit them like code.

This deck's Git remote and slide comments point to `cojoe01/alert-zero-pitch-template`. Changes pushed from this checkout go only to that repository.

## Run locally

```bash
npm install
npm run serve        # opens the deck locally with the full player
```

- **Edit a slide:** change the HTML in `slides/`, the browser live-reloads.
- **Add a slide:** `npx fslides add-slide my-slide`, then register it in `fslides.config.js`.
- **Comment on a slide:** press `K` in the player (or the comment button) — comments live in this repo's [issues](https://github.com/cojoe01/alert-zero-pitch-template/issues), one per slide.
- **Speaker notes:** press `N` in the player; notes save to `notes.json`.
- **Record narration:** `npm run serve`, hit the mic button — audio or camera, saved under `slides/recordings/` and playable on the published deck.

Commits and pushes from this checkout go to the repository named above.
