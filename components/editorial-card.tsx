import type React from "react";
import type { EditorialCardData } from "../types";

type EditorialCardProps = {
  data: EditorialCardData;
};

const EditorialCard: React.FC<EditorialCardProps> = ({ data }) => (
  <section>
    <a
      className="hover:-translate-y-[var(--transform-hover-lift)] block transform overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] transition-all duration-[var(--transition-normal)] ease-in-out hover:shadow-[var(--shadow-card-hover)]"
      href={data.link}
    >
      <div
        className="flex items-center p-6"
        style={{ backgroundColor: data.accentColor }}
      >
        <div className="mr-6 flex-shrink-0">
          <img
            alt={data.appInfo.name}
            className="h-[var(--size-large-icon)] w-[var(--size-large-icon)] rounded-3xl"
            height={128}
            src={data.appInfo.iconUrl}
            width={128}
          />
        </div>
        <div className="text-black">
          <p className="font-bold text-xs uppercase tracking-wider">
            {data.badge}
          </p>
          <h3 className="mt-1 font-bold text-3xl">{data.title}</h3>
          <p className="mt-1 text-lg">{data.description}</p>
          <div className="mt-4 flex items-center font-semibold text-blue-600">
            View Game
            <svg
              className="ml-2 h-3.5 w-2 fill-current"
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
