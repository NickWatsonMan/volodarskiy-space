import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts");

  return await rss({
    title: "Volodarskiy Space",
    description: "Random thoughts, projects, and experiments by Nikita Volodarskiy.",
    site: context.site,
    trailingSlash: false,
    stylesheet: `${import.meta.env.BASE_URL}/rss/pretty-feed-v3.xsl`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          "img",
          "figure",
          "figcaption",
        ]),
      }),
    })),
  });
}
