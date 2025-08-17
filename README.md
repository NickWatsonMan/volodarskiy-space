# Nikita Volodarskiy

This repository hosts the code for [volodarskiy.space]([https://volodarskiy.space](https://nickwatsonman.github.io/volodarskiy-space), my personal corner of the internet. Here I publish life updates, long-form posts, and experiments with new technologies.


## Blog

Articles live under [`src/content/blog`](src/content/blog) and are written in Markdown/MDX. Each post contains a `datePublished` field and an optional `dateModified` to track updates.

You can subscribe to new posts via the site's [RSS feed](https://nickwatsonman.github.io/volodarskiy-space/rss.xml).

## Getting Started

To run the site locally:

```bash
pnpm install
pnpm dev
```

Run linting and type checks:

```bash
pnpm check
```

Run tests:

```bash
pnpm test
```

## Tech Stack

- [Astro](https://astro.build) for the static site
- [TypeScript](https://www.typescriptlang.org/) and MDX for content
- [Biome](https://biomejs.dev/) for formatting and linting
- [Playwright](https://playwright.dev/) for end-to-end tests

## Contributing

Issues and pull requests are welcome. This project is primarily personal, but suggestions, bug reports, and ideas for posts are appreciated.

## License

Licensed under the [MIT License](LICENSE).

## Acknowledgments

This project traces its roots back to the [Eva.town](https://eva.town) initiative, and I'm grateful for the inspiration it provided.

