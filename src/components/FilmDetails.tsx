import React from 'react';
import { Checkbox, Descriptions } from 'antd';
import { Film } from '../types';
import { useFavoriteFilm } from '../hooks/useFavoriteFilm';

export interface FilmDetailsProps {
  film: Film | null;
}

export const FilmDetails: React.FC<FilmDetailsProps> = (
  props: FilmDetailsProps
) => {
  const { film } = props;

  const { onChangeListFilms, isFavoriteFilm } = useFavoriteFilm();

  return (
    <Descriptions
      title="Film Details"
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label="Title">{film?.title}</Descriptions.Item>
      <Descriptions.Item label="Description">
        {film?.description}
      </Descriptions.Item>
      <Descriptions.Item label="Producer">{film?.producer}</Descriptions.Item>
      <Descriptions.Item label="Add to favorite">
        <Checkbox
          onChange={(e) => onChangeListFilms(film?.id, e.target.checked)}
          checked={isFavoriteFilm(film?.id)}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};
