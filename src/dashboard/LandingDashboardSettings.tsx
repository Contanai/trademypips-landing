import { Link } from "react-router-dom";

const PROMO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAwNyEWMHifJWRkxDvb_4oXa_HgLT884kB__JtO3sVvDUztilKJ3yHi9TE1Rjr2rnl4vRUL5d6KXZAIJPBFpVA2grKa3zea5-vMIxG_ZU9lKvhDPcapXKF2hxbYA3wBKQcsX0sh5zjXs4mQWVebb7GE9bN6WNbDfR2k7EIqS1EeqiyPqfnJKlDqflcfXdV2r6FnGxHCWx9e0KSXCa9jzBOgGdvXrllj6BQOmyMoU0WYs4vO1izwXAQK5WMJAqR_E1Hlso5y-3PRtv4";

export function LandingDashboardSettings() {
  return (
    <div className="relative pb-xxl">
      <div className="pointer-events-none fixed right-0 top-0 -z-10 h-1/2 w-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(22,173,248,0.15)_0%,transparent_70%)] opacity-30" />
      <div className="pointer-events-none fixed bottom-0 left-16 -z-10 h-1/3 w-1/3 bg-[radial-gradient(circle_at_50%_50%,rgba(22,173,248,0.15)_0%,transparent_70%)] opacity-20 hue-rotate-90 lg:left-64" />

      <div className="mx-auto max-w-5xl">
        <div className="scrollbar-hide mb-xl flex items-center gap-xl overflow-x-auto border-b border-outline-variant/30">
          <button
            type="button"
            className="flex items-center gap-sm whitespace-nowrap border-b-2 border-primary pb-md font-bold text-primary"
          >
            <span className="material-symbols-outlined">person</span>
            Profile Details
          </button>
          <button
            type="button"
            className="flex items-center gap-sm whitespace-nowrap pb-md text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <span className="material-symbols-outlined">api</span>
            MT5 API Configuration
          </button>
          <button
            type="button"
            className="flex items-center gap-sm whitespace-nowrap pb-md text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <span className="material-symbols-outlined">notifications_active</span>
            Alert Notifications
          </button>
          <button
            type="button"
            className="flex items-center gap-sm whitespace-nowrap pb-md text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <span className="material-symbols-outlined">security</span>
            Security &amp; 2FA
          </button>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          <section className="col-span-12 space-y-gutter lg:col-span-8">
            <div className="dashboard-glass-card rounded-xl p-xl">
              <div className="mb-xl flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-h3 text-h3">Personal Information</h3>
                  <p className="mt-xs text-on-surface-variant">Update your global profile identity and email preferences.</p>
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-outline-variant bg-surface-container-high px-md py-sm text-sm font-bold transition-all hover:bg-surface-container-highest"
                >
                  Edit All
                </button>
              </div>
              <div className="grid grid-cols-2 gap-gutter">
                <div className="space-y-sm">
                  <label className="block font-label-caps uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input
                    className="w-full rounded-lg border border-outline-variant/30 bg-background px-md py-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    type="text"
                    defaultValue="Max Traders"
                  />
                </div>
                <div className="space-y-sm">
                  <label className="block font-label-caps uppercase tracking-widest text-on-surface-variant">Display Nickname</label>
                  <input
                    className="w-full rounded-lg border border-outline-variant/30 bg-background px-md py-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    type="text"
                    defaultValue="AlphaWolf_FX"
                  />
                </div>
                <div className="col-span-2 space-y-sm">
                  <label className="block font-label-caps uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg border border-outline-variant/30 bg-background px-md py-sm pr-28 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                      type="email"
                      defaultValue="max.traders@zenbot-pro.io"
                    />
                    <span className="absolute right-md top-1/2 flex -translate-y-1/2 items-center gap-xs text-primary">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified
                      </span>
                      <span className="text-xs font-bold">Verified</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-xl flex justify-end">
                <button
                  type="button"
                  className="rounded-lg bg-gradient-to-br from-[#16adf8] to-[#00d5fd] px-xl py-sm font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(22,173,248,0.4)]"
                >
                  Save Changes
                </button>
              </div>
            </div>

            <div className="dashboard-glass-card rounded-xl p-xl">
              <div className="mb-xl flex items-center gap-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/20 text-primary-container">
                  <span className="material-symbols-outlined text-[32px]">lan</span>
                </div>
                <div>
                  <h3 className="font-h3 text-h3">MT5 API Integration</h3>
                  <p className="mt-xs text-on-surface-variant">Connect your algorithmic bots directly to MetaTrader 5.</p>
                </div>
              </div>
              <div className="space-y-lg">
                <div className="flex items-center justify-between rounded-lg border border-outline-variant/20 bg-surface-container-low p-md">
                  <div className="flex items-center gap-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-on-surface/5">
                      <span className="material-symbols-outlined">dns</span>
                    </div>
                    <div>
                      <p className="font-bold">Broker Server</p>
                      <p className="text-xs text-on-surface-variant">ICMarkets-Demo02.metatrader.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-xs text-secondary">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-xs font-bold">CONNECTED</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-md md:grid-cols-3">
                  <div className="space-y-sm">
                    <label className="block font-label-caps uppercase tracking-widest text-on-surface-variant">Account Number</label>
                    <input
                      className="w-full rounded-lg border border-outline-variant/30 bg-background px-md py-sm outline-none focus:border-primary"
                      placeholder="10293847"
                      type="text"
                    />
                  </div>
                  <div className="space-y-sm">
                    <label className="block font-label-caps uppercase tracking-widest text-on-surface-variant">API Key</label>
                    <input
                      className="w-full rounded-lg border border-outline-variant/30 bg-background px-md py-sm outline-none focus:border-primary"
                      type="password"
                      defaultValue="••••••••••••••••"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="button"
                      className="h-[42px] w-full rounded-lg border border-primary font-bold text-primary transition-colors hover:bg-primary/10"
                    >
                      Test Connection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="col-span-12 space-y-gutter lg:col-span-4">
            <div className="dashboard-glass-card relative overflow-hidden rounded-xl p-lg">
              <div className="pointer-events-none absolute right-0 top-0 p-lg opacity-10">
                <span className="material-symbols-outlined text-[80px]">payments</span>
              </div>
              <h4 className="mb-md font-h3 text-[20px]">Subscription</h4>
              <div className="mb-md rounded-lg border border-primary-container/20 bg-primary-container/10 p-md">
                <div className="mb-xs flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Elite Plan</span>
                  <span className="text-xs text-on-surface-variant">Active</span>
                </div>
                <p className="font-h3 font-bold">
                  $99.00<span className="text-sm font-normal text-on-surface-variant">/mo</span>
                </p>
              </div>
              <p className="mb-lg text-xs text-on-surface-variant">
                Next billing date: <span className="text-on-surface">Oct 24, 2023</span>
              </p>
              <Link
                to="/dashboard/billing"
                className="block w-full rounded-lg bg-surface-container-highest py-sm text-center text-sm font-bold transition-all hover:bg-on-surface hover:text-background"
              >
                Manage Billing
              </Link>
            </div>

            <div className="dashboard-glass-card rounded-xl border-l-4 border-error/50 p-lg">
              <div className="mb-md flex items-center gap-sm text-error">
                <span className="material-symbols-outlined">warning</span>
                <h4 className="font-bold">Security Score: 64%</h4>
              </div>
              <p className="mb-lg text-sm leading-relaxed text-on-surface-variant">
                Your account is missing Two-Factor Authentication. Enable it to protect your MT5 credentials.
              </p>
              <ul className="mb-xl space-y-sm">
                <li className="flex items-center gap-sm text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Verified Email
                </li>
                <li className="flex items-center gap-sm text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-outline-variant">cancel</span>
                  SMS 2FA Disabled
                </li>
                <li className="flex items-center gap-sm text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-outline-variant">cancel</span>
                  Authenticator App
                </li>
              </ul>
              <button
                type="button"
                className="w-full rounded-lg border border-error/20 bg-error/10 py-sm text-sm font-bold text-error transition-all hover:bg-error hover:text-on-error"
              >
                Enable 2FA Now
              </button>
            </div>

            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl">
              <img alt="" className="h-full w-full object-cover brightness-50 grayscale transition-transform duration-700 group-hover:scale-110" src={PROMO_IMG} />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background to-transparent p-lg">
                <p className="mb-xs font-label-caps text-[10px] uppercase text-secondary">Available Now</p>
                <h4 className="font-h3 text-[18px] text-white">Trade on the go</h4>
                <p className="mb-sm text-xs text-on-surface-variant">Download our mobile dashboard for real-time EA alerts.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
