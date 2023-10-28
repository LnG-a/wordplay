import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './containers/notFound/NotFound'
import Main from './containers/main/Main'
import Play from './containers/play/Play'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="/play/*" element={ <Play/> } />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
