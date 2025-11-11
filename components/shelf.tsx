
import React from 'react';
import TodayCard from './TodayCard';
import type { CardData } from '../types';

interface ShelfProps {
  title: string;
  subtitle: string;
  cards: CardData[];
  cardLayout: '2-card' | '4-card';
}

const Shelf: React.FC<ShelfProps> = ({ title, subtitle, cards, cardLayout }) => {
  const gridClasses = {
    '2-card': 'grid-cols-1 md:grid-cols-2 gap-6',
    '4-card': 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6',
  };

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
      <div className={`grid ${gridClasses[cardLayout]}`}>
        {cards.map(card => (
          <TodayCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default Shelf;
