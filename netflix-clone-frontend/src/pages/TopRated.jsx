import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getMovies('movie/top_rated').then(setTopRated); 
  }, []);
  
  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Top Rated Movies</h1>
      <MovieRow title="Top Rated Movies" movies={topRated} />
    </div>
  );
};

export default TopRated;
