import type React from "react";
import Shelf from "../components/shelf";
import { gamesShelfData } from "../constants";
import type { ShelfData } from "../types";

const Games: React.FC = () => (
  <main className="flex-1 bg-surface md:pr-4 md:pl-8 lg:px-8 xl:px-12">
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
      <h1 className="mb-header font-bold text-4xl text-text-primary">Games</h1>
      <div className="gap-section space-y-12">
        {gamesShelfData.map((shelf: ShelfData) => (
          <Shelf
            cardLayout={shelf.cardLayout}
            cards={shelf.cards}
            key={shelf.id}
            subtitle={shelf.subtitle}
            title={shelf.title}
          />
        ))}
      </div>
    </div>
  </main>
);

export default Games;
