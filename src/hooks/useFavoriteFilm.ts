import { useCallback, useEffect, useState } from 'react';

const FAVORITE_FILMS = 'favorite-films';

export const useFavoriteFilm = () => {
    const [favoriteFilms, setFavoriteFilms] = useState<(number | string)[]>(
        JSON.parse(localStorage.getItem(FAVORITE_FILMS) || '[]')
    );

    const onChangeListFilms = useCallback(
        (id?: number | string, selected?: boolean) => {
            if (id) {
                if (selected) {
                    setFavoriteFilms((prev) =>
                        !!prev?.find((i) => i === id) && prev !== undefined
                            ? prev
                            : [...prev, id]
                    );
                } else {
                    setFavoriteFilms((prev) =>
                        (prev || []).filter((film) => film !== id)
                    );
                }
            }
        },
        [setFavoriteFilms]
    );

    const isFavoriteFilm = useCallback(
        (id?: number | string) => {
            if (id) {
                return !!favoriteFilms?.find((filmId) => +filmId === +id);
            }

            return false;
        },
        [favoriteFilms]
    );

    useEffect(() => {
        localStorage.setItem(FAVORITE_FILMS, JSON.stringify(favoriteFilms));
    }, [favoriteFilms]);

    return {
        onChangeListFilms,
        isFavoriteFilm,
    };
};
