import superagent from 'superagent';
import { adaptFilmsList } from '../adaptors/adaptFilmsList';
import { useCallback, useEffect, useState } from 'react';
import { Film } from '../types';

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFilms = useCallback(async () => {
    try {
      setLoading(true);
      const filmsRes = await superagent.get('https://swapi.dev/api/films');

      const filmsAdapted = adaptFilmsList(filmsRes?.body.results);
      setFilms(filmsAdapted);

      setLoading(false);

      return filmsRes;
    } catch (err: any) {
      setLoading(false);
      throw new Error(err);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await getFilms();
    })();
  }, [getFilms]);

  return {
    films,
    loading,
  };
};
