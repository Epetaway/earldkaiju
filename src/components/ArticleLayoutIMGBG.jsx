import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import {SocialShareButtons} from '@/components/share'
import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ArticleLayoutComponent = ({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
  bgImg,
}) => {
  const router = useRouter()

  if (isRssFeed) {
    return children
  }

  // Form the background image path from 'bgImg' and the images directory
  const bgImagePath = `https://www.dropbox.com/s/n4ma68yvy829p4p/${bgImg}?dl=0`;

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://earl.dev${router.asPath}`}
        openGraph={{
          url: `https://earl.dev${router.asPath}`,
          images: [
            {
              url: `https://og.earl.dev/api/og?title=${meta.title}&desc=${meta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'earl.dev',
        }}
      />

<div 
  className="w-full h-96 bg-cover bg-center flex flex-col justify-center px-4 sm:px-0"
  style={{
    backgroundImage: `url('${bgImagePath}')`,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }}
>
  <div className="px-4">
  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2">
    {meta.title}
  </h1>
  <time
    dateTime={meta.date}
    className="flex items-center text-base text-white"
  >
    <span className="h-4 w-0.5 rounded-full bg-white" />
    <span className="ml-3">{formatDate(meta.date)}</span>
  </time>
  </div>
</div>

      <Container className="mt-10 lg:mt-22">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
                {/* <SocialShareButtons/> */}
              <Prose className="mt-3">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

const ArticleLayout = dynamic(() => Promise.resolve(ArticleLayoutComponent), { ssr: false })

export default ArticleLayout;
