import Link from 'next/link'

export function PortfolioCTA() {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 py-16 md:py-24 lg:py-32 text-zinc-800 dark:text-zinc-200 font-mono">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden">
          
          {/* Text editor header */}
          <div className="flex items-center space-x-2 bg-zinc-200 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-300 dark:border-zinc-700">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400 italic">portfolio.js</span>
          </div>

          <div className="p-6 text-sm leading-relaxed relative">
            <p className="text-zinc-500 dark:text-zinc-400">// Highlighting my work through code</p>
            <pre className="whitespace-pre-wrap text-left z-0">
{`const portfolio = {
  name: &quot;Earl Hickson Jr.&quot;,
  title: &quot;Front-End Developer&quot;,
  focus: &quot;Modern UI Development&quot;,
  stack: [&quot;Next.js&quot;, &quot;Tailwind&quot;, &quot;React&quot;],
  projects: () =&gt; {
    // explore projects I&apos;ve built
    return viewPortfolio(&quot;/projects&quot;);
  }
};`}
            </pre>

            <div className="mt-4 text-right z-10 relative">
              <Link href="/projects">
                <span className="inline-block text-blue-600 dark:text-teal-400 hover:underline cursor-pointer backdrop-blur-sm bg-white/30 dark:bg-zinc-800/30 px-3 py-1 rounded">
                  Click here to viewPortfolio(&quot;/projects&quot;)
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
