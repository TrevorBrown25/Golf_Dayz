import React from 'react';
import { Division } from '../data/leagueData';

interface DivisionCardProps {
  division: Division;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ division }) => {
  return (
    <div className="card division-card">
      <h4>{division.name}</h4>
      <p>{division.summary}</p>
      <p className="muted">Captains: {division.captains.join(', ')}</p>
    </div>
  );
};

export default DivisionCard;
