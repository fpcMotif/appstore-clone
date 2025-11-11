import React from 'react';
import HorizontalShelf from '../components/HorizontalShelf';
import SpotlightCard from '../components/SpotlightCard';
import SmallLockupCard from '../components/SmallLockupCard';
import { healthFitnessPageData } from '../constants';
import type { CategoryShelf, CategoryShelfItem } from '../types';

const renderCard = (item: CategoryShelfItem, shelfType: CategoryShelf['type']) => {
    switch (shelfType) {
        case 'spotlight':
            return <SpotlightCard key={item.id} data={item as any} />;
        case 'small-lockup-grid':
        case 'ordinal-lockup-row':
            return <SmallLockupCard key={item.id} data={item as any} />;
        default:
            return null;
    }
}

const HealthFitness: React.FC = () => {
    const { title, shelves } = healthFitnessPageData;

    const shelfGridClasses: { [key: string]: string } = {
        'spotlight': 'grid grid-flow-col auto-cols-[calc(100%-40px)] sm:auto-cols-[calc(100%-40px)] md:auto-cols-[100%] gap-x-5',
        'small-lockup-grid': 'grid grid-flow-col grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6',
        'ordinal-lockup-row': 'grid grid-flow-col auto-cols-[90%] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] xl:auto-cols-[calc(16.66%-17px)] gap-x-5',
    };
    
    return (
        <main className="flex-1 bg-white md:pl-8 md:pr-4 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8">
                <h1 className="text-4xl font-bold text-black mb-8">{title}</h1>
                <div className="space-y-12">
                    {shelves.map((shelf) => (
                        <HorizontalShelf
                            key={shelf.id}
                            title={shelf.title}
                            subtitle={shelf.subtitle}
                            seeAllLink={shelf.seeAllLink}
                            contentClassName={shelfGridClasses[shelf.type]}
                        >
                            {shelf.items.map(item => renderCard(item, shelf.type))}
                        </HorizontalShelf>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HealthFitness;
