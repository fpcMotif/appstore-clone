import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { VideoCardData } from "../types";
import AppLockup from "./app-lockup";

type VideoCardProps = {
  data: VideoCardData;
};

const VideoCard: React.FC<VideoCardProps> = ({ data }) => {
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

  return (
    <li className="w-full flex-shrink-0 snap-start space-y-3">
      <a
        className="block overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-md)] transition-all duration-[var(--transition-normal)] ease-in-out hover:shadow-[var(--shadow-xl)]"
        href={data.link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video w-full bg-gray-200">
          <video
            className="absolute top-0 left-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            poster={data.videoPosterUrl}
            ref={videoRef}
            src={data.videoSrc}
          />
        </div>
      </a>
      <div className="px-1">
        <AppLockup {...data.appInfo} theme="light" />
      </div>
    </li>
  );
};

export default VideoCard;
