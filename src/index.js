import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root  from './Routes/Root' ;
import { RouterProvider, createHashRouter } from "react-router-dom"
import { PokemonDetails } from './Components/PokemonDetails';

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/",
              element: <App />,
          },
          {
path:"pokemon/:pokemonName",
element: <PokemonDetails/>,
          },
        
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
