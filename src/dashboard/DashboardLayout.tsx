import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXGZRzniLaRegqFZBtmcL0c6fEbBq98sUyXlBx-XIIDTMCsEW5j5DCY93-m3_TJDq6NcYW0p0T-bUJtdQlPucs0L-KSH6foQLhqujAZFfPZ7ZABBp1pelYYMdkQRM7-LtTC33D0P5JjIMkYOwGl5w86o5Uc8VhOV6mMNoMJ5WnqAW4vJY2kx9pwgZ_MwoftDGxHA9fQYFEIi-wgxzDVLFfRzJf9vv5auHP_S14gQuqw-wI1cnEGBFvJP2GMCY6hHQ4a78IhWylP_g";

const LOGO = `${import.meta.env.BASE_URL}trademypip_logo.png`;
const LOGO_ICON = `${import.meta.env.BASE_URL}trademypip_logo_icon.png`;

function sidebarNavClass(isActive: boolean) {
  return [
    "mx-1 flex w-[calc(100%-0.5rem)] items-center justify-center gap-md rounded-lg py-2.5 transition-colors duration-200 lg:mx-0 lg:w-full lg:justify-start lg:rounded-none lg:px-md lg:py-sm",
    isActive
      ? "bg-secondary-container/15 text-secondary-container lg:border-r-2 lg:border-secondary-container lg:bg-secondary-container/10"
      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
  ].join(" ");
}

function dashboardPageTitle(pathname: string): string {
  if (pathname.includes("/tutorials")) return "Tutorials";
  if (pathname.includes("/ea-library")) return "EA Library";
  if (pathname.includes("/my-eas")) return "My EAs";
  if (pathname.includes("/billing")) return "Billing";
  if (pathname.includes("/settings")) return "Settings";
  return "Overview";
}

