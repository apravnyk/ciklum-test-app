import React, {useEffect} from 'react';
import './App.css';
import {useFilms} from "./hooks/useFilms";

function App() {

  const {getFilms} = useFilms();

  useEffect(() => {
    (async () => {
     await getFilms();
    })()
  }, [getFilms])

  return (
    <div className="App">

    </div>
  );
}

export default App;
