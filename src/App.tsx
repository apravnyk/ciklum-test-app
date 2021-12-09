import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { useFilms } from './hooks/useFilms';
import { FilmsTable } from './components/FilmsTable';
import { FilmDetails } from './components/FilmDetails';
import { Film } from './types';

function App() {
  const { films, loading } = useFilms();
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  useEffect(() => {
    if (films.length > 0) setSelectedFilm(films[0]);
  }, [films]);
  console.log('selectedFilm', selectedFilm);
  return (
    <div className="app">
      <header className="app-header">The Star Wars</header>
      <div className="films">
        <div className="films-list">
          <FilmsTable
            filmsData={films}
            loading={loading}
            onSelectedFilm={setSelectedFilm}
            selectedFilmId={selectedFilm?.id}
          />
        </div>
        <div className="film-description">
          <FilmDetails film={selectedFilm} />
        </div>
      </div>
    </div>
  );
}

export default App;
