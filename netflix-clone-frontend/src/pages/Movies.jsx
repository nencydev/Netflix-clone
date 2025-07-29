import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies('movie/popular').then(setMovies);
  }, []);

  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <MovieRow title="Popular Movies" movies={movies} />
    </div>
  );
};

export default Movies;
