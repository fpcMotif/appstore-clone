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
    "2-card": "grid-cols-1 md:grid-cols-2 gap-card",
    "4-card":
      "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-card",
  };

  return (
    <section>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-text-primary">{title}</h2>
        {subtitle && <p className="text-text-secondary">{subtitle}</p>}
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
