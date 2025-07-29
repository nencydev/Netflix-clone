// Netflix clone/netflix-clone-frontend/src/pages/Home.jsx
import Banner from "../components/Banner";
import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import MovieRow from '../components/MovieRow';
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getMovies('movie/popular').then(setPopular);
    getMovies('movie/top_rated').then(setTopRated);
    getMovies('movie/upcoming').then(setUpcoming);
    getMovies('movie/now_playing').then(setNowPlaying);
  }, []);


  return (
    <div className=" text-white bg-black min-h-screen">
      
      <Banner />
      <SearchBar />
      <div className="p-6">

        <MovieRow title="Popular Movies" movies={popular} />
        <MovieRow title="Top Rated Movies" movies={topRated} />
        <MovieRow title="Upcoming Movies" movies={upcoming} />
        <MovieRow title="Now Playing" movies={nowPlaying} />
      </div>
    </div>
  );
};

export default Home;
