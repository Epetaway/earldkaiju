import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { PortfolioCTA } from '@/components/PortfolioCTA';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { InstagramIcon, GitHubIcon, LinkedInIcon, MailIcon, YouTubeIcon } from '@/components/SocialIcons';

import image3 from '@/images/photos/me.jpeg';
import TreehouseSkills from '@/components/TreehouseSkills';

export async function getStaticProps() {
  try {
    const username = process.env.NEXT_PUBLIC_TREEHOUSE_USERNAME;
    const response = await fetch(`https://teamtreehouse.com/${username}.json`);

    if (!response.ok) {
      throw new Error('Failed to fetch skills during build');
    }

    const data = await response.json();
    return {
      props: {
        initialSkills: data.badges || [],
      },
      revalidate: 3600, // Regenerate every hour (optional)
    };
  } catch (error) {
    console.error('Error fetching skills during build:', error);
    return {
      props: {
        initialSkills: [],
      },
    };
  }
}

export default function Home({ initialSkills, articles }) {
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
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image src={image3} alt="Earl Hickson Jr." sizes="(min-width: 1024px) 32rem, 20rem" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Crafting Engaging Digital Experiences
            </h1>
            <div className="prose mt-6 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400 space-y-5">
              <p>
                Welcome to the portfolio of Earl Hickson Jr., a Front-End Developer based in Parsippany, New Jersey. With a passion for creating intuitive and responsive web interfaces, Earl combines technical expertise with creative problem-solving to deliver impactful digital solutions.
              </p>
              <p>
                Explore his work to see how he brings ideas to life through clean code and user-centric design.
              </p>
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
          <TreehouseSkills initialSkills={initialSkills} />
          <LetsConnect />
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8">Latest Writings</h2>
        <div className="mx-auto flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}
