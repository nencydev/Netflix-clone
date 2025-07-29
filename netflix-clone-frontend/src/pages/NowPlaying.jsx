import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies('now_playing').then(setMovies);
  }, []);

  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Now Playing</h1>
      <MovieRow title="Now Playing" movies={movies} />
    </div>
  );
};

export default NowPlaying;
