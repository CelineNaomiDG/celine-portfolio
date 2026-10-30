# Playground review — 30 October 2026

Scope: current app/page.tsx playground, Dino engine/component/styles, Snake component/styles, creative sticker implementation and public asset inventory. This is a source inspection, not a legal clearance or exhaustive similarity / trademark search.

## Findings
- Dino: local engine and inline SVG, but recognisable Chrome-like dinosaur silhouette, desert obstacles and offline branding. Recommend replacement rather than relying on independent code alone. Existing live game has NOT yet been replaced.
- Snake: local grid logic and basic SVG rectangles/circle. No Google artwork, fetched game code or audio found in inspected component. Original provenance cannot be conclusively established from a source inspection.
- Hangman: local word/hint list and text drawing. No downloaded dictionary, artwork or audio found. Some hints refer descriptively to software brands; no endorsement claim observed.
- Profile blocks: locally rendered text buttons with drag interaction. No third-party game assets observed.
- Creative stickers: user uploads remain browser-local. Users can supply protected material; this feature cannot certify rights in uploads. No default licensed character pack is supplied.
- Public directory inspected: favicon and two CV PDFs, no game sprite/audio files.

## New prototype
Route /playground/rocket-preview, noindex. New inline fantasy car and barrier drawings, no Tesla / SpaceX / Google logos or copied reference screenshots, no external models or sounds. Based on existing local game infrastructure. Fictional rocket lift with fuel and recharge. No claim of Tesla affiliation. Working title is not trademark-cleared. No Higgsfield generation needed for these vector assets.

## Limits and next step
Cannot guarantee that nobody will bring a claim. No comprehensive code-provenance, dependency-license, registered-design or trademark clearance completed. Third-party library licenses still apply. Review prototype visually and on mobile before replacing Dino. Prototype now includes a flip with completion bonus, double-tap jump burst, speed indicator and browser-local highscore. Engine tests and mobile start/pause/width checks pass; broader playtesting remains.

## Sources
https://intellectual-property-helpdesk.ec.europa.eu/regional-ip-helpdesks/european-ip-helpdesk/europe-ip-specials/europe-ip-specials-ip-videogames-industry_en
https://www.tesla.com/legal/additional-resources
https://www.tesla.com/roadster
Tesla currently describes cold-gas thrusters and restricted Rocket trim; this does not license its vehicle designs or branding for a game.

## Garage and control update
Original vector coupe redesigned with selectable paint, custom colour, aero/sport wheels and contrast accent. Stored browser-locally. Flip now launches from the ground, eases through one turn and permits one stunt per flight. Focus loss releases thrust without pausing; hidden tabs still pause. Regression tests cover saved customization, flip without accidental pause, explicit pause/resume and four viewport widths.
