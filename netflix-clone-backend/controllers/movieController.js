// Netflix clone/netflix-clone-backend/controllers/movieController.js
import Movie from '../models/Movie.js';

// Add movie to "My List"
export const saveMovie = async (req, res) => {
  try {
    const { movieId, title, posterPath } = req.body;
    const userId = req.user.userId;

    // Check if movie already saved
    const exists = await Movie.findOne({ user: userId, movieId });
    if (exists) return res.status(400).json({ message: "Movie already saved" });

    const saved = await Movie.create({ user: userId, movieId, title, posterPath });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error saving movie", error: err.message });
  }
};

// Get saved movies
export const getSavedMovies = async (req, res) => {
  try {
    const userId = req.user.userId;
    const movies = await Movie.find({ user: userId });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching saved movies" });
  }
};

// Remove from "My List"
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    await Movie.deleteOne({ _id: id, user: userId });
    res.json({ message: "Movie removed from list" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting movie" });
  }
};
