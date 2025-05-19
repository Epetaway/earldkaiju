import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { PortfolioCTA } from '@/components/PortfolioCTA';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from '@/components/SocialIcons';

import image3 from '@/images/photos/me.jpeg';

import { formatDate } from '@/lib/formatDate';
import siteMeta, { resume } from '@/data/siteMeta';
import { NextSeo } from 'next-seo';

// Dynamic Imports for Client-Side Components
const TreehouseSkills = dynamic(() => import('@/components/TreehouseSkills'), { ssr: false });
const Resume = dynamic(() => import('@/components/Resume'), { ssr: false });
const LetsConnect = dynamic(() => import('@/components/LetsConnect'), { ssr: false });

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function Home({ articles = [] }) {
  return (
    <>
      <NextSeo
        title="Earl H."
        description={siteMeta.description}
        canonical="https://ehicksonjr.com/"
        openGraph={{
          url: 'https://ehicksonjr.com',
          images: [
            {
              url: `https://og.ehicksonjr.com/api/og?title=${siteMeta.title}&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          siteName: 'ehicksonjr',
        }}
      />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <Image src={image3} alt="Earl Hickson Jr." sizes="(min-width: 1024px) 32rem, 20rem" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Crafting Engaging Digital Experiences
            </h1>
            <div className="prose mt-6 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400 space-y-5">
              <p>
                Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer based in Parsippany, New Jersey. I specialize in crafting user-friendly, responsive web experiences through clean code and innovative designs.
              </p>
              <p>
                Explore my work, learn about my journey, and discover how I bring ideas to life with a blend of creativity and technical skill.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <PortfolioCTA />
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <TreehouseSkills />
          <Resume />
          <LetsConnect />
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">Latest Writings</h2>
        <div className="flex flex-col gap-16">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))
          ) : (
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              No articles available at the moment. Please check back later.
            </p>
          )}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { getAllArticles } = await import('@/lib/getAllArticles');
    const articles = (await getAllArticles()).slice(0, 4).map(({ component, ...meta }) => meta);
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error("Error loading articles:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
}
