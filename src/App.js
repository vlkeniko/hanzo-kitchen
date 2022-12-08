import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import Construction from './pages/Construction';
import ListMakerIngredients from './pages/ListMakerIngredients';
import Overview from './pages/Overview';
import ListMakerDishesM from './pages/ListMakerDishesM';



function App() {
  return (
    <main>
    <Routes>
      <Route path="/dishes" element={<ListMakerDishesM/>} />
      <Route path="/ingredients" element={<ListMakerIngredients/>} />
      <Route path="/construction" element={<Construction/>} />
      <Route path="/overview" element={<Overview/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </main>
   
  );
}

export default App;
