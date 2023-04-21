import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonDetails from './Components/PokemonDetails';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import { HashRouter, Route, Routes } from 'react-router-dom';

let router;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 router = (
  <HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/pokemon/:pokemonName" element={<PokemonDetails/>}/>
  </Routes>
</HashRouter>
  ),
);

reportWebVitals();
