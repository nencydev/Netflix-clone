import { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
          params: { api_key: API_KEY },
        });
        const randomMovie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
        setMovie(randomMovie);
      } catch (err) {
        console.error("Banner error:", err);
      }
    };

    fetchBannerMovie();
  }, []);

  if (!movie) return null;

  return (
    <header
      className="relative h-[85vh] text-white flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 p-8 md:p-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {movie.title || movie.name}
        </h1>

        <p className="text-sm md:text-lg mb-6 line-clamp-3">
          {movie.overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-opacity-80 transition">
             Play
          </button>
          <button className="bg-gray-700 bg-opacity-80 text-white px-6 py-2 rounded hover:bg-gray-600 transition">
             More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
