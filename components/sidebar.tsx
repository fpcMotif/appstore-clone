import type React from "react";
import { categories, navItems } from "../constants";
import type { CategoryItem, NavItem } from "../types";

const AppStoreIcon: React.FC = () => (
  <svg
    className="text-[var(--color-text-secondary)]/90"
    height="21"
    viewBox="0 0 121 21"
    width="121"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>App Store icon</title>
    <g fill="currentColor" fillRule="nonzero">
      <path
        d="M11.417 12.204H8.094l5.8-10.067c.19-.328.25-.683.178-1.065a1.214 1.214 0 0 0-.637-.87c-.357-.21-.717-.25-1.082-.121a1.43 1.43 0 0 0-.811.684l-.575.942-.572-.942a1.46 1.46 0 0 0-.81-.69c-.361-.132-.722-.09-1.084.128-.354.204-.563.495-.628.874-.065.379-.003.732.188 1.06L9.412 4.45l-4.49 7.755H1.434c-.37 0-.7.126-.994.378-.293.253-.44.583-.44.992 0 .404.147.731.44.983.293.252.625.378.994.378h11.979a2.449 2.449 0 0 0-.017-1.242 2.097 2.097 0 0 0-.66-1.06c-.327-.286-.767-.429-1.32-.429Zm9.086 0h-3.477l-3.798-6.559c-.38.28-.65.694-.811 1.244a4.654 4.654 0 0 0-.154 1.755c.058.62.226 1.172.506 1.656l4.798 8.288c.184.327.457.555.818.685.36.13.721.093 1.084-.112.355-.199.569-.489.64-.87.072-.382.013-.74-.179-1.073L18.6 14.935h1.904c.374 0 .707-.126.998-.378.29-.252.436-.58.436-.983 0-.409-.146-.74-.436-.992a1.479 1.479 0 0 0-.998-.378Zm-17.72 3.713-.758 1.3c-.19.334-.251.69-.184 1.069.068.378.276.67.625.875.368.21.732.249 1.094.116a1.51 1.51 0 0 0 .818-.689l1.106-1.881c-.088-.159-.257-.325-.506-.498a2.474 2.474 0 0 0-.937-.374c-.376-.075-.795-.048-1.257.082ZM28.145 16.906h2.768l1.251-3.825h5.506l1.251 3.825h2.78L36.408 2.109h-2.973l-5.291 14.797Zm6.747-12.162h.061l2.05 6.296h-4.172l2.06-6.296ZM43.013 20.494h2.553V15.07h.051c.615 1.272 1.856 2.05 3.404 2.05 2.728 0 4.471-2.152 4.471-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487ZM55.133 20.494h2.553V15.07h.051c.616 1.272 1.856 2.05 3.405 2.05 2.727 0 4.47-2.152 4.47-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487ZM76.912 17.162c3.61 0 5.783-1.754 5.783-4.512v-.01c0-2.307-1.343-3.558-4.42-4.194l-1.599-.328c-1.784-.37-2.594-.984-2.594-2.03v-.01c0-1.18 1.077-1.99 2.81-2 1.66 0 2.799.769 2.973 2.06l.02.124h2.533l-.01-.174c-.154-2.533-2.266-4.235-5.496-4.235-3.189 0-5.476 1.763-5.486 4.368v.01c0 2.205 1.436 3.558 4.348 4.163l1.59.328c1.906.4 2.676.995 2.676 2.102v.01c0 1.272-1.17 2.103-3.036 2.103-1.856 0-3.158-.79-3.353-2.061l-.02-.123h-2.533l.01.154c.175 2.655 2.41 4.255 5.804 4.255ZM88.458 17.12c.513 0 .964-.05 1.261-.091V15.11c-.174.01-.369.041-.615.041-.933 0-1.405-.338-1.405-1.405V8.005h2.02V6.036H87.7V3.278h-2.594v2.758h-1.538v1.97h1.538v5.957c0 2.235 1.077 3.158 3.353 3.158ZM96.271 17.12c3.19 0 5.26-2.122 5.26-5.649v-.02c0-3.507-2.101-5.64-5.27-5.64-3.158 0-5.25 2.153-5.25 5.64v.02c0 3.517 2.061 5.65 5.26 5.65Zm.01-2.06c-1.63 0-2.665-1.302-2.665-3.589v-.02c0-2.256 1.056-3.569 2.645-3.569 1.62 0 2.666 1.302 2.666 3.568v.021c0 2.276-1.035 3.589-2.645 3.589ZM103.172 16.906h2.554v-6.307c0-1.61.871-2.522 2.317-2.522.43 0 .82.061 1.036.143V5.913a3.326 3.326 0 0 0-.81-.102c-1.251 0-2.154.79-2.492 2.102h-.051V6.036h-2.554v10.87ZM115.17 17.12c2.84 0 4.44-1.68 4.778-3.352l.03-.113h-2.389l-.02.072c-.246.728-1.077 1.405-2.348 1.405-1.661 0-2.707-1.128-2.748-3.036h7.608v-.82c0-3.281-1.928-5.465-5.035-5.465s-5.106 2.256-5.106 5.68v.01c0 3.456 1.969 5.62 5.23 5.62Zm-.093-9.31c1.354 0 2.338.862 2.523 2.584h-5.097c.205-1.671 1.22-2.584 2.574-2.584Z"
        transform="translate(.086 .095)"
      />
    </g>
  </svg>
);

