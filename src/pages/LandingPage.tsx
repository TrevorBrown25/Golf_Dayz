import React from 'react';
import '../App.css';

interface LandingPageProps {
  onNavigateToRules: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToRules }) => (
  <div className="App App--landing">
    <header className="App-header">
      <div className="hero">
        <h1>Golf Dayz Fantasy League</h1>
        <p>
          Welcome to the clubhouse! Explore the format, draft cadence, playoff picture, and prize
          structure that power the Golf Dayz fantasy season.
        </p>
        <div className="landing-actions">
          <button type="button" className="cta-button" onClick={onNavigateToRules}>
            View League Rules
          </button>
        </div>
      </div>
    </header>
    <main className="landing-main">
      <section className="section landing-section">
        <h2>What you&apos;ll find inside</h2>
        <ul className="landing-highlights">
          <li>Weekly draft cadence and roster guidelines</li>
          <li>Divisional matchups and regular-season scoring breakdown</li>
          <li>Playoff bracket format with championship weekend details</li>
          <li>Comprehensive payout structure plus helpful resources</li>
        </ul>
      </section>
    </main>
  </div>
);

export default LandingPage;
