import type React from "react";
import type { CategoryLinkData } from "../types";

type CategoryLinkCardProps = {
  data: CategoryLinkData;
};

const CategoryLinkCard: React.FC<CategoryLinkCardProps> = ({ data }) => (
  <li className="snap-start">
    <a
      className="relative block aspect-[var(--aspect-video)] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] transition-all duration-[var(--transition-duration-normal)] ease-[var(--transition-ease-in-out)] hover:shadow-[var(--shadow-card)]"
      href={data.link}
    >
      <img
        alt={data.name}
        className="h-full w-full object-cover"
        height={160}
        src={data.imageUrl}
        width={284}
      />
      <div className="absolute inset-0 bg-[var(--color-scrim)]/20" />
      <h3 className="absolute bottom-[var(--spacing-3)] left-[var(--spacing-4)] font-[var(--font-weight-bold)] text-[var(--color-text-inverse)] text-[var(--font-size-lg)]">
        {data.name}
      </h3>
    </a>
  </li>
);

export default CategoryLinkCard;
