import type React from "react";
import type { CategoryLinkData } from "../types";

type CategoryLinkCardProps = {
  data: CategoryLinkData;
};

const CategoryLinkCard: React.FC<CategoryLinkCardProps> = ({ data }) => (
  <li className="snap-start">
    <a
      className="relative block aspect-video overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
      href={data.link}
    >
      <img
        alt={data.name}
        className="h-full w-full object-cover"
        height={160}
        src={data.imageUrl}
        width={284}
      />
      <div className="absolute inset-0 bg-black/20" />
      <h3 className="absolute bottom-3 left-4 font-bold text-lg text-white">
        {data.name}
      </h3>
    </a>
  </li>
);

export default CategoryLinkCard;
