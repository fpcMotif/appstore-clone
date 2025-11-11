import type React from "react";
import { useEffect, useRef, useState } from "react";
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
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "var(--aspect-card)" }}
        >
          {data.videoSrc ? (
            <video
              className="absolute object-cover"
              loop
              muted
              playsInline
              poster={data.videoPosterUrl}
              ref={videoRef}
              src={data.videoSrc}
              style={{ top: 0, left: 0, height: "100%", width: "100%" }}
            />
          ) : (
            <img
              alt={data.title}
              className="absolute object-cover"
              height={500}
              src={data.imageUrl}
              style={{ top: 0, left: 0, height: "100%", width: "100%" }}
              width={400}
            />
          )}
        </div>

        {/* Text and Lockup Overlay */}
        <div
          className={`absolute flex flex-col justify-between ${hasLockup ? gradientClass : ""}`}
          style={{ inset: 0, padding: "var(--spacing-card-padding)" }}
        >
          {/* Top Text */}
          <div>
            <p
              className="font-bold uppercase tracking-wider"
              style={{ fontSize: "var(--size-2)", opacity: 0.8 }}
            >
              {data.badge}
            </p>
            {data.titleImage ? (
              <img
                alt={data.title}
                height={100}
                src={data.titleImage}
                style={{ marginTop: "var(--spacing-lg)", width: "80%" }}
                width={300}
              />
            ) : (
              <h3
                className="line-clamp-2 font-bold"
                style={{
                  marginTop: "var(--spacing-content-margin)",
                  fontSize: "var(--size-6)",
                }}
              >
                {data.title}
              </h3>
            )}

            <p
              className="line-clamp-2"
              style={{
                marginTop: "var(--spacing-content-margin)",
                fontSize: "var(--size-3)",
                opacity: 0.8,
              }}
            >
              {data.description}
            </p>
          </div>

          {/* Bottom Lockup */}
          {data.appInfo && (
            <div style={{ zIndex: 10 }}>
              <AppLockup {...data.appInfo} theme={data.theme} />
            </div>
          )}
          {data.lockupList && (
            <div
              className="flex"
              style={{ zIndex: 10, gap: "var(--spacing-sm)" }}
            >
              {data.lockupList.slice(0, MAX_LOCKUP_DISPLAY).map((app) => (
                <button
                  className="block cursor-pointer border-none bg-transparent transition-transform"
                  key={app.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(app.link, "_blank");
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  style={{ padding: 0 }}
                  type="button"
                >
                  <img
                    alt={app.name}
                    height={48}
                    src={app.iconUrl}
                    style={{
                      width: "var(--size-app-icon)",
                      height: "var(--size-app-icon)",
                      borderRadius: "var(--radius-xl)",
                    }}
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
