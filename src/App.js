import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Nav from "./components/nav"
import PreplistsOrderlists from "./pages/PreplistsOrderlists"
import Allergies from "./pages/Allergies"
import ClosingList from "./pages/ClosingList"


function App() {
  return (
    <main>
    <Nav />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<PreplistsOrderlists />} />
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/closing" element={<ClosingList />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
</main>
  );
}

export default App;
