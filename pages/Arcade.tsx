import React from 'react';
import HorizontalShelf from '../components/HorizontalShelf';
import HeroCarousel from '../components/HeroCarousel';
import SmallLockupCard from '../components/SmallLockupCard';
import { arcadePageData } from '../constants';
import type { CategoryShelf, CategoryShelfItem, SpotlightCardData } from '../types';

const renderCard = (item: CategoryShelfItem, shelfType: CategoryShelf['type']) => {
    switch (shelfType) {
        case 'ordinal-lockup-row':
        case 'small-lockup-grid':
            return <SmallLockupCard key={item.id} data={item as any} />;
        default:
            return null;
    }
}

const Arcade: React.FC = () => {
    const { title, shelves } = arcadePageData;

    const shelfGridClasses: { [key: string]: string } = {
        'small-lockup-grid': 'grid grid-flow-col grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6',
        'ordinal-lockup-row': 'grid grid-flow-col auto-cols-[90%] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] xl:auto-cols-[calc(16.66%-17px)] gap-x-5',
    };

    return (
        <main className="flex-1 bg-white md:bg-[#f5f5f7]">
            <div className="py-8 space-y-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-4xl font-bold text-black mb-2">{title}</h1>
                </div>

                {shelves.map((shelf) => {
                    if (shelf.type === 'hero-carousel') {
                        return <HeroCarousel key={shelf.id} items={shelf.items as SpotlightCardData[]} />;
                    }
                    
                    return (
                        <div key={shelf.id} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <HorizontalShelf
                                title={shelf.title}
                                subtitle={shelf.subtitle}
                                seeAllLink={shelf.seeAllLink}
                                contentClassName={shelfGridClasses[shelf.type]}
                            >
                                {shelf.items.map(item => renderCard(item, shelf.type))}
                            </HorizontalShelf>
                        </div>
                    )
                })}
            </div>
        </main>
    );
};

export default Arcade;
