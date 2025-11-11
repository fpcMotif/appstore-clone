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
  const buttonThemeClasses =
    theme === "dark"
      ? "bg-white/20 text-white hover:bg-white/30"
      : "bg-gray-200/80 text-blue-600 font-semibold hover:bg-gray-300/90";

  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <img
          alt={`${name} icon`}
          className="h-12 w-12 rounded-xl"
          height="48"
          src={iconUrl}
          style={{ backgroundColor: bgColor }}
          width="48"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-sm">{name}</p>
        <p className="truncate text-xs opacity-80">{subtitle}</p>
      </div>
      <div className="flex-shrink-0">
        <button
          className={`rounded-full px-5 py-2 text-sm transition ${buttonThemeClasses}`}
          type="button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default AppLockup;
