import React, { useState, useRef, useEffect } from 'react';
import type { VideoCardData } from '../types';
import AppLockup from './AppLockup';

interface VideoCardProps {
    data: VideoCardData;
}

const VideoCard: React.FC<VideoCardProps> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play().catch(error => console.log("Video play failed:", error));
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <li
            className="snap-start flex-shrink-0 w-full space-y-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={data.link} className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-video bg-gray-200">
                    <video
                        ref={videoRef}
                        src={data.videoSrc}
                        poster={data.videoPosterUrl}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
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
