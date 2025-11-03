import React from 'react';
import { Link } from 'react-router-dom';
import {
  leagueOverview,
  schedule,
  ruleSections,
  divisions
} from '../data/leagueData';

const HomePage: React.FC = () => {
  const upcomingEvents = React.useMemo(() => schedule.slice(0, 3), []);
  const featuredRules = React.useMemo(() => ruleSections.slice(0, 3), []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <h1>{leagueOverview.title}</h1>
          <p>{leagueOverview.tagline}</p>
          <div className="hero-actions">
            <Link className="button primary-button" to="/rules">
              View League Rules
            </Link>
            <a className="button secondary-button" href="#season-preview">
              Preview the Season
            </a>
          </div>
        </div>
      </header>

      <main className="App-main home-main">
        <section id="season-preview" className="section home-section">
          <header className="section-header">
            <h2>Season Snapshot</h2>
            <p className="muted">
              Three marquee stops to kick off the Golf Dayz campaign.
            </p>
          </header>
          <div className="grid home-grid">
            {upcomingEvents.map((event) => (
              <article key={event.week} className="card highlight-card">
                <header>
                  <span className="badge">Week {event.week}</span>
                  <h3>{event.featuredEvent ?? event.course}</h3>
                </header>
                <ul className="card-list">
                  <li>
                    <strong>Dates:</strong> {event.date}
                  </li>
                  <li>
                    <strong>Course:</strong> {event.course}
                  </li>
                  <li>
                    <strong>Format:</strong> {event.format}
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section home-section">
          <header className="section-header">
            <h2>League Format at a Glance</h2>
            <p className="muted">
              A quick primer on how we draft, score, and crown a champion.
            </p>
          </header>
          <div className="grid home-grid">
            {featuredRules.map((section) => (
              <article key={section.title} className="card">
                <h3>{section.title}</h3>
                <ul className="card-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="cta-row">
            <Link className="button primary-button" to="/rules">
              Dive into the full rulebook
            </Link>
          </div>
        </section>

        <section className="section home-section">
          <header className="section-header">
            <h2>Divisions & Captains</h2>
            <p className="muted">
              Rivalries run deep between our conference captains.
            </p>
          </header>
          <div className="grid home-grid">
            {divisions.map((division) => (
              <article key={division.name} className="card">
                <h3>{division.name}</h3>
                <p className="muted">{division.summary}</p>
                <h4>Captains</h4>
                <ul className="card-list">
                  {division.captains.map((captain) => (
                    <li key={captain}>{captain}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>
          Ready to tee it up? Draft night kicks off Wednesday at 7:30pm.{' '}
          <Link to="/rules">Get your prep work done.</Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
