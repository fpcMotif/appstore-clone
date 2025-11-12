import type React from "react";
import type { SmallLockupData } from "../types";

type SmallLockupCardProps = {
  data: SmallLockupData;
};

const SmallLockupCard: React.FC<SmallLockupCardProps> = ({ data }) => (
  <li className="snap-start">
    <a className="group flex items-center space-x-4" href={data.link}>
      {data.ordinal && (
        <div className="w-8 text-center font-bold text-2xl text-text-secondary">
          {data.ordinal}
        </div>
      )}
      <div className="flex-shrink-0">
        <img
          alt={`${data.name} icon`}
          className="h-16 w-16 rounded-2xl"
          height={64}
          src={data.iconUrl}
          style={{ backgroundColor: data.bgColor }}
          width={64}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-text-primary group-hover:text-link">
          {data.name}
        </p>
        <p className="truncate text-text-secondary text-xs">{data.subtitle}</p>
      </div>
      <div className="flex-shrink-0">
        <button
          className="rounded-full bg-background-disabled px-5 py-1.5 font-semibold text-link text-sm transition group-hover:bg-background-hover"
          type="button"
        >
          View
        </button>
      </div>
    </a>
  </li>
);

export default SmallLockupCard;
