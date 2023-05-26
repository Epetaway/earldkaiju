import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkCodeTitles from './src/lib/remark-code-title.mjs';
import rehypePresetMinify from 'rehype-preset-minify';
import nextMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';

// Replace 'your-repo-name' with the name of your repository
const repo = 'Tailwind-Site';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  // Use the repo as the assetPrefix and basePath
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  // Comment out the images.unoptimized option, it is not supported yet
  // images: {
  //  unoptimized: true,
  //},
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
  },
});

export default withMDX(nextConfig);
