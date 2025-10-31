import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import RulesPage from './pages/RulesPage';

const normalizePath = (pathname: string): string => {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

function App() {
  const [path, setPath] = useState<string>(normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback(
    (nextPath: string) => {
      const normalized = normalizePath(nextPath);
      if (normalized !== path) {
        window.history.pushState({}, '', normalized);
        setPath(normalized);
      }
    },
    [path]
  );

  if (path === '/rules') {
    return <RulesPage onNavigateHome={() => navigate('/')} />;
  }

  return <LandingPage onNavigateToRules={() => navigate('/rules')} />;
}

export default App;
