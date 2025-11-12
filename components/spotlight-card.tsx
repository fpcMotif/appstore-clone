import type React from "react";
import type { SpotlightCardData } from "../types";
import AppLockup from "./app-lockup";

type SpotlightCardProps = {
  data: SpotlightCardData;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ data }) => {
  const cardThemeClass =
    data.theme === "light" ? "text-text-primary" : "text-text-light";

  if (data.layout === "west") {
    return (
      <li className="w-full flex-shrink-0 snap-start">
        <a
          className="hover:-translate-y-1 relative block aspect-spotlight transform overflow-hidden rounded-xl shadow-card transition-all duration-300 ease-in-out hover:shadow-card-hover md:aspect-spotlight-md lg:aspect-spotlight-lg"
          href={data.link}
          style={{ backgroundColor: data.accentColor }}
        >
          <div
            className={`relative ${cardThemeClass} flex h-full flex-col justify-between overflow-hidden`}
          >
            {/* Image on the right */}
            <div className="absolute top-0 right-0 bottom-0 h-full w-3/5">
              <img
                alt=""
                className="absolute right-0 bottom-0 h-full w-auto max-w-none object-contain object-right-bottom"
                height={400}
                src={data.imageUrl}
                width={600}
              />
            </div>

            {/* Text content on the left */}
            <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 md:w-3/5 md:p-8 lg:w-1/2">
              <div>
                <p className="font-bold text-xs uppercase tracking-wider opacity-80">
                  {data.badge}
                </p>
                <h3 className="mt-1 font-bold text-3xl lg:text-4xl">
                  {data.title}
                </h3>
                <p className="mt-1 text-sm opacity-80">{data.subtitle}</p>
              </div>

              <div className="max-w-sm">
                <AppLockup {...data.appInfo} theme={data.theme} />
              </div>
            </div>
          </div>
        </a>
      </li>
    );
  }

  // Default Spotlight Card (for Games page)
  return (
    <li className="w-full flex-shrink-0 snap-start">
      <a
        className="hover:-translate-y-1 relative block aspect-spotlight transform overflow-hidden rounded-xl shadow-card transition-all duration-300 ease-in-out hover:shadow-card-hover md:aspect-spotlight-md lg:aspect-spotlight-lg"
        href={data.link}
        style={{ backgroundColor: data.accentColor }}
      >
        <div className={`relative ${cardThemeClass} flex h-full flex-col`}>
          <img
            alt={data.title}
            className="absolute top-0 left-0 h-full w-full object-cover"
            height={600}
            src={data.imageUrl}
            width={800}
          />
          <div
            className="gradient-overlay absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${data.accentColor} 35%, transparent 70%)`,
            }}
          />

          <div className="relative flex h-full w-full flex-col justify-between p-6 md:w-1/2 md:p-8 lg:w-2/5">
            <div>
              <p className="font-bold text-xs uppercase tracking-wider opacity-80">
                {data.badge}
              </p>
              <h3 className="mt-1 line-clamp-2 font-bold text-2xl md:text-3xl">
                {data.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm opacity-80">
                {data.subtitle}
              </p>
            </div>
            <AppLockup {...data.appInfo} theme={data.theme} />
          </div>
        </div>
      </a>
    </li>
  );
};

export default SpotlightCard;
