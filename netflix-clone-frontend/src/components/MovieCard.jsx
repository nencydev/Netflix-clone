import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const MovieCard = ({ movie, refreshList = null }) => {
  const [saved, setSaved] = useState(false);
  const token = localStorage.getItem('token');

  const saveToList = async () => {
    if (!token) return toast.info('Please log in to save movies.');
    try {
      await axios.post('http://localhost:5000/api/movies/save', {
        movieId: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSaved(true);
      toast.success('Movie saved to My List');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not save');
    }
  };

  const removeFromList = async () => {
    if (!token || !movie._id) return;

    try {
      await axios.delete(`http://localhost:5000/api/movies/${movie._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success('Movie removed from My List');
      if (refreshList) refreshList(); // reload MyList
    } catch (err) {
  toast.error(err.response?.data?.message || 'Could not remove');
    }
  };

  return (
    <div className="relative w-[160px] flex-shrink-0">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path || movie.posterPath}`}
        alt={movie.title}
        className="rounded"
      />
      {refreshList ? (
        <button
          onClick={removeFromList}
          className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={saveToList}
          disabled={saved}
          className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded hover:bg-green-700"
        >
          {saved ? "Saved" : "+ My List"}
        </button>
      )}
    </div>
  );
};

export default MovieCard;
