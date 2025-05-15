import React, { useEffect, useState } from 'react';

export default function TreehouseSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  useEffect(() => {
    async function fetchTreehouseData() {
      try {
        const username = process.env.NEXT_PUBLIC_TREEHOUSE_USERNAME;
        const response = await fetch(`https://teamtreehouse.com/${username}.json`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSkills(data.badges);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchTreehouseData();
  }, []);

  const openModal = (badge) => {
    setSelectedBadge(badge);
  };

  const closeModal = () => {
    setSelectedBadge(null);
  };

  if (loading) return <div className="text-center text-sm text-zinc-500">Loading skills...</div>;
  if (error) return <div className="text-center text-sm text-red-500">Error loading skills: {error}</div>;

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 relative">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Treehouse Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.length > 0 ? (
          skills.slice(0, 12).map((badge, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center p-3 rounded-md shadow-sm transition-transform transform hover:scale-105 group cursor-pointer"
              onClick={() => openModal(badge)}
            >
              <img 
                src={badge.icon_url} 
                alt={badge.name} 
                className="rounded-md shadow-md"
              />
              {/* Tooltip */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 text-white text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap">
                {badge.name}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-zinc-500 dark:text-zinc-400">
            No skills found.
          </p>
        )}
      </div>

      {/* Modal for Badge Details */}
      {selectedBadge && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 w-11/12 max-w-xs mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-zinc-600 dark:text-zinc-300 transition-colors hover:text-zinc-800 dark:hover:text-zinc-100" 
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img 
                src={selectedBadge.icon_url} 
                alt={selectedBadge.name} 
                className="w-20 rounded-md shadow-md mb-4"
              />
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 text-center">{selectedBadge.name}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-center">
                {selectedBadge.description ? selectedBadge.description : "No description available."}
              </p>
              <a 
                href={`https://teamtreehouse.com/${process.env.NEXT_PUBLIC_TREEHOUSE_USERNAME}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600 transition-colors duration-200"
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
