import React from 'react';
import { ResourceLink } from '../data/leagueData';

interface ResourceLinksProps {
  links: ResourceLink[];
}

const ResourceLinks: React.FC<ResourceLinksProps> = ({ links }) => {
  return (
    <div className="card resource-card">
      <h3>Helpful Resources</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLinks;
