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
  const buttonStyle =
    theme === "dark"
      ? {
          backgroundColor: "var(--color-text-light)",
          color: "var(--color-text-primary)",
          opacity: 0.2,
        }
      : {
          backgroundColor: "var(--color-background-disabled)",
          color: "var(--color-link)",
        };

  return (
    <div className="flex items-center" style={{ gap: "var(--spacing-md)" }}>
      <div className="flex-shrink-0">
        <img
          alt={`${name} icon`}
          height="48"
          src={iconUrl}
          style={{
            height: "var(--size-app-icon)",
            width: "var(--size-app-icon)",
            borderRadius: "var(--radius-xl)",
            backgroundColor: bgColor,
          }}
          width="48"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="truncate font-semibold"
          style={{ fontSize: "var(--size-3)" }}
        >
          {name}
        </p>
        <p
          className="truncate"
          style={{ fontSize: "var(--size-2)", opacity: 0.8 }}
        >
          {subtitle}
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          className="font-semibold transition-fast"
          style={{
            borderRadius: "9999px",
            paddingLeft: "var(--spacing-button-padding)",
            paddingRight: "var(--spacing-button-padding)",
            paddingTop: "var(--spacing-sm)",
            paddingBottom: "var(--spacing-sm)",
            fontSize: "var(--size-3)",
            ...buttonStyle,
          }}
          type="button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default AppLockup;
