import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const posts = blog.filter((p) => !p.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: "Tejan Sree Challa — Blog",
    description: "Developer. Builder. Lifelong learner.",
    site: context.site,
    items: posts.map((post) => ({ title: post.data.title, pubDate: post.data.date, description: post.data.description, link: `/blog/${post.id}/` })),
    customData: `<language>en-us</language>`,
  });
}
