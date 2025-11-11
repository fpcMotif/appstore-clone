import React, { useRef, useState, useEffect } from 'react';

interface HorizontalShelfProps {
  title?: string;
  subtitle?: string;
  seeAllLink?: string;
  children: React.ReactNode;
  contentClassName?: string;
}

const Arrow: React.FC<{ direction: 'left' | 'right', onClick: () => void, disabled: boolean }> = ({ direction, onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`absolute top-1/2 -translate-y-1/2 z-10 w-8 h-12 rounded-md bg-gray-200/50 hover:bg-gray-300/80 backdrop-blur-sm transition-opacity duration-300 ${direction === 'left' ? '-left-4' : '-right-4'} ${disabled ? 'opacity-0 cursor-default' : 'opacity-100'}`}
        aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
    >
        <svg viewBox="0 0 9 31" xmlns="http://www.w3.org/2000/svg" className={`w-2 h-4 mx-auto text-gray-700 ${direction === 'right' ? 'transform rotate-180' : ''}`}>
            <path d="M5.275 29.46a1.61 1.61 0 0 0 1.456 1.077c1.018 0 1.772-.737 1.772-1.737 0-.526-.277-1.186-.449-1.62l-4.68-11.912L8.05 3.363c.172-.442.45-1.116.45-1.625A1.702 1.702 0 0 0 6.728.002a1.603 1.603 0 0 0-1.456 1.09L.675 12.774c-.301.775-.677 1.744-.677 2.495 0 .754.376 1.705.677 2.498L5.272 29.46Z"></path>
        </svg>
    </button>
);


const HorizontalShelf: React.FC<HorizontalShelfProps> = ({ title, subtitle, seeAllLink, children, contentClassName = 'flex space-x-6' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScroll = () => {
    if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      checkForScroll();
      currentRef.addEventListener('scroll', checkForScroll);
      window.addEventListener('resize', checkForScroll);

      return () => {
        currentRef.removeEventListener('scroll', checkForScroll);
        window.removeEventListener('resize', checkForScroll);
      };
    }
  }, [children]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-4 flex justify-between items-end">
          <div>
            {title && <h2 className="text-2xl font-bold text-black">{title}</h2>}
            {subtitle && <p className="text-gray-500">{subtitle}</p>}
          </div>
          {seeAllLink && (
            <a href={seeAllLink} className="text-blue-600 font-semibold text-sm hover:underline">See All</a>
          )}
        </div>
      )}
      <div className="relative group">
        <div 
          ref={scrollRef} 
          className={`overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2 -mb-2 ${contentClassName}`}
        >
          {children}
        </div>
        <div className="hidden md:block">
            <Arrow direction="left" onClick={() => scroll('left')} disabled={!canScrollLeft} />
            <Arrow direction="right" onClick={() => scroll('right')} disabled={!canScrollRight} />
        </div>
      </div>
    </section>
  );
};

export default HorizontalShelf;
