import Image from 'next/image';
import Link from 'next/link';
import { PortfolioCTA } from '@/components/PortfolioCTA';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import TreehouseSkills from '@/components/TreehouseSkills';
import Resume from '../components/Resume';
import LetsConnect from '../components/LetsConnect';

import image3 from '@/images/photos/me.jpeg';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import siteMeta from '@/data/siteMeta';
import { NextSeo } from 'next-seo';

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <NextSeo title="Earl H." description={siteMeta.description} canonical="https://ehicksonjr.com/" />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image src={image3} alt="Earl Hickson Jr." className="aspect-square rotate-3 rounded-2xl" />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold">Crafting Engaging Digital Experiences</h1>
            <p className="mt-6 text-lg">Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer based in Parsippany, New Jersey.</p>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <PortfolioCTA />
      </Container>

      <Container className="mt-24 md:mt-28 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Resume />
        <TreehouseSkills />
        <LetsConnect />
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold mb-8">Latest Writings</h2>
        <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles()).slice(0, 4).map(({ component, ...meta }) => meta),
    },
  };
}
