import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Onama" element={<NašTim/>}/>
        <Route path="/Onama/MsijaVizija" element={<MV/>}/>
        <Route path="/Onama/Klijenti" element={<Klijneti/>}/>
        <Route path="/Igre" element={<Igre/>}/>
        <Route path="/Igrice" element={<NašeIgre/>}/>
        <Route path="/Igre/Projekti" element={<Projekti/>}/>
        <Route path="/Galerija" element={<Gallery/>}/>
        <Route path="/Galerija/RTS" element={<RTS/>}/>
        <Route path="/Galerija/Braille" element={<Braille/>}/>
        <Route path="/Kontakt" element={<Kontakt/>}/>
      </Routes>
    </Router>
  );
}

export default App;
