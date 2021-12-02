import genresRepository from '../repositories/genre.js';
import NoContent from '../errors/NoContent.js';

async function searchAllGenres() {
	const genres = await genresRepository.searchAllGenres();

	if (genres.length === 0) {
		throw new NoContent('Não há gêneros a serem exibidos');
	}

	return genres;
}

async function insertGenre({ genreName }) {
	const genreId = await genresRepository.insertGenre({ genreName });

	return genreId;
}

export default { searchAllGenres, insertGenre };