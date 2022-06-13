import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin';
import React from 'react';
import Kitchen from './pages/Kitchen';
import Layout from './components/UI/layouts/Layouts';
import Client from './pages/Client';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout role="client"/>}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/client" element={<Client />} />
      </Route>
    </Routes>
  );
}

export default App;
