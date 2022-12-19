import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import Construction from './pages/Construction';
import ListMakerIngredients from './pages/ListMakerIngredients';
import Overview from './pages/Overview';
import ListMakerDishesM from './pages/ListMakerDishesM';
import PreplistsOrderlists from './pages/PreplistsOrderlists';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preplist from "./pages/Preplist"


function App() {

  return (
    <main>
      <Routes>
        <Route path="/dishes" element={<ListMakerDishesM />} />
        <Route path="/ingredients" element={<ListMakerIngredients />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/lists" element={<PreplistsOrderlists />} />
        <Route path="/preplist" element={<Preplist />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<HomePage />} />

      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={300}
        limit={0}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

    </main>

  );
}

export default App;
