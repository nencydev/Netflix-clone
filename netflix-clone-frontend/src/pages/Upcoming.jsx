import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies('upcoming').then(setMovies);
  }, []);

  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Movies</h1>
      <MovieRow title="Upcoming" movies={movies} />
    </div>
  );
};

export default Upcoming;
