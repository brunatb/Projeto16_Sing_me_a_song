import '../setup/dotenvSetup.js';
import express from 'express';
import cors from 'cors';

import databaseErrorMiddleware from './middlewares/databaseError.js';

import genreRouter from './routers/genre.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/genres', genreRouter);

server.use(databaseErrorMiddleware);

export default server;
