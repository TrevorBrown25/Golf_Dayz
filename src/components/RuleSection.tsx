import React from 'react';
import { RuleSectionData } from '../data/leagueData';

interface RuleSectionProps {
  section: RuleSectionData;
}

const RuleSection: React.FC<RuleSectionProps> = ({ section }) => {
  return (
    <section className="card rule-section">
      <h3>{section.title}</h3>
      {section.description && <p className="muted">{section.description}</p>}
      <ul>
        {section.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default RuleSection;
