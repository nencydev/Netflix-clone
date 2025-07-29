import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    getMovies('tv/popular').then(setTvShows);
  }, []);

  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Popular TV Shows</h1>
      <MovieRow title="Popular TV Shows" movies={tvShows} />
    </div>
  );
};

export default TVShows;

