// src/lib/generateRssFeed.js
import ReactDOMServer from 'react-dom/server';
import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';
import { getAllArticles } from './getAllArticles';

export async function generateRssFeed() {
  const articles = await getAllArticles();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const author = {
    name: 'Earl Hickson Jr.',
    email: 'e@ehicksonjr.com',
  };

  const feed = new Feed({
    title: `${author.name} - Blog`,
    description: 'Earl Hickson Jr. - Personal Blog',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  });

  for (const article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`;
    const html = ReactDOMServer.renderToStaticMarkup(
      <article.component isRssFeed />
    );

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    });
  }

  const rssDirectory = path.join(process.cwd(), 'public/rss');
  if (!fs.existsSync(rssDirectory)) {
    fs.mkdirSync(rssDirectory, { recursive: true });
  }

  fs.writeFileSync(path.join(rssDirectory, 'feed.xml'), feed.rss2(), 'utf8');
  fs.writeFileSync(path.join(rssDirectory, 'feed.json'), feed.json1(), 'utf8');
}
