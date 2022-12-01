import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import PreplistsOrderlists from "./pages/PreplistsOrderlists";
import Allergies from "./pages/Allergies";
import ClosingList from "./pages/ClosingList";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <main>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/list" element={<PreplistsOrderlists/>} />
      <Route path="/allergies" element={<Allergies/>} />
      <Route path="/closing" element={<ClosingList/>} />
    </Routes>
    </main>
   
  );
}

export default App;
