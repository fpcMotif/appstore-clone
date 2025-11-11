import React, { useState, useEffect, useRef } from 'react';
import type { SpotlightCardData } from '../types';
import AppLockup from './AppLockup';

interface HeroCarouselProps {
    items: SpotlightCardData[];
}

const HeroCard: React.FC<{ data: SpotlightCardData; isActive: boolean }> = ({ data, isActive }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                videoRef.current.play().catch(e => console.error("Video play failed:", e));
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isActive]);
    
    const cardThemeClass = data.theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className="w-full flex-shrink-0">
             <div className="relative aspect-[1.7] md:aspect-[2.2] lg:aspect-[2.5] xl:aspect-[3] w-full">
                <a href={data.link} className="block w-full h-full">
                    {data.videoSrc ? (
                        <video ref={videoRef} src={data.videoSrc} poster={data.videoPosterUrl} className="w-full h-full object-cover" loop muted playsInline />
                    ) : (
                        <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-between ${cardThemeClass}`}>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider opacity-90">{data.badge}</p>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-1">{data.title}</h2>
                            <p className="text-sm opacity-90 mt-1 max-w-xs">{data.subtitle}</p>
                        </div>
                        <div className="max-w-sm">
                            <AppLockup {...data.appInfo} theme={data.theme} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    // Fix: Replace Node-specific type with a portable type to resolve namespace error.
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => scrollToIndex((activeIndex + 1) % items.length),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [activeIndex, items.length]);

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth;
            const childWidth = scrollWidth / items.length;
            scrollRef.current.scrollTo({ left: childWidth * index, behavior: 'smooth' });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    }

    const nextSlide = () => {
        const newIndex = (activeIndex + 1) % items.length;
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (activeIndex - 1 + items.length) % items.length;
        scrollToIndex(newIndex);
    };

    const activeItemColor = items.length > 0 ? items[activeIndex].accentColor : 'transparent';
    const activeItemImage = items.length > 0 ? (items[activeIndex].videoPosterUrl || items[activeIndex].imageUrl) : '';

    return (
        <section className="relative group mb-8">
            <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
                <div className="relative w-full h-full">
                {items.map((item, index) => (
                    <div 
                        key={item.id}
                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                        style={{ opacity: index === activeIndex ? 1 : 0, backgroundColor: item.accentColor }}
                    >
                        <img 
                            src={item.videoPosterUrl || item.imageUrl} 
                            className="w-full h-full object-cover scale-125 opacity-30"
                            style={{ filter: 'blur(40px)' }}
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f7]"></div>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                 <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-xl shadow-xl"
                 >
                    {items.map((item, index) => (
                        <HeroCard key={item.id} data={item} isActive={index === activeIndex} />
                    ))}
                </div>

                <button onClick={prevSlide} className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Previous Slide</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onClick={nextSlide} className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Next Slide</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                        <button key={index} onClick={() => scrollToIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-white/80' : 'bg-white/30'}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;