import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black text-white">
      {/* Left: Logo and Categories */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full md:w-auto mb-4 md:mb-0">
        <h1
          className="text-2xl font-bold cursor-pointer mb-2 md:mb-0"
          onClick={() => navigate('/')}
        >
          NETFLIX
        </h1>

        {isLoggedIn && (
          <div className="flex space-x-4 text-sm md:text-base">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/tv" className="hover:text-red-500">TV Shows</Link>
            <Link to="/movies" className="hover:text-red-500">Movies</Link>
            <Link to="/new" className="hover:text-red-500">New & Trending</Link>
            <Link to="/top-rated" className="hover:text-red-500">Top Rated</Link> 
            <Link to="/my-list" className="hover:text-red-500">My List</Link>     
          </div>
        )}
      </div>

      {/* Right: Auth Controls */}
      <div className="space-x-4 text-sm md:text-base">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-red-500">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-red-500">Login</Link>
            <Link to="/register" className="hover:text-red-500">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
