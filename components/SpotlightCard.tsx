import React from 'react';
import type { SpotlightCardData } from '../types';
import AppLockup from './AppLockup';

interface SpotlightCardProps {
    data: SpotlightCardData;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ data }) => {
    const cardThemeClass = data.theme === 'light' ? 'text-black' : 'text-white';
    
    if (data.layout === 'west') {
         return (
            <li className="snap-start w-full flex-shrink-0">
                <a
                    href={data.link}
                    className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 relative aspect-[1.8] md:aspect-[2.5] lg:aspect-[2.8]"
                    style={{ backgroundColor: data.accentColor }}
                >
                    <div className={`relative ${cardThemeClass} h-full flex flex-col justify-between overflow-hidden`}>
                         {/* Image on the right */}
                        <div className="absolute right-0 top-0 bottom-0 w-3/5 h-full">
                            <img src={data.imageUrl} alt="" className="absolute right-0 bottom-0 h-full w-auto max-w-none object-contain object-right-bottom" />
                        </div>
                        
                        {/* Text content on the left */}
                        <div className="relative p-6 md:p-8 w-full md:w-3/5 lg:w-1/2 flex flex-col justify-between h-full z-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider opacity-80">{data.badge}</p>
                                <h3 className="text-3xl lg:text-4xl font-bold mt-1">{data.title}</h3>
                                <p className="text-sm opacity-80 mt-1">{data.subtitle}</p>
                            </div>

                            <div className="max-w-sm">
                                <AppLockup {...data.appInfo} theme={data.theme} />
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }

    // Default Spotlight Card (for Games page)
    return (
        <li className="snap-start w-full flex-shrink-0">
            <a
                href={data.link}
                className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 relative aspect-[1.8] md:aspect-[2.5] lg:aspect-[2.8]"
                style={{ backgroundColor: data.accentColor }}
            >
                <div className={`relative ${cardThemeClass} h-full flex flex-col`}>
                    <img src={data.imageUrl} alt={data.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div 
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(90deg, ${data.accentColor} 35%, transparent 70%)` }}
                    ></div>

                    <div className="relative p-6 md:p-8 flex flex-col justify-between h-full w-full md:w-1/2 lg:w-2/5">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider opacity-80">{data.badge}</p>
                            <h3 className="text-2xl md:text-3xl font-bold mt-1 line-clamp-2">{data.title}</h3>
                            <p className="text-sm opacity-80 mt-1 line-clamp-2">{data.subtitle}</p>
                        </div>
                        <AppLockup {...data.appInfo} theme={data.theme} />
                    </div>
                </div>
            </a>
        </li>
    );
};

export default SpotlightCard;
