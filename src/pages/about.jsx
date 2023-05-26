import { getImageLoader } from 'next/image';
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon,
} from '@/components/SocialIcons'

const portraitImage = imageLoader('@/images/earl-head.png')
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
              Hey there! I&apos;m Earl Hickson Jr., a highly skilled Front End Web
              Engineer with a strong background in Graphic Design.
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                But there&apos;s more to me than just my technical expertise. I have
                a deep connection to the concept of kaiju that goes beyond the
                surface-level imagery.
              </p>
              <p>
                For those unfamiliar, a kaiju is a giant monster often seen in
                Japanese science fiction films. However, to me, a kaiju
                represents more than just a creature that wreaks havoc. It
                symbolizes a powerful force that has the potential for both
                destruction and great good.
              </p>
              <p>
                My personal journey to Jiu-jitsu began in 2015 when I felt lost
                and uncertain about my place in the world. As an only child
                raised by independent women, I struggled with confidence and
                self-esteem issues. While growing up, my love for martial arts
                was evident, and Karate was the only sport I was allowed to
                pursue. However, I longed for the connection and community that
                martial arts provided, but it seemed like it wasn&apos;t in the cards
                for me.
              </p>
              <p>
                That all changed when I discovered Jiu-jitsu. Through this art,
                I was able to tap into my inner kaiju and embrace my strength
                and power while also learning control and discipline. Jiu-jitsu
                has been transformative for me, giving me the tools to become
                the father and the man I never had in my life. I&apos;m forever
                grateful for this art and the incredible community that
                accompanies it.
              </p>
              <p>
                In addition to my passion for Jiu-jitsu and my technical skills,
                I bring a wealth of expertise in Front End Web Development and
                Graphic Design. My proficiency in CMS, HTML, CSS, and Adobe
                Creative Suite enables me to create user-friendly and visually
                captivating websites.
              </p>
              <p>
                I hold a Team Treehouse Tech Degree in Front End Web Development
                and a Bachelor of Arts in Graphic Design from Kean University.
                These qualifications, coupled with my dedication to continuous
                learning, allow me to deliver exceptional results.
              </p>
              <p>
                When I&apos;m not honing my craft, you can find me channeling my
                inner kaiju on the Jiu-jitsu mat or working on projects that
                excite me. I&apos;m passionate about creating visually stunning
                websites that not only captivate users but also provide an
                exceptional user experience.
              </p>
              <p>
                If you&apos;re seeking a talented web engineer with a unique
                perspective and a dedication to excellence, let&apos;s connect and
                create something extraordinary together. Reach out to me, and
                let&apos;s embark on this exciting journey!
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
