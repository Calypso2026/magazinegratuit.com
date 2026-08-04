// Exemple de composant React (Grit d'Affiches Épurée)
import React, { useState, useEffect } from 'react';

const BookCard = ({ article }) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-lg">
    <img 
      src={article.coverImage} 
      alt={article.title} 
      className="w-full h-auto aspect-[3/4] object-cover" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#051424] to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-4">
      <h3 className="text-[#06b6d4] font-literata font-bold text-lg">{article.title}</h3>
    </div>
  </div>
);

const HomePage = () => {
  const [magazines, setMagazines] = useState([]);
  
  useEffect(() => {
    fetch('/api/articles?category=Magazine')
      .then(res => res.json())
      .then(data => setMagazines(data));
  }, []);

  return (
    <div className="bg-[#051424] min-h-screen text-white p-8">
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#06b6d4] pl-4">Magazines</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {magazines.map(mag => <BookCard key={mag._id} article={mag} />)}
      </div>
    </div>
  );
};

export default HomePage;