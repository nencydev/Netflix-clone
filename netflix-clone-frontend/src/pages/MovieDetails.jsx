import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { api_key: API_KEY },
        });
        setMovie(res.data);
      } catch (err) {
        console.error('Failed to fetch movie:', err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full rounded mb-4"
      />
      <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
      <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}/10</p>
      <p className="mb-4"><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
