import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/earl-head.png'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  if (!href) return null
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Earl The Kaiju"
        description={siteMeta.description}
        canonical="https://earl.dev/about"
        openGraph={{
          url: 'https://earl.dev/about',
          images: [
            {
              url: `https://og.earl.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'earl.dev',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              More About Me
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
              I&apos;m Earl Hickson Jr., a Front-End Developer and Graphic Designer based in Parsippany, New Jersey. With a strong foundation in HTML, CSS, JavaScript, and proficiency in tools like Adobe Creative Suite, I specialize in creating user-friendly and visually captivating websites.
              </p>
              <p>
              My journey into martial arts began in 2015 when I discovered Brazilian Jiu-Jitsu. This discipline not only enhanced my physical abilities but also instilled in me a profound sense of confidence, discipline, and community. The concept of the &apos;kaiju&apos;—a powerful force capable of both destruction and great good—resonates deeply with me. It symbolizes the inner strength and potential we all possess, which I&apos;ve learned to harness through Jiu-Jitsu.
              </p>
              <p>
              I hold a Bachelor of Arts in Graphic Design from Kean University and a Tech Degree in Front-End Web Development from Team Treehouse. These qualifications, combined with my dedication to continuous learning, enable me to deliver exceptional digital solutions.
              </p>
              <p>
              When I&apos;m not coding or designing, you can find me on the Jiu-Jitsu mat, channeling my inner kaiju, or spending quality time with my family. I&apos;m passionate about creating digital experiences that not only look great but also provide meaningful user interactions.
              </p>
              <p>
              If you&apos;re seeking a web developer who combines technical proficiency with a unique perspective and a commitment to excellence, let&apos;s connect and create something extraordinary together.
              </p>
              
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">

              <SocialLink
                href={siteMeta.author.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
