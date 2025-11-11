import type React from "react";
import type { CardData } from "../types";
import TodayCard from "./today-card";

type ShelfProps = {
  title: string;
  subtitle: string;
  cards: CardData[];
  cardLayout: "2-card" | "4-card";
};

const Shelf: React.FC<ShelfProps> = ({
  title,
  subtitle,
  cards,
  cardLayout,
}) => {
  const gridClasses = {
    "2-card": "grid-cols-1 md:grid-cols-2 gap-6",
    "4-card": "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6",
  };

  return (
    <section>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-black">{title}</h2>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
      <div className={`grid ${gridClasses[cardLayout]}`}>
        {cards.map((card) => (
          <TodayCard data={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default Shelf;
