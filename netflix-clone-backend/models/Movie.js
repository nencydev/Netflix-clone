// Netflix clone/netflix-clone-backend/models/Movie.js

import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: String, required: true },
  title: { type: String, required: true },
  posterPath: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Movie', movieSchema);
