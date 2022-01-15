import './App.css';
import React from 'react';

import HomePage from './Pages/HomePage/HomePage';
import NašTim from './Pages/NašTim/NašTim';
import RTS from './Pages/Galerija/RTS/RTS';
import Braille from './Pages/Galerija/Braille/Braille';
import Gallery from './Pages/Galerija/GalerijaPage/GalerijaPage';
import MV from './Pages/O nama/MisijaVizija/MV';
import Klijneti from './Pages/O nama/Klijenti/Klijenti';
import Igre from './Pages/Igre/Igrice/igre';
import NašeIgre from './Pages/Igre/NašeIgre/NašeIgre';
import Projekti from './Pages/Igre/Projekti/Projekti';
import Kontakt from './Pages/Kontakt/Kontakt';

function App() {
  return (
    <div className="App">
      <Kontakt/>
    </div>
  );
}

export default App;
