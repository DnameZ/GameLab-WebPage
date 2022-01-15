import './App.css';
import React from 'react';

import HomePage from './Pages/HomePage/HomePage';
import NašTim from './Pages/NašTim/NašTim';
import RTS from './Pages/Galerija/RTS/RTS';
import Braille from './Pages/Galerija/Braille/Braille';
import Gallery from './Pages/Galerija/GalerijaPage/GalerijaPage';

function App() {
  return (
    <div className="App">
      <Gallery/>
    </div>
  );
}

export default App;
