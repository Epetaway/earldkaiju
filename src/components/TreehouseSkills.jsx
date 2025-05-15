import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TreehouseSkills({ initialSkills = [] }) {
  const [skills, setSkills] = useState(initialSkills);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  useEffect(() => {
    if (initialSkills.length === 0) {
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

  const openModal = (badge) => {
    setSelectedBadge(badge);
  };

  const closeModal = () => {
    setSelectedBadge(null);
  };

  if (loading) return <div className="text-center text-sm text-zinc-500">Loading skills...</div>;
  if (error) return <div className="text-center text-sm text-red-500">Error loading skills: {error}</div>;

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Treehouse Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.length > 0 ? (
          skills.slice(0, 12).map((badge, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center p-3 rounded-md shadow-sm transition-transform transform hover:scale-105 group cursor-pointer"
              onClick={() => openModal(badge)}
            >
              <Image 
                src={badge.icon_url} 
                alt={badge.name} 
                width={80} 
                height={80} 
                className="rounded-md shadow-md" 
                unoptimized
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 text-white text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap">
                {badge.name}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-zinc-500 dark:text-zinc-400">No skills found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-sm w-full relative">
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-zinc-700 dark:text-zinc-300">
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Image 
                src={selectedBadge.icon_url} 
                alt={selectedBadge.name} 
                width={100} 
                height={100} 
                className="rounded-md shadow-md mb-4" 
                unoptimized
              />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{selectedBadge.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{selectedBadge.description || "No description available."}</p>
              <a 
                href={`https://teamtreehouse.com/${process.env.NEXT_PUBLIC_TREEHOUSE_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-teal-400 hover:underline"
              >
                View on Treehouse
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
