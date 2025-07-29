// Netflix clone/netflix-clone-frontend/src/components/MovieRow.jsx
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies, refreshList }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="flex gap-4 overflow-x-auto">
      {movies.map((movie) => (
        <MovieCard key={movie.movieId || movie.id} movie={movie} refreshList={refreshList} />
      ))}
    </div>
  </div>
);

export default MovieRow;
