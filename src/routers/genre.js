import express from 'express';
import genresController from '../controllers/genre.js';

const genreRouter = express.Router();

genreRouter.get('/', genresController.getAllGenres);

genreRouter.post('/', genresController.postGenre);

export default genreRouter;
