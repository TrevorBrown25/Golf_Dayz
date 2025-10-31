import React from 'react';
import { ScheduleEntry } from '../data/leagueData';

interface ScheduleTableProps {
  schedule: ScheduleEntry[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  return (
    <div className="card schedule-card">
      <h3>Season Schedule</h3>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Course</th>
            <th>Format</th>
            <th>Featured Event</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry) => (
            <tr key={entry.week}>
              <td>{entry.week}</td>
              <td>{entry.date}</td>
              <td>{entry.course}</td>
              <td>{entry.format}</td>
              <td>{entry.featuredEvent ?? 'TBA'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
