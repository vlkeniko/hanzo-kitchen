import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import Construction from './pages/Construction';
import ListMakerIngredients from './pages/ListMakerIngredients';
import Overview from './pages/Overview';
import ListMakerDishesM from './pages/ListMakerDishesM';
import PreplistsOrderlists from './pages/PreplistsOrderlists';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  return (
    <main>
    <Routes>
      <Route path="/dishes" element={<ListMakerDishesM/>} />
      <Route path="/ingredients" element={<ListMakerIngredients/>} />
      <Route path="/construction" element={<Construction/>} />
      <Route path="/lists" element={<PreplistsOrderlists/>} />
      <Route path="/overview" element={<Overview/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>


            <ToastContainer />
    </main>
   
  );
}

export default App;
