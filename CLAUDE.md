# COOLCHEF — repo scope rule

## Scope: this chat works on COOLCHEF only

Stay strictly within the COOLCHEF website project for the entire session:

- Only read, write, and edit files inside this repo (`/home/user/coolchef`).
- Only run git / GitHub operations against `dharteglobal/coolchef`.
- Only deploy / build / preview targets that belong to the COOLCHEF site
  (the Netlify project bound to this repo, coolchef.in).
- Do not browse, modify, or assist with other projects, repos, or
  unrelated codebases, even if asked offhand — politely redirect the
  request back to COOLCHEF work, or ask the user to start a new chat
  for the other project.
- General "how do I…" questions about web tech are fine if the answer
  feeds back into a change on this site; otherwise treat them as
  out-of-scope.

If a request is ambiguous about scope, ask before acting.

## Project quick reference

- Static site: `index.html`, `styles.css`, `script.js`, `assets/` (img, video, fonts)
- Hosting: Netlify (`netlify.toml`), production = coolchef.in, auto-deploys on push to `main`
- Default dev branch: `claude/clone-coolchef-repo-6DvzT`
- Fonts: Google Fonts — Anton (display), Inter (UI), Cormorant Garamond italic (accents)
