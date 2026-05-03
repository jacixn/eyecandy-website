# EyeCandy. Marketing site.

Static site for [appeyecandy.uk](https://appeyecandy.uk). One library for everything you watch, read, play, and listen to.

Movies. TV. Anime. Manga. Books. Comics. Games. Music. Live sports. Tracked in one iOS app, free forever.

## What's here

- `index.html`. Hero, features, Candy AI, Free Forever CTA.
- `support.html`. Help and FAQ.
- `privacy.html`. Privacy policy.
- `terms.html`. Terms of use.
- `style.css`. Single stylesheet, no build step.
- `script.js`. Tiny scroll-reveal helper.
- `assets/`. Real product screenshots and brand mark.

Pure static HTML, CSS, and JS. No framework, no build, no Jekyll (`.nojekyll` is set).

## Deploy

GitHub Pages. Settings → Pages → Source: `main` branch, `/` (root). Bound to `appeyecandy.uk` via the `CNAME` file in this repo and four A records pointing to GitHub Pages anycast IPs in Cloudflare DNS.

## Local preview

```bash
python3 -m http.server 4111
# open http://localhost:4111
```

## License

Site code: MIT. Movie posters, TV stills, anime art, manga covers, and album artwork shown on the site belong to their respective rights holders and are used for product illustration only.
