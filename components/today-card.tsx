import type React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import type { CardData } from "../types";
import AppLockup from "./app-lockup";

type TodayCardProps = {
  data: CardData;
};

const TodayCard: React.FC<TodayCardProps> = ({ data }) => {
  const MAX_LOCKUP_DISPLAY = 5;
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

  const renderMultilineTitle = (text: string) =>
    text.split("<br>").map((segment, index) => (
      <Fragment key={`${data.id}-title-${index}`}>
        {index > 0 && <br />}
        {segment}
      </Fragment>
    ));

  return (
    <a
      className="card-interactive relative block transform overflow-hidden"
      href={data.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: data.accentColor }}
    >
      <div className={`relative ${cardThemeClass} flex h-full flex-col`}>
        {/* Background Media */}
        <div className="relative aspect-card w-full overflow-hidden">
          {data.videoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
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
              className="absolute inset-0 h-full w-full object-cover"
              height={500}
              src={data.imageUrl}
              width={400}
            />
          )}
        </div>

        {/* Text and Lockup Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-card ${hasLockup ? gradientClass : ""}`}
        >
          {/* Top Text */}
          <div>
            <p className="font-bold text-badge uppercase tracking-wider opacity-80">
              {data.badge}
            </p>
            {data.titleImage ? (
              <img
                alt={data.title}
                className="mt-6 w-4/5"
                height={100}
                src={data.titleImage}
                width={300}
              />
            ) : (
              <h3 className="mt-content font-bold text-2xl leading-tight">
                {renderMultilineTitle(data.title)}
              </h3>
            )}

            <p className="mt-content line-clamp-2 text-sm opacity-80">
              {data.description}
            </p>
          </div>

          {/* Bottom Lockup */}
          {data.appInfo && (
            <div className="z-overlay">
              <AppLockup {...data.appInfo} theme={data.theme} />
            </div>
          )}
          {data.lockupList && (
            <div className="z-overlay flex gap-2">
              {data.lockupList.slice(0, MAX_LOCKUP_DISPLAY).map((app) => (
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
                    className="size-app-icon rounded-xl"
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
