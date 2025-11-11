import type React from "react";
import Shelf from "../components/shelf";
import { shelfData } from "../constants";
import type { ShelfData } from "../types";

const Today: React.FC = () => (
  <main className="flex-1 bg-[var(--color-surface)] md:pr-[var(--spacing-4)] md:pl-[var(--spacing-8)] lg:px-[var(--spacing-8)] xl:px-[var(--spacing-12)]">
    <div className="mx-auto max-w-7xl px-[var(--spacing-4)] py-[var(--spacing-8)] sm:px-[var(--spacing-6)] md:px-[var(--spacing-0)]">
      <h1
        className="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]"
        style={{ marginBottom: "var(--spacing-header-margin)" }}
      >
        Today
      </h1>
      <div
        className="space-y-[var(--spacing-section-gap)]"
        style={{ gap: "var(--spacing-section-gap)" }}
      >
        {shelfData.map((shelf: ShelfData) => (
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

export default Today;
