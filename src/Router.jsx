import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EditPage from './components/EditPage';
import AddPage from './components/AddPage';
import Mainpg from './components/mainpg';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Mainpg/> } />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
