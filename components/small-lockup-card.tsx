import React from 'react';
import type { SmallLockupData } from '../types';

interface SmallLockupCardProps {
    data: SmallLockupData;
}

const SmallLockupCard: React.FC<SmallLockupCardProps> = ({ data }) => {
    return (
        <li className="snap-start">
            <a href={data.link} className="flex items-center space-x-4 group">
                {data.ordinal && <div className="text-2xl font-bold text-gray-400 w-8 text-center">{data.ordinal}</div>}
                <div className="flex-shrink-0">
                    <img src={data.iconUrl} alt={`${data.name} icon`} className="w-16 h-16 rounded-2xl" style={{ backgroundColor: data.bgColor }} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate text-black group-hover:text-blue-600">{data.name}</p>
                    <p className="text-xs text-gray-500 truncate">{data.subtitle}</p>
                </div>
                <div className="flex-shrink-0">
                    <button className="px-5 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-gray-100 group-hover:bg-gray-200 transition">
                        View
                    </button>
                </div>
            </a>
        </li>
    );
};

export default SmallLockupCard;
