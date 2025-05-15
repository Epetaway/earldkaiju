import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { PortfolioCTA } from '@/components/PortfolioCTA'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import TreehouseSkills from '@/components/TreehouseSkills';
import Resume from '@/components/Resume';
import LetsConnect from '@/components/LetsConnect';
import image3 from '@/images/photos/me.jpeg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import siteMeta, { resume } from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <NextSeo title="Earl H." description={siteMeta.description} canonical="https://ehicksonjr.com/" openGraph={{ url: 'https://ehicksonjr.com', images: [{ url: `https://og.ehicksonjr.com/api/og?title=${siteMeta.title}&desc=${siteMeta.description}`, width: 1200, height: 600, alt: 'Og Image Alt', type: 'image/jpeg' }], siteName: 'ehicksonjr' }} />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image src={image3} alt="Earl Hickson Jr." sizes="(min-width: 1024px) 32rem, 20rem" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Crafting Engaging Digital Experiences</h1>
            <div className="prose mt-6 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400 space-y-5">
              <p>Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer based in Parsippany, New Jersey. With a passion for creating intuitive and responsive web interfaces, Earl combines technical expertise with creative problem-solving to deliver impactful digital solutions.</p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <PortfolioCTA />
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8">
          <Resume />
          <TreehouseSkills />
          <LetsConnect />
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">Latest Writings</h2>
        <div className="mx-auto flex flex-col gap-16">
          {articles.map((article) => <Article key={article.slug} article={article} />)}
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles()).slice(0, 4).map(({ component, ...meta }) => meta),
    },
  }
}
