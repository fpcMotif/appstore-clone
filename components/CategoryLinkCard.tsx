import React from 'react';
import type { CategoryLinkData } from '../types';

interface CategoryLinkCardProps {
    data: CategoryLinkData;
}

const CategoryLinkCard: React.FC<CategoryLinkCardProps> = ({ data }) => {
    return (
        <li className="snap-start">
            <a href={data.link} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative aspect-video">
                <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{data.name}</h3>
            </a>
        </li>
    );
}

export default CategoryLinkCard;
