import Image from 'next/image';
import Link from 'next/link';
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
} from '@/components/SocialIcons';
import image3 from '@/images/photos/me.jpeg';
import TreehouseSkills from '@/components/TreehouseSkills';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import siteMeta, { resume } from '@/data/siteMeta';
import { NextSeo } from 'next-seo';

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
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
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
      <Button type="submit" className="mt-4">Send Message</Button>
    </form>
  );
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Work Experience
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
        {resume.map((role, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{role.company}</span>
            <span>{role.title}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.start.label} - {role.end.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home({ articles, initialSkills }) {
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
              type: 'image/jpeg',
            },
          ],
          siteName: 'ehicksonjr',
        }}
      />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <Image
              src={image3}
              alt="Earl Hickson Jr."
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Crafting Engaging Digital Experiences
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer with a passion for building intuitive web interfaces.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink href={siteMeta.author.instagram} aria-label="Instagram" icon={InstagramIcon} />
              <SocialLink href="https://github.com" aria-label="GitHub" icon={GitHubIcon} />
              <SocialLink href={siteMeta.author.linkedin} aria-label="LinkedIn" icon={LinkedInIcon} />
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3">
          <Resume />
          <TreehouseSkills initialSkills={initialSkills} />
          <LetsConnect />
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">Latest Writings</h2>
        <div className="grid gap-8">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: {
      articles: articles.slice(0, 4).map(({ component, ...meta }) => meta),
    },
  };
}