export function DashboardLayout() {
  const { pathname } = useLocation();
  const title = dashboardPageTitle(pathname);
  const isTutorials = pathname.includes("/tutorials");
  const isEaLibrary = pathname.includes("/ea-library");
  const isMyEas = pathname.includes("/my-eas");
  const isBilling = pathname.includes("/billing");
  const isSettings = pathname.includes("/settings");

  return (
    <div className="dark min-h-screen overflow-x-hidden bg-black font-body-md text-body-md text-on-surface">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="dashboard-bg-glow-purple absolute inset-0" />
        <div className="dashboard-bg-glow-cyan absolute inset-0" />
      </div>

      <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col border-r border-outline-variant bg-surface py-md dark:bg-surface-dim lg:w-64 lg:py-xl">
        <div className="mb-md flex flex-col items-center px-1 lg:mb-xl lg:items-stretch lg:px-md">
          <Link to="/" className="flex justify-center lg:justify-start" aria-label="TradeMyPips home">
            <img
              alt="TradeMyPips"
              className="block h-9 w-9 shrink-0 object-contain lg:hidden"
              src={LOGO_ICON}
            />
            <img
              alt="TradeMyPips"
              className="hidden h-10 w-auto max-w-[calc(100%-0.5rem)] shrink-0 object-contain lg:block"
              src={LOGO}
            />
          </Link>
          <div className="mt-2 hidden items-center gap-xs lg:mt-xs lg:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
            <p className="text-[12px] uppercase tracking-widest text-on-surface-variant">Connection: Live</p>
          </div>
          <div className="mt-2 flex justify-center lg:hidden" title="Connection live">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container shadow-[0_0_8px_rgba(0,213,253,0.6)]" />
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden">
          <NavLink to="/dashboard" end title="Overview" aria-label="Overview" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">dashboard</span>
            <span className="hidden truncate lg:inline">Overview</span>
          </NavLink>

          <NavLink to="/dashboard/ea-library" title="EA Library" aria-label="EA Library" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">auto_stories</span>
            <span className="hidden truncate lg:inline">EA Library</span>
          </NavLink>

          <NavLink to="/dashboard/my-eas" title="My EAs" aria-label="My EAs" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">smart_toy</span>
            <span className="hidden truncate lg:inline">My EAs</span>
          </NavLink>

          <NavLink to="/dashboard/tutorials" title="Tutorials" aria-label="Tutorials" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">school</span>
            <span className="hidden truncate lg:inline">Tutorials</span>
          </NavLink>

          <NavLink to="/dashboard/billing" title="Billing" aria-label="Billing" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">payments</span>
            <span className="hidden truncate lg:inline">Billing</span>
          </NavLink>

          <NavLink to="/dashboard/settings" title="Settings" aria-label="Settings" className={({ isActive }) => sidebarNavClass(isActive)}>
            <span className="material-symbols-outlined shrink-0">settings</span>
            <span className="hidden truncate lg:inline">Settings</span>
          </NavLink>
        </nav>

        <div className="mt-auto px-1 lg:px-md">
          <Link
            to="/"
            title="Sign out"
            aria-label="Sign out"
            className="mx-1 mb-4 flex w-[calc(100%-0.5rem)] items-center justify-center gap-md rounded-lg py-2.5 text-on-surface-variant transition-colors hover:bg-error/5 hover:text-error lg:mx-0 lg:mb-xl lg:w-full lg:justify-start lg:rounded-none lg:px-md lg:py-sm"
          >
            <span className="material-symbols-outlined shrink-0">logout</span>
            <span className="hidden lg:inline">Sign Out</span>
          </Link>
        </div>
      </aside>

      <header className="fixed left-16 right-0 top-0 z-40 flex h-20 items-center justify-between border-b border-outline-variant bg-background/80 px-4 backdrop-blur-xl dark:bg-background/80 sm:px-gutter lg:left-64">
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-xl">
          <h2 className="truncate font-h3 text-xl font-bold text-on-surface lg:text-h3">{title}</h2>
          {isTutorials || isBilling || isSettings ? (
            <nav className="hidden items-center gap-gutter md:flex">
              <a className="font-body-lg text-on-surface-variant transition-all hover:text-primary" href="#market">
                Market Data
              </a>
              <a className="font-body-lg text-on-surface-variant transition-all hover:text-primary" href="#calendar">
                Economic Calendar
              </a>
            </nav>
          ) : isEaLibrary ? (
            <nav className="hidden items-center gap-gutter md:flex">
              <Link className="font-label-caps text-sm tracking-wide text-primary" to="/dashboard/ea-library">
                Library
              </Link>
              <a className="font-label-caps text-sm tracking-wide text-on-surface-variant transition-colors hover:text-on-surface" href="#live" onClick={(e) => e.preventDefault()}>
                Live Results
              </a>
              <Link className="font-label-caps text-sm tracking-wide text-on-surface-variant transition-colors hover:text-on-surface" to="/dashboard/tutorials">
                Tutorials
              </Link>
            </nav>
          ) : isMyEas ? (
            <nav className="hidden items-center gap-gutter md:flex">
              <Link className="font-label-caps text-sm tracking-wide text-primary" to="/dashboard/my-eas">
                Fleet
              </Link>
              <a className="font-label-caps text-sm tracking-wide text-on-surface-variant transition-colors hover:text-on-surface" href="#performance" onClick={(e) => e.preventDefault()}>
                Performance
              </a>
              <Link className="font-label-caps text-sm tracking-wide text-on-surface-variant transition-colors hover:text-on-surface" to="/dashboard/ea-library">
                Browse Library
              </Link>
            </nav>
          ) : (
            <nav className="hidden items-center gap-gutter md:flex">
              <Link className="font-body-lg text-on-surface-variant transition-all hover:text-primary" to="/#features">
                Features
              </Link>
              <Link className="font-body-lg text-on-surface-variant transition-all hover:text-primary" to="/#pricing">
                Pricing
              </Link>
              <Link className="font-body-lg text-on-surface-variant transition-all hover:text-primary" to="/#faq">
                FAQ
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-lg">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-64 rounded-full border border-outline-variant bg-surface-container-low py-2 pl-10 pr-4 text-body-md outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder={
                isTutorials
                  ? "Search tutorials..."
                  : isEaLibrary
                    ? "Search strategies, pairs..."
                    : isMyEas
                      ? "Search EAs, accounts..."
                      : isBilling
                        ? "Search invoices, plans..."
                        : isSettings
                          ? "Search settings..."
                          : "Search dashboard..."
              }
              type="search"
              aria-label="Search"
            />
          </div>
          <button type="button" className="material-symbols-outlined text-on-surface-variant transition-colors hover:text-on-surface">
            notifications
          </button>
          <button type="button" className="material-symbols-outlined text-on-surface-variant transition-colors hover:text-on-surface">
            dark_mode
          </button>
          <div className="h-10 w-10 rounded-full border border-primary p-0.5">
            <img alt="" className="h-full w-full rounded-full object-cover" src={AVATAR} />
          </div>
        </div>
      </header>

      <main className="relative z-10 ml-16 min-h-screen px-4 pt-20 sm:px-gutter lg:ml-64">
        <Outlet />
      </main>

      <footer className="relative z-10 ml-16 border-t border-outline-variant bg-surface-container-lowest px-4 py-xl sm:px-gutter lg:ml-64">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-xl text-sm text-on-surface-variant md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-md md:justify-start">
            <span className="font-bold text-on-surface">TradeMyPips</span>
            <span>© 2026 TradeMyPips Academy. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-xl">
            <a className="transition-colors hover:text-primary" href="#privacy">
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-primary" href="#terms">
              Terms of Service
            </a>
            <a className="transition-colors hover:text-primary" href="#compliance">
              Compliance
            </a>
          </div>
          <div className="flex gap-md">
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high transition-all hover:bg-primary hover:text-on-primary"
              href="#social"
              aria-label="Web"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high transition-all hover:bg-primary hover:text-on-primary"
              href="#videos"
              aria-label="Video library"
            >
              <span className="material-symbols-outlined text-[18px]">video_library</span>
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high transition-all hover:bg-primary hover:text-on-primary"
              href="#community"
              aria-label="Community"
            >
              <span className="material-symbols-outlined text-[18px]">group</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
