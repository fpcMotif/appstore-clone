import type React from "react";
import type { AppInfo } from "../types";

interface AppLockupProps extends AppInfo {
  theme: "light" | "dark";
}

const AppLockup: React.FC<AppLockupProps> = ({
  iconUrl,
  name,
  subtitle,
  theme,
  bgColor,
}) => {
  const buttonClasses =
    theme === "dark"
      ? "bg-text-light/20 text-text-primary rounded-full px-5 py-2 text-sm font-semibold transition-fast"
      : "bg-background-disabled text-link rounded-full px-5 py-2 text-sm font-semibold transition-fast";

  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <img
          alt={`${name} icon`}
          className="size-app-icon rounded-xl"
          height="48"
          src={iconUrl}
          style={{ backgroundColor: bgColor }}
          width="48"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-lockup-title">{name}</p>
        <p className="truncate text-lockup-subtitle opacity-80">{subtitle}</p>
      </div>
      <div className="flex-shrink-0">
        <button className={buttonClasses} type="button">
          View
        </button>
      </div>
    </div>
  );
};

export default AppLockup;
