// src/lib/getAllArticles.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the articles directory
const articlesDirectory = path.join(process.cwd(), 'src/pages/articles');

export async function getAllArticles() {
  const articleFilenames = fs.readdirSync(articlesDirectory).filter((file) =>
    file.endsWith('.mdx') || fs.existsSync(path.join(articlesDirectory, file, 'index.mdx'))
  );

  const articles = articleFilenames.map((filename) => {
    const filePath = filename.endsWith('.mdx')
      ? path.join(articlesDirectory, filename)
      : path.join(articlesDirectory, filename, 'index.mdx');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    
    return {
      ...data,
      slug: filename.replace(/(\/index)?\.mdx$/, ''),
    };
  });

  // Sort articles by date (most recent first)
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
