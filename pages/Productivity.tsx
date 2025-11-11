import React from 'react';
import HorizontalShelf from '../components/HorizontalShelf';
import SpotlightCard from '../components/SpotlightCard';
import SmallLockupCard from '../components/SmallLockupCard';
import VideoCard from '../components/VideoCard';
import EditorialCard from '../components/EditorialCard';
import CategoryLinkCard from '../components/CategoryLinkCard';
import { productivityPageData } from '../constants';
import type { CategoryShelf, CategoryShelfItem } from '../types';

const renderCard = (item: CategoryShelfItem, shelfType: CategoryShelf['type']) => {
    switch (shelfType) {
        case 'spotlight':
            return <SpotlightCard key={item.id} data={item as any} />;
        case 'small-lockup-grid':
        case 'ordinal-lockup-row':
            return <SmallLockupCard key={item.id} data={item as any} />;
        case 'video-row':
            return <VideoCard key={item.id} data={item as any} />;
        case 'editorial':
            return <EditorialCard key={item.id} data={item as any} />;
        case 'category-row':
             return <CategoryLinkCard key={item.id} data={item as any} />;
        default:
            return null;
    }
}

const Productivity: React.FC = () => {
    const { title, shelves } = productivityPageData;

    const shelfGridClasses = {
        'small-lockup-grid': 'grid grid-flow-col grid-rows-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6',
        'ordinal-lockup-row': 'grid grid-flow-col auto-cols-[calc(50%-10px)] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] xl:auto-cols-[calc(16.66%-17px)] gap-x-5',
        'video-row': 'grid grid-flow-col auto-cols-[calc(100%-40px)] sm:auto-cols-[calc(50%-10px)] md:auto-cols-[calc(33.33%-14px)] lg:auto-cols-[calc(25%-15px)] gap-x-5',
        'category-row': 'grid grid-flow-col auto-cols-[calc(50%-10px)] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] gap-x-5',
    }

    return (
        <main className="flex-1 bg-white md:pl-8 md:pr-4 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8">
                <h1 className="text-4xl font-bold text-black mb-8">{title}</h1>
                <div className="space-y-12">
                    {shelves.map((shelf) => {
                        if (shelf.type === 'editorial') {
                            return <EditorialCard key={shelf.id} data={shelf.items[0] as any} />;
                        }
                        
                        return (
                             <HorizontalShelf
                                key={shelf.id}
                                title={shelf.title}
                                subtitle={shelf.subtitle}
                                seeAllLink={shelf.seeAllLink}
                                contentClassName={shelfGridClasses[shelf.type as keyof typeof shelfGridClasses]}
                            >
                                {shelf.items.map(item => renderCard(item, shelf.type))}
                            </HorizontalShelf>
                        )
                    })}
                </div>
            </div>
        </main>
    );
};

export default Productivity;