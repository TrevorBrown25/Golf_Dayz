import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RulesPage from './pages/RulesPage';

function App() {
  const basename = process.env.PUBLIC_URL
    ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname
    : '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
