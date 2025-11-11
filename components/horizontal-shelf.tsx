import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type HorizontalShelfProps = {
  title?: string;
  subtitle?: string;
  seeAllLink?: string;
  children: React.ReactNode;
  contentClassName?: string;
};

const Arrow: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => (
  <button
    aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    className={`-translate-y-1/2 absolute top-1/2 z-10 h-12 w-8 rounded-md bg-gray-200/50 backdrop-blur-sm transition-opacity duration-300 hover:bg-gray-300/80 ${direction === "left" ? "-left-4" : "-right-4"} ${disabled ? "cursor-default opacity-0" : "opacity-100"}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <svg
      className={`mx-auto h-4 w-2 text-gray-700 ${direction === "right" ? "rotate-180 transform" : ""}`}
      viewBox="0 0 9 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Scroll arrow</title>
      <path d="M5.275 29.46a1.61 1.61 0 0 0 1.456 1.077c1.018 0 1.772-.737 1.772-1.737 0-.526-.277-1.186-.449-1.62l-4.68-11.912L8.05 3.363c.172-.442.45-1.116.45-1.625A1.702 1.702 0 0 0 6.728.002a1.603 1.603 0 0 0-1.456 1.09L.675 12.774c-.301.775-.677 1.744-.677 2.495 0 .754.376 1.705.677 2.498L5.272 29.46Z" />
    </svg>
  </button>
);

const HorizontalShelf: React.FC<HorizontalShelfProps> = ({
  title,
  subtitle,
  seeAllLink,
  children,
  contentClassName = "flex space-x-6",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      checkForScroll();
      currentRef.addEventListener("scroll", checkForScroll);
      window.addEventListener("resize", checkForScroll);

      return () => {
        currentRef.removeEventListener("scroll", checkForScroll);
        window.removeEventListener("resize", checkForScroll);
      };
    }
  }, [checkForScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-4 flex items-end justify-between">
          <div>
            {title && (
              <h2 className="font-bold text-2xl text-black">{title}</h2>
            )}
            {subtitle && <p className="text-gray-500">{subtitle}</p>}
          </div>
          {seeAllLink && (
            <a
              className="font-semibold text-blue-600 text-sm hover:underline"
              href={seeAllLink}
            >
              See All
            </a>
          )}
        </div>
      )}
      <div className="group relative">
        <div
          className={`scrollbar-hide -mb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 ${contentClassName}`}
          ref={scrollRef}
        >
          {children}
        </div>
        <div className="hidden md:block">
          <Arrow
            direction="left"
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          />
          <Arrow
            direction="right"
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalShelf;
