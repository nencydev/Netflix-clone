import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieRow from '../components/MovieRow';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        setResults(res.data.results);
      } catch (err) {
        console.error('Search failed:', err.message);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <MovieRow title="Results" movies={results} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
