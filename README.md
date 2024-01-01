# 32Tattoo Website

The website of 32Tattoo reachable at [32tattoo.com](https://32tattoo.com)

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Adding a New Tattoo Artist

Add a photo of the artist and add their data to `src/lib/members.ts`. Then upload their pictures to the `src/lib/images/gallery` directory. The name of the image needs to contain the `id` of the respective artist.
