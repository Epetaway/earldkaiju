import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function TreehouseSkills({ initialSkills = [] }) {
  const [skills, setSkills] = useState(initialSkills);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialSkills.length) { // Only fetch if initialSkills are empty
      setLoading(true);
      async function fetchTreehouseData() {
        try {
          const username = process.env.NEXT_PUBLIC_TREEHOUSE_USERNAME;
          const response = await fetch(`https://teamtreehouse.com/${username}.json`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSkills(data.badges || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      fetchTreehouseData();
    }
  }, [initialSkills]);

  if (loading) return <div className="text-center text-sm text-zinc-500">Loading skills...</div>;
  if (error) return <div className="text-center text-sm text-red-500">Error loading skills: {error}</div>;

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Treehouse Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.length > 0 ? (
          skills.slice(0, 12).map((badge, index) => (
            <div key={index} className="relative flex items-center justify-center p-3 rounded-md shadow-sm transition-transform transform hover:scale-105 group">
              <Image src={badge.icon_url} alt={badge.name} width={80} height={80} className="rounded-md shadow-md" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 text-white text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap">
                {badge.name}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-zinc-500 dark:text-zinc-400">No skills found.</p>
        )}
      </div>
    </div>
  );
}
