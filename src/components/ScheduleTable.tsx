import React, { useEffect, useState } from 'react';
import { ScheduleEntry } from '../data/leagueData';

interface ScheduleTableProps {
  schedule: ScheduleEntry[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = schedule;

  useEffect(() => {
    setCurrentIndex((index) => {
      if (events.length === 0) {
        return 0;
      }

      return Math.min(index, events.length - 1);
    });
  }, [events.length]);

  if (!events.length) {
    return null;
  }

  const currentEvent = events[currentIndex];

  const goPrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const goNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, events.length - 1));
  };

  return (
    <div className="card schedule-card">
      <div className="schedule-card__header">
        <h3>Season Schedule</h3>
        <div className="schedule-card__controls" aria-label="Schedule navigation">
          <button
            type="button"
            className="schedule-card__nav-button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            aria-label="Previous tournament"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <span className="schedule-card__position">
            {currentIndex + 1} / {events.length}
          </span>
          <button
            type="button"
            className="schedule-card__nav-button"
            onClick={goNext}
            disabled={currentIndex === events.length - 1}
            aria-label="Next tournament"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>

      <article className="tournament-card" aria-live="polite">
        <header className="tournament-card__meta">
          <span className="tournament-card__week">Week {currentEvent.week}</span>
          <span className="tournament-card__date">{currentEvent.date}</span>
        </header>

        <div className="tournament-card__details">
          <div className="tournament-card__detail">
            <span className="tournament-card__label">Course</span>
            <span className="tournament-card__value">{currentEvent.course}</span>
          </div>
          <div className="tournament-card__detail">
            <span className="tournament-card__label">Format</span>
            <span className="tournament-card__value">{currentEvent.format}</span>
          </div>
          <div className="tournament-card__detail">
            <span className="tournament-card__label">Featured Event</span>
            <span className="tournament-card__value">{currentEvent.featuredEvent ?? 'TBA'}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ScheduleTable;