type SidebarProps = {
  activeRoute: string;
};

const Sidebar: React.FC<SidebarProps> = ({ activeRoute }) => (
  <aside className="sticky top-0 hidden h-screen w-[var(--size-sidebar-width)] border-[var(--color-outline)]/80 border-r bg-[var(--color-background)] px-[var(--spacing-4)] py-[var(--spacing-8)] md:block">
    <div className="mb-[var(--spacing-lg)] flex items-center gap-[var(--spacing-sm)]">
      <AppStoreIcon />
    </div>
    <nav
      className="space-y-[var(--spacing-xl)]"
      style={{ gap: "var(--spacing-xl)" }}
    >
      <div>
        <ul className="space-y-1" style={{ gap: "var(--spacing-md)" }}>
          {navItems.map((item: NavItem) => {
            const isActive = item.link === activeRoute;
            return (
              <li key={item.name}>
                <a
                  className={`flex items-center rounded-[var(--radius-md)] px-[var(--spacing-3)] py-[var(--spacing-2)] font-[var(--font-weight-medium)] text-[var(--font-size-sm)] transition-colors ${
                    isActive
                      ? "bg-[var(--color-background-disabled)]/80 text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background-disabled)]/50"
                  }`}
                  href={item.link}
                >
                  <span className="mr-[var(--spacing-md)] h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--color-text-secondary)]">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-[var(--color-outline)]/80 border-t pt-[var(--spacing-lg)]">
        <h3 className="mb-[var(--spacing-sm)] px-[var(--spacing-3)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] text-[var(--font-size-xs)] uppercase tracking-[var(--letter-spacing-wide)]">
          Categories
        </h3>
        <ul className="space-y-1" style={{ gap: "var(--spacing-md)" }}>
          {categories.map((category: CategoryItem) => {
            const isActive = activeRoute === category.link;
            return (
              <li key={category.name}>
                <a
                  className={`flex items-center rounded-[var(--radius-md)] px-[var(--spacing-3)] py-[var(--spacing-2)] font-[var(--font-weight-medium)] text-[var(--font-size-sm)] transition-colors ${
                    isActive
                      ? "bg-[var(--color-background-disabled)]/80 text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background-disabled)]/50"
                  }`}
                  href={category.link}
                >
                  <img
                    alt=""
                    className="mr-[var(--spacing-md)] h-[var(--spacing-6)] w-[var(--spacing-6)] rounded-[var(--radius-md)]"
                    height={24}
                    src={category.iconUrl}
                    width={24}
                  />
                  <span>{category.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </aside>
);

export default Sidebar;
