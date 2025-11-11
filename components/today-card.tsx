import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { CardData } from "../types";
import AppLockup from "./app-lockup";

type TodayCardProps = {
  data: CardData;
};

const TodayCard: React.FC<TodayCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current
          .play()
          .catch((error) => console.log("Video play failed:", error));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const cardThemeClass =
    data.theme === "dark" ? "dark-theme-card" : "light-theme-card";
  const gradientClass =
    data.theme === "dark" ? "with-gradient-dark" : "with-gradient-light";

  const hasLockup = data.appInfo || data.lockupList;

  return (
    <a
      className="hover:-translate-y-1 relative block transform overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
      href={data.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: data.accentColor }}
    >
      <div className={`relative ${cardThemeClass} flex h-full flex-col`}>
        {/* Background Media */}
        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
          {data.videoSrc ? (
            <video
              className="absolute top-0 left-0 h-full w-full object-cover"
              loop
              muted
              playsInline
              poster={data.videoPosterUrl}
              ref={videoRef}
              src={data.videoSrc}
            />
          ) : (
            <img
              alt={data.title}
              className="absolute top-0 left-0 h-full w-full object-cover"
              height={500}
              src={data.imageUrl}
              width={400}
            />
          )}
        </div>

        {/* Text and Lockup Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-5 ${hasLockup ? gradientClass : ""}`}
        >
          {/* Top Text */}
          <div>
            <p className="font-bold text-xs uppercase tracking-wider opacity-80">
              {data.badge}
            </p>
            {data.titleImage ? (
              <img
                alt={data.title}
                className="mt-2 w-4/5"
                height={100}
                src={data.titleImage}
                width={300}
              />
            ) : (
              <h3 className="mt-1 line-clamp-2 font-bold text-2xl">
                {data.title}
              </h3>
            )}

            <p className="mt-1 line-clamp-2 text-sm opacity-80">
              {data.description}
            </p>
          </div>

          {/* Bottom Lockup */}
          {data.appInfo && (
            <div className="z-10">
              <AppLockup {...data.appInfo} theme={data.theme} />
            </div>
          )}
          {data.lockupList && (
            <div className="z-10 flex space-x-2">
              {data.lockupList.slice(0, 5).map((app) => (
                <button
                  className="block cursor-pointer border-none bg-transparent p-0 transition-transform hover:scale-105"
                  key={app.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(app.link, "_blank");
                  }}
                  type="button"
                >
                  <img
                    alt={app.name}
                    className="h-12 w-12 rounded-xl"
                    height={48}
                    src={app.iconUrl}
                    width={48}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default TodayCard;
