
import React, { useState, useRef, useEffect } from 'react';
import type { CardData } from '../types';
import AppLockup from './AppLockup';

interface TodayCardProps {
  data: CardData;
}

const TodayCard: React.FC<TodayCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(error => console.log("Video play failed:", error));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const cardThemeClass = data.theme === 'dark' ? 'dark-theme-card' : 'light-theme-card';
  const gradientClass = data.theme === 'dark' ? 'with-gradient-dark' : 'with-gradient-light';
  
  const hasLockup = data.appInfo || data.lockupList;

  return (
    <a 
      href={data.link}
      className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 relative"
      style={{ backgroundColor: data.accentColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${cardThemeClass} h-full flex flex-col`}>
        {/* Background Media */}
        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden">
          {data.videoSrc ? (
            <video
              ref={videoRef}
              src={data.videoSrc}
              poster={data.videoPosterUrl}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            />
          ) : (
            <img src={data.imageUrl} alt={data.title} className="absolute top-0 left-0 w-full h-full object-cover" />
          )}
        </div>

        {/* Text and Lockup Overlay */}
        <div className={`absolute inset-0 flex flex-col justify-between p-5 ${hasLockup ? gradientClass : ''}`}>
          {/* Top Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">{data.badge}</p>
            {data.titleImage ? (
                 <img src={data.titleImage} alt={data.title} className="w-4/5 mt-2" />
            ) : (
                <h3 className="text-2xl font-bold mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: data.title }} />
            )}
           
            <p className="text-sm opacity-80 mt-1 line-clamp-2">{data.description}</p>
          </div>

          {/* Bottom Lockup */}
          {data.appInfo && (
            <div className="z-10">
              <AppLockup {...data.appInfo} theme={data.theme} />
            </div>
          )}
          {data.lockupList && (
             <div className="z-10 flex space-x-2">
                {data.lockupList.slice(0, 5).map(app => (
                    <a href={app.link} key={app.name} className="block hover:scale-105 transition-transform">
                         <img src={app.iconUrl} alt={app.name} className="w-12 h-12 rounded-xl" />
                    </a>
                ))}
             </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default TodayCard;
