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

import image3 from '@/images/photos/me.jpeg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import siteMeta, { resume } from '@/data/siteMeta'
import { NextSeo } from 'next-seo'
import { JiuJitsuCTA } from '@/components/JiuJitsuCTA'
import TreehouseSkills from '@/components/TreehouseSkills'

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

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function LetsConnect() {
  return (
    <form
      action="mailto:e@ehicksonjr.com"
      method="POST"
      encType="text/plain"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 w-full"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Let’s Connect</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Whether you have a project, a question, or just want to say hello, I’d love to hear from you.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          required
          className="w-full rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          className="w-full rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="self-start ">
          Send Message
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl p-6 overflow-y-hidden w-full">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Work</span>
      </h2>
      <ol className="mt-6 space-y-4  max-h-80">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div className="relative z-10 mt-6 w-full flex justify-center ">
        <div className="absolute inset-0 rounded-lg blur-md "></div>
        <Button
          href="https://www.linkedin.com/in/earl-hickson-jr/"
          variant="primary"
          className="relative z-20 group w-full "
        >
          More on LinkedIn
        </Button>
      </div>
    </div>
  )
}

export default function Home({ articles }) {
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
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Crafting Engaging Digital Experiences</h1>
          <div className="prose mt-6 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400 space-y-5">
            <p>Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer based in Parsippany, New Jersey. I specialize in crafting user-friendly, responsive web experiences through clean code and innovative designs.</p>
            <p>Explore my work, learn about my journey, and discover how I bring ideas to life with a blend of creativity and technical skill.</p>
          </div>
        </div>
      </div>

      
    </Container>
      {/* <Container className="mt-24 md:mt-28">
        <JiuJitsuCTA />
      </Container> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8">
          <Resume />
          <TreehouseSkills/>
          <LetsConnect />
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">Latest Writings</h2>
        <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
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
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
