import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieRow from '../components/MovieRow';

const MyList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMyList = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/movies/my-list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMovies(res.data);
    } catch (err) {
      console.error('Failed to load My List:', err.message);
    }
  };

  useEffect(() => {
    fetchMyList();
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My List</h2>
      {movies.length > 0 ? (
        <MovieRow title="Saved Movies" movies={movies} refreshList={fetchMyList} />
      ) : (
        <p>No saved movies yet.</p>
      )}
    </div>
  );
};

export default MyList;
