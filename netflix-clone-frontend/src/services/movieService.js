import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getMovies = async (category = 'popular') => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/${category}`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error.message);
    return [];
  }
};

export const getMoviesByGenre = async (genreId) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error(`Error fetching genre ${genreId}:`, error.message);
    return [];
  }
};

