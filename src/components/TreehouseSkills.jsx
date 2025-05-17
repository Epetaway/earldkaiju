import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export default function TreehouseSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  useEffect(() => {
    async function fetchTreehouseData() {
      try {
        const response = await fetch('https://teamtreehouse.com/profiles/ehicksonjr.json');
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.badges) {
          setSkills(data.badges);
        } else {
          throw new Error('No badges found in the response.');
        }

      } catch (err) {
        console.error("Error loading skills:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTreehouseData();
  }, []);

  if (loading) {
    return <div className="text-center text-sm text-zinc-500">Loading skills...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-sm text-red-500">
        Error loading skills: {error}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col rounded-2xl p-6">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Tech Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((badge, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedBadge(badge)}
            className="relative flex items-center justify-center p-3 rounded-md shadow-sm transition-transform transform hover:scale-105 cursor-pointer"
          >
            <Image 
              src={badge.icon_url} 
              alt={badge.name} 
              width={80}
              height={80}
              className=""
            />
          </div>
        ))}
      </div>

      {/* Modal for Badge Details */}
      {selectedBadge && (
        <Dialog 
          open={true} 
          onClose={() => setSelectedBadge(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-xs w-full shadow-lg text-zinc-900 dark:text-zinc-100">
            <div className="flex flex-col items-center">
              <Image 
                src={selectedBadge.icon_url} 
                alt={selectedBadge.name} 
                width={64}
                height={64}
                className="rounded-md shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{selectedBadge.name}</h3>
              <p className="mt-2 text-sm text-center text-zinc-600 dark:text-zinc-400">
                {selectedBadge.courses && selectedBadge.courses.length > 0
                  ? selectedBadge.courses.map(course => (
                      <span key={course.url} className="block">
                        {course.title}
                      </span>
                    ))
                  : "No description available."}
              </p>
              <a 
                href={selectedBadge.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 text-teal-500 hover:text-teal-400"
              >
                View on Treehouse
              </a>
              <button 
                onClick={() => setSelectedBadge(null)} 
                className="mt-4 text-sm text-red-500 hover:text-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
