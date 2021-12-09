import { FilmRes } from '../types';

export const adaptFilmsList = (data: FilmRes[]) => {
  return (data || []).map((film: FilmRes) => ({
    key: film.episode_id,
    id: film.episode_id,
    title: film.title,
    producer: film.producer,
    description: film.opening_crawl,
  }));
};
