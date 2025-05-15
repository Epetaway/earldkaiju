// src/pages/index.jsx
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioCTA } from '@/components/PortfolioCTA'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import TreehouseSkills from '@/components/TreehouseSkills'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import siteMeta, { resume } from '@/data/siteMeta'
import { NextSeo } from 'next-seo'
import image3 from '@/images/photos/me.jpeg'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default function Home({ articles, initialSkills }) {
  return (
    <>
      <NextSeo
        title="Earl H."
        description={siteMeta.description}
        canonical="https://ehicksonjr.com/"
      />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Image src={image3} alt="Earl Hickson Jr." width={300} height={300} className="rounded-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Crafting Engaging Digital Experiences
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer. Explore his work and skills.
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <PortfolioCTA />
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <TreehouseSkills initialSkills={initialSkills} />
          <div>
            <h2 className="text-2xl font-semibold">Latest Writings</h2>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  const articles = (await getAllArticles())
    .slice(0, 4)
    .map(({ component, ...meta }) => meta);

  return {
    props: {
      articles,
      initialSkills: [],
    },
  
  }
}
