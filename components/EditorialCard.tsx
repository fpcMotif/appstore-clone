import React from 'react';
import type { EditorialCardData } from '../types';

interface EditorialCardProps {
    data: EditorialCardData;
}

const EditorialCard: React.FC<EditorialCardProps> = ({ data }) => {
    return (
        <section>
            <a href={data.link} className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center p-6" style={{ backgroundColor: data.accentColor }}>
                    <div className="flex-shrink-0 mr-6">
                        <img src={data.appInfo.iconUrl} alt={data.appInfo.name} className="w-32 h-32 rounded-3xl" style={{ backgroundColor: data.appInfo.bgColor }}/>
                    </div>
                    <div className="text-black">
                        <p className="text-xs font-bold uppercase tracking-wider">{data.badge}</p>
                        <h3 className="text-3xl font-bold mt-1">{data.title}</h3>
                        <p className="text-lg mt-1">{data.description}</p>
                        <div className="mt-4 text-blue-600 font-semibold flex items-center">
                            View Game
                            <svg viewBox="0 0 51.108 87.687" className="w-2 h-3.5 ml-2 fill-current"><path d="M51.108 43.834c-.018-1.997-.718-3.638-2.334-5.23L11.214 1.877C9.974.6 8.453 0 6.64 0 2.96 0 .001 2.897.001 6.55 0 8.326.765 10.004 2.068 11.344l33.398 32.472L2.07 76.325C.784 77.665 0 79.305 0 81.137c0 3.653 2.96 6.55 6.641 6.55 1.796 0 3.334-.601 4.572-1.877l37.561-36.746c1.636-1.591 2.334-3.25 2.334-5.23Z"></path></svg>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default EditorialCard;
