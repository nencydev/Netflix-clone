import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';
import MyList from './pages/MyList';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NewPopular from './pages/NewPopular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import NowPlaying from './pages/NowPlaying';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/new" element={<NewPopular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/search" element={<SearchResults />} />

      </Routes>

    </Router>
  );
}
export default App;