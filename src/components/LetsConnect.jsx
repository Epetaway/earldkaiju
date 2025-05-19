// src/components/LetsConnect.jsx
import React from 'react';
import { Button } from '@/components/Button';

export default function LetsConnect() {
  return (
    <form
      action="mailto:e@ehicksonjr.com"
      method="POST"
      encType="text/plain"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 w-full"
    >
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
        Let’s Connect
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Whether you have a project, a question, or just want to say hello, I’d love to hear from you.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="w-full rounded-md border px-3 py-2 dark:bg-zinc-800 dark:text-zinc-200"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your message"
          className="w-full rounded-md border px-3 py-2 dark:bg-zinc-800 dark:text-zinc-200 resize-none"
        ></textarea>
        <Button type="submit" className="self-start bg-teal-500 text-white hover:bg-teal-400 transition-all">
          Send Message
        </Button>
      </div>
    </form>
  );
}
