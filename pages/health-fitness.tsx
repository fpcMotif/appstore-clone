import type React from "react";
import HorizontalShelf from "../components/horizontal-shelf";
import SmallLockupCard from "../components/small-lockup-card";
import SpotlightCard from "../components/spotlight-card";
import { healthFitnessPageData } from "../constants";
import type { CategoryShelf, CategoryShelfItem } from "../types";

const renderCard = (
  item: CategoryShelfItem,
  shelfType: CategoryShelf["type"]
) => {
  switch (shelfType) {
    case "spotlight":
      return <SpotlightCard data={item} key={item.id} />;
    case "small-lockup-grid":
    case "ordinal-lockup-row":
      return <SmallLockupCard data={item} key={item.id} />;
    default:
      return null;
  }
};

const HealthFitness: React.FC = () => {
  const { title, shelves } = healthFitnessPageData;

  const shelfGridClasses: { [key: string]: string } = {
    spotlight:
      "grid grid-flow-col auto-cols-[calc(100%-40px)] sm:auto-cols-[calc(100%-40px)] md:auto-cols-[100%] gap-x-5",
    "small-lockup-grid":
      "grid grid-flow-col grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6",
    "ordinal-lockup-row":
      "grid grid-flow-col auto-cols-[90%] sm:auto-cols-[calc(33.33%-14px)] md:auto-cols-[calc(25%-15px)] lg:auto-cols-[calc(20%-16px)] xl:auto-cols-[calc(16.66%-17px)] gap-x-5",
  };

  return (
    <main className="flex-1 bg-surface md:pr-4 md:pl-8 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
        <h1 className="mb-header font-bold text-4xl text-text-primary">
          {title}
        </h1>
        <div className="gap-section space-y-12">
          {shelves.map((shelf) => (
            <HorizontalShelf
              contentClassName={shelfGridClasses[shelf.type]}
              key={shelf.id}
              seeAllLink={shelf.seeAllLink}
              subtitle={shelf.subtitle}
              title={shelf.title}
            >
              {shelf.items.map((item) => renderCard(item, shelf.type))}
            </HorizontalShelf>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HealthFitness;
