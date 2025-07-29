// Netflix clone/netflix-clone-backend/routes/movieRoutes.js
import express from 'express';
import { saveMovie, getSavedMovies, deleteMovie } from '../controllers/movieController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // Protect all movie routes

router.post('/save', saveMovie);
router.get('/my-list', getSavedMovies);
router.delete('/:id', deleteMovie);

export default router;
