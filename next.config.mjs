import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkCodeTitles from './src/lib/remark-code-title.mjs';
import rehypePresetMinify from 'rehype-preset-minify';
import nextMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  // Add the images.unoptimized option
  images: {
    unoptimized: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
  },
});

export default withMDX(nextConfig);
