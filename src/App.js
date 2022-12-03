import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import PreplistsOrderlists from "./pages/PreplistsOrderlists";

import HomePage from "./pages/HomePage";
import Construction from './pages/Construction';
import ListMakerComponents from './pages/ListMakerComponents';
import ListMakerIngredients from './pages/ListMakerIngredients';



function App() {
  return (
    <main>
    <Routes>
      <Route path="/list" element={<PreplistsOrderlists/>} />
      <Route path="/components" element={<ListMakerComponents/>} />
      <Route path="/ingredients" element={<ListMakerIngredients/>} />

      <Route path="/construction" element={<Construction/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </main>
   
  );
}

export default App;
