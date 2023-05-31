import './App.css';
import { moviesData } from './Movies'
import React, { useState } from 'react';
import MovieList from './Movie-list'
import SearchMovie from './SearchMovie';
import AddMovie from './Add-movie';
import Trailer from './Trailer';
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addHandler = (newMovie) => {
    setData([...data, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie setSearchName={setSearchName}  setSearchRating={setSearchRating} />
      <AddMovie addHandler={addHandler} />
      <Routes>
        <Route path="/list" element={<MovieList movies={data} searchName={searchName} searchRating={searchRating} />} />
        <Route path='/otrailer/:id' element={<Trailer />} />
      </Routes>
    </div>
  );
}

export default App;
