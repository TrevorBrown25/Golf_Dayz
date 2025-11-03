import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <h1>
            <Link to="/rules">Golf Dayz</Link>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
