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
              <td data-label="Week">{entry.week}</td>
              <td data-label="Date">{entry.date}</td>
              <td data-label="Course">{entry.course}</td>
              <td data-label="Format">{entry.format}</td>
              <td data-label="Featured Event">{entry.featuredEvent ?? 'TBA'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
