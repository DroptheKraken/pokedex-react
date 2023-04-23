import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonDetails from './Components/PokemonDetails';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';


let router  = (
  <HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/pokemon/:pokemonName" element={<PokemonDetails/>}/>
    <Route path="/about" element={<About></About>} />
  </Routes>
</HashRouter>
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router

);

reportWebVitals();
