import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SpotlightCardData } from "../types";
import AppLockup from "./app-lockup";

type HeroCarouselProps = {
  items: SpotlightCardData[];
};

const HeroCard: React.FC<{ data: SpotlightCardData; isActive: boolean }> = ({
  data,
  isActive,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current
          .play()
          .catch((e) => console.error("Video play failed:", e));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  const cardThemeClass = data.theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="w-full flex-shrink-0">
      <div className="relative aspect-[1.7] w-full md:aspect-[2.2] lg:aspect-[2.5] xl:aspect-[3]">
        <a className="block h-full w-full" href={data.link}>
          {data.videoSrc ? (
            <video
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              poster={data.videoPosterUrl}
              ref={videoRef}
              src={data.videoSrc}
            />
          ) : (
            <img
              alt={data.title}
              className="h-full w-full object-cover"
              height={600}
              src={data.imageUrl}
              width={800}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div
            className={`absolute inset-0 flex flex-col justify-between p-6 md:p-8 ${cardThemeClass}`}
          >
            <div>
              <p className="font-bold text-xs uppercase tracking-wider opacity-90">
                {data.badge}
              </p>
              <h2 className="mt-1 font-bold text-3xl lg:text-4xl">
                {data.title}
              </h2>
              <p className="mt-1 max-w-xs text-sm opacity-90">
                {data.subtitle}
              </p>
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

  const AUTO_SCROLL_INTERVAL = 5000;

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const childWidth = scrollWidth / items.length;
        scrollRef.current.scrollTo({
          left: childWidth * index,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    },
    [items.length]
  );

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => scrollToIndex((activeIndex + 1) % items.length),
      AUTO_SCROLL_INTERVAL
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, items.length, resetTimeout, scrollToIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % items.length;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + items.length) % items.length;
    scrollToIndex(newIndex);
  };

  return (
    <section className="group relative mb-8">
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
        <div className="relative h-full w-full">
          {items.map((item, index) => (
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              key={item.id}
              style={{ backgroundColor: item.accentColor }}
            >
              <img
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-125 object-cover opacity-30 blur-[40px]"
                height={800}
                src={item.videoPosterUrl || item.imageUrl}
                width={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto rounded-xl shadow-xl"
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {items.map((item, index) => (
            <HeroCard
              data={item}
              isActive={index === activeIndex}
              key={item.id}
            />
          ))}
        </div>

        <button
          className="-translate-y-1/2 absolute top-1/2 left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white group-hover:opacity-100 sm:left-6 lg:left-12"
          onClick={prevSlide}
          type="button"
        >
          <span className="sr-only">Previous Slide</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Chevron left</title>
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button
          className="-translate-y-1/2 absolute top-1/2 right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white group-hover:opacity-100 sm:right-6 lg:right-12"
          onClick={nextSlide}
          type="button"
        >
          <span className="sr-only">Next Slide</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Chevron right</title>
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </button>
        <div className="-translate-x-1/2 absolute bottom-4 left-1/2 flex space-x-2">
          {items.map((item, index) => (
            <button
              className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? "bg-white/80" : "bg-white/30"}`}
              key={item.id}
              onClick={() => scrollToIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
