import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin';
import React from 'react';
import Kitchen from './pages/Kitchen';
import Layout from './components/UI/layouts/Layouts';
import Client from './pages/Client';
import { useState } from 'react';

const App = () => {

  const [cards, setCards] = useState([
    { id: 1, title: "Блюдо №1", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 2, title: "Блюдо №2", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 3, title: "Блюдо №3", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
  ])

  const [mainCards, setMainCards] = useState([
    { id: 1, title: "Горячее", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 2, title: "Закуски", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 3, title: "Десерты", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 4, title: "Супы", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 5, title: "Напитки", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    { id: 6, title: "Алкоголь", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
  ])


  const createCard = (newCard) => {
    setCards([...cards, newCard])
  }


  return (
    <Routes>
      <Route path="/" element={<Layout role="client" />}>
        <Route path="/admin" element={<Admin cards={cards} create={createCard} />} />
        <Route path="/kitchen" element={<Kitchen mainCards={mainCards} />}/>
        <Route path="/kitchen-more" element={<Client cards={cards} />}>
          <Route path="/kitchen-more/:id" element={<Client cards={cards} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
