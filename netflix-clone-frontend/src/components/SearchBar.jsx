// Netflix clone/netflix-clone-frontend/src/components/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center my-6 px-4 ">
      <input
        type="text"
        placeholder="Search for movies or shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-[400px] px-4 py-2 rounded border border-gray-600 text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0"
      />

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700 transition px-4 py-2 rounded text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
