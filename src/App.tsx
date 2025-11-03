import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RulesPage from './pages/RulesPage';

function App() {
  const basename = React.useMemo(() => {
    if (typeof window === 'undefined') {
      return '/';
    }

    const githubPagesBase = '/Golf_Dayz';
    const { pathname } = window.location;
    const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    if (
      normalizedPath === githubPagesBase ||
      normalizedPath.startsWith(`${githubPagesBase}/`)
    ) {
      return githubPagesBase;
    }

    return '/';
  }, []);

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
