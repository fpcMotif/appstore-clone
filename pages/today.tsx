import type React from "react";
import { useQuery } from "convex/react";
import Shelf from "../components/shelf";
import { api } from "../convex/_generated/api";

const Today: React.FC = () => {
  const shelves = useQuery(api.today.list);

  if (shelves === undefined) {
    return (
      <main className="flex-1 bg-surface md:pr-4 md:pl-8 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
          <h1 className="mb-header font-bold text-4xl text-text-primary">
            Today
          </h1>
          <div className="gap-section space-y-12">
            <p className="text-text-secondary">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-surface md:pr-4 md:pl-8 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
        <h1 className="mb-header font-bold text-4xl text-text-primary">
          Today
        </h1>
        <div className="gap-section space-y-12">
          {shelves.map((shelf) => (
            <Shelf
              cardLayout={shelf.cardLayout}
              cards={shelf.cards}
              key={shelf._id}
              subtitle={shelf.subtitle}
              title={shelf.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Today;
