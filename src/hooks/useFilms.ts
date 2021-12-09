import superagent from 'superagent';

export const useFilms = () => {
    const getFilms = async () => {
        const filmsRes = await superagent.get('https://swapi.dev/api/films');
        return filmsRes?.body.results;
    }

    return {
        getFilms
    };

}