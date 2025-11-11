
import React from 'react';
import Shelf from './Shelf';
import { shelfData } from '../constants';
import type { ShelfData } from '../types';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 bg-white md:pl-8 md:pr-4 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8">
        <h1 className="text-4xl font-bold text-black mb-8">Today</h1>
        <div className="space-y-12">
          {shelfData.map((shelf: ShelfData) => (
            <Shelf key={shelf.id} title={shelf.title} subtitle={shelf.subtitle} cards={shelf.cards} cardLayout={shelf.cardLayout} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
