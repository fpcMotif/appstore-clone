import type React from "react";
import HeroCarousel from "../components/hero-carousel";
import HorizontalShelf from "../components/horizontal-shelf";
import SmallLockupCard from "../components/small-lockup-card";
import { arcadePageData } from "../constants";
import type {
  CategoryShelf,
  CategoryShelfItem,
  SpotlightCardData,
} from "../types";

const renderCard = (
  item: CategoryShelfItem,
  shelfType: CategoryShelf["type"]
) => {
  switch (shelfType) {
    case "ordinal-lockup-row":
    case "small-lockup-grid":
      return <SmallLockupCard data={item} key={item.id} />;
    default:
      return null;
  }
};

const Arcade: React.FC = () => {
  const { title, shelves } = arcadePageData;

  const shelfGridClasses: { [key: string]: string } = {
    "small-lockup-grid":
      "grid grid-flow-col grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6",
    "ordinal-lockup-row":
      "grid grid-flow-col auto-cols-[90%] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] xl:auto-cols-[calc(16.66%-17px)] gap-x-5",
  };

  return (
    <main className="flex-1 bg-white md:bg-[#f5f5f7]">
      <div className="space-y-12 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="mb-2 font-bold text-4xl text-black">{title}</h1>
        </div>

        {shelves.map((shelf) => {
          if (shelf.type === "hero-carousel") {
            return (
              <HeroCarousel
                items={shelf.items as SpotlightCardData[]}
                key={shelf.id}
              />
            );
          }

          return (
            <div
              className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
              key={shelf.id}
            >
              <HorizontalShelf
                contentClassName={shelfGridClasses[shelf.type]}
                seeAllLink={shelf.seeAllLink}
                subtitle={shelf.subtitle}
                title={shelf.title}
              >
                {shelf.items.map((item) => renderCard(item, shelf.type))}
              </HorizontalShelf>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Arcade;
