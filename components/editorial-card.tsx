import type React from "react";
import type { EditorialCardData } from "../types";

type EditorialCardProps = {
  data: EditorialCardData;
};

const EditorialCard: React.FC<EditorialCardProps> = ({ data }) => (
  <section>
    <a
      className="card-interactive hover:-translate-y-[var(--transform-hover-lift)] block overflow-hidden transition-transform duration-[var(--transition-normal)] ease-[var(--transition-ease-in-out)]"
      href={data.link}
      style={{ backgroundColor: data.accentColor }}
    >
      <div className="flex flex-col gap-6 p-card text-text-light sm:flex-row sm:items-center">
        <div className="flex-shrink-0">
          <img
            alt={data.appInfo.name}
            className="size-app-icon rounded-3xl"
            height={128}
            src={data.appInfo.iconUrl}
            width={128}
          />
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-badge uppercase tracking-wider opacity-80">
            {data.badge}
          </p>
          <h3 className="font-bold text-3xl leading-tight">{data.title}</h3>
          <p className="text-lg opacity-90">{data.description}</p>
          <div className="mt-4 inline-flex items-center gap-2 font-semibold text-sm text-text-light/80">
            <span>View Game</span>
            <svg
              className="h-3.5 w-2"
              fill="currentColor"
              viewBox="0 0 51.108 87.687"
            >
              <title>Right arrow icon</title>
              <path d="M51.108 43.834c-.018-1.997-.718-3.638-2.334-5.23L11.214 1.877C9.974.6 8.453 0 6.64 0 2.96 0 .001 2.897.001 6.55 0 8.326.765 10.004 2.068 11.344l33.398 32.472L2.07 76.325C.784 77.665 0 79.305 0 81.137c0 3.653 2.96 6.55 6.641 6.55 1.796 0 3.334-.601 4.572-1.877l37.561-36.746c1.636-1.591 2.334-3.25 2.334-5.23Z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </section>
);

export default EditorialCard;
