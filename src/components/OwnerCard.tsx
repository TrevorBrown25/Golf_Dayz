import React from 'react';
import { Owner } from '../data/leagueData';

interface OwnerCardProps {
  owner: Owner;
}

const OwnerCard: React.FC<OwnerCardProps> = ({ owner }) => {
  return (
    <div className="card owner-card">
      <header>
        <h4>{owner.teamName}</h4>
        <span className="badge">{owner.division}</span>
      </header>
      <p className="owner-name">{owner.name}</p>
      <p className="muted">{owner.hometown}</p>
      <p>{owner.bio}</p>
    </div>
  );
};

export default OwnerCard;
