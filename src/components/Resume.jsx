// src/components/Resume.jsx
import React from 'react';
import Image from 'next/image';
import siteMeta, { resume } from '@/data/siteMeta';

export default function Resume() {
  return (
    <div className="rounded-2xl p-6 overflow-y-hidden w-full">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Work</h2>
      <ol className="mt-6 space-y-4 max-h-80 overflow-y-auto">
        {resume?.map((role, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full shadow-md dark:bg-zinc-800">
              <Image src={role.logo} alt={role.company} width={40} height={40} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{role.company}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
