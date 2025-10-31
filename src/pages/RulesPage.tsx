import React from 'react';
import { Link } from 'react-router-dom';
import {
  leagueOverview,
  ruleSections,
  owners,
  schedule,
  payouts,
  divisions,
  resources
} from '../data/leagueData';
import RuleSection from '../components/RuleSection';
import OwnerCard from '../components/OwnerCard';
import ScheduleTable from '../components/ScheduleTable';
import PayoutCard from '../components/PayoutCard';
import DivisionCard from '../components/DivisionCard';
import ResourceLinks from '../components/ResourceLinks';

const RulesPage: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <h1>{leagueOverview.title}</h1>
          <p>{leagueOverview.tagline}</p>
          <nav className="hero-nav">
            <Link to="/">Home</Link>
            <a href="#rules">Rules</a>
            <a href="#owners">Owners</a>
            <a href="#schedule">Schedule</a>
            <a href="#payouts">Payouts</a>
            <a href="#resources">Resources</a>
          </nav>
        </div>
      </header>
      <main className="App-main">
        <section id="rules" className="section">
          <h2>League Rules</h2>
          <div className="grid rules-grid">
            {ruleSections.map((section) => (
              <RuleSection key={section.title} section={section} />
            ))}
          </div>
        </section>

        <section id="owners" className="section">
          <h2>Team Owners</h2>
          <div className="division-highlight">
            {divisions.map((division) => (
              <DivisionCard key={division.name} division={division} />
            ))}
          </div>
          <div className="grid owners-grid">
            {owners.map((owner) => (
              <OwnerCard key={owner.name} owner={owner} />
            ))}
          </div>
        </section>

        <section id="schedule" className="section">
          <ScheduleTable schedule={schedule} />
        </section>

        <section id="payouts" className="section">
          <h2>Payout Structure</h2>
          <div className="grid payouts-grid">
            {payouts.map((tier) => (
              <PayoutCard key={tier.stage} payout={tier} />
            ))}
          </div>
        </section>

        <section id="resources" className="section">
          <ResourceLinks links={resources} />
        </section>
      </main>
      <footer className="App-footer">
        <p>Ready to tee it up? Draft night kicks off Wednesday at 7:30pm.</p>
      </footer>
    </div>
  );
};

export default RulesPage;
