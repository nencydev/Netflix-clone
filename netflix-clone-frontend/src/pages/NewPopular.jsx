import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const NewPopular = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getMovies('trending/all/week').then(setTrending);
  }, []);

  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">New & Trending</h1>
      <MovieRow title="Trending This Week" movies={trending} />
    </div>
  );
};

export default NewPopular;
