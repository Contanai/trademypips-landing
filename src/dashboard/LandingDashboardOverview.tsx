import { Link } from "react-router-dom";

const CHART_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAp9ygc5iXyA3BhIJQ1lCoTy_l6WpVcOuxkwDnnom1fCZXKixZie7IuNxS0dH0ouUJhilB_Nt2yv0PNCKMd5aF5f2VbMPtYfuafJ8Ptbf4kCJm6kr0bodsuldDNN5K1_p8nLUkzsyZ0Qno4Z7cE1-G6Y1_bHIMv5jbywN-WMhJFhZHJRHuUaU_7YhlLNCFf1RBA0HBbTWfLVEx0kCxyyv9hNDPHQmPxPdaS1qxQvwOn0Vr9NMBjVT_ZZl8z2OlFLlvFwDaFsTNy3ME";

const VIDEO_OPEN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5FDnOEyd51s8jiAbrCRX_plDthswnvwZirQF2ir4rvsQgxGzBJ_iIpAfgyC4lTOKDQ3LqpXqPaBHs5YpYKgZU6jqQaJiiCxNSyszcIIwL98409w36dRByXm-F66EtwXMIwzKju4tSI9eEsfO5WsVQ7hG3Mj-u2UPFBYj5MibarQxu8mISq0wrl0rkULfw6IPloDh-ObsQL5v4OuUtKSKdOf9VVepz_cUTz0V7p83dq12eeQChebaDaK5RPgpAvbnM0XTqNNFh8ws";

const VIDEO_LOCKED =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQJB1l5FAURN6OL_BrCmbHuzxnR0Xw7zfmUkTK51CbbVXRmtvrAh2g_zmSoz04vL2dQwZyPiWP0qXEK-UBbtT8YjZZxrzOWvGU7sqlFAw8FdURYY1b9p8hdiKSl-Rw0xOpqJN_jh0Z0u26DcRWjYXXCnz9bdTuByv9duTWR7sEJudK6zCukyqYsVmKQ_gzW0BuQtmxT5cwagzF3aO6YeXi7bXulDScUEdmy_uYFYxVUOqH6_HRnThpPNayDka26VwOgZIJ3dIQ7v4";

export function LandingDashboardOverview() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 -translate-x-1/2 bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[500px] w-[500px] translate-x-1/2 bg-tertiary/5 blur-[150px]" />

      <section className="mx-auto max-w-7xl px-6 pb-xxl pt-8 md:pt-12">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h1 className="mb-2 font-h1 text-h1 tracking-tight">
              Welcome back, <span className="text-primary">Alex</span>
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              Manage your Expert Advisors and automate your MT5 trading with institutional precision.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-surface-container-low px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-label-caps text-xs text-primary">LIVE MARKET FEED</span>
            </div>
          </div>
        </div>

        <div className="mb-xl grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          <div className="dashboard-glass-card group relative flex flex-col gap-2 overflow-hidden rounded-xl p-6">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-4xl">smart_toy</span>
            </div>
            <span className="font-label-caps text-xs text-on-surface-variant">ACTIVE EAS</span>
            <span className="font-h3 text-h3">04</span>
            <span className="text-xs font-medium text-primary">+1 this week</span>
          </div>
          <div className="dashboard-glass-card group relative flex flex-col gap-2 overflow-hidden rounded-xl p-6">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
            </div>
            <span className="font-label-caps text-xs text-on-surface-variant">CONNECTED ACCOUNTS</span>
            <span className="font-h3 text-h3">12</span>
            <span className="text-xs font-medium text-on-surface-variant">98% connection health</span>
          </div>
          <div className="dashboard-glass-card group relative flex flex-col gap-2 overflow-hidden rounded-xl p-6">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
            <span className="font-label-caps text-xs text-on-surface-variant">CURRENT PLAN</span>
            <span className="font-h3 text-h3 text-secondary">PRO</span>
            <span className="text-xs font-medium text-on-surface-variant">Renews in 14 days</span>
          </div>
          <div className="dashboard-glass-card group relative flex flex-col gap-2 overflow-hidden rounded-xl p-6">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-4xl">monitoring</span>
            </div>
            <span className="font-label-caps text-xs text-on-surface-variant">TRADING ACTIVITY</span>
            <span className="font-h3 text-h3 text-primary">+12.4%</span>
            <span className="text-xs font-medium text-primary">Last 30 days profit</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="flex flex-col gap-gutter lg:col-span-8">
            <div className="dashboard-glass-card overflow-hidden rounded-xl border-primary/20">
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">robot_2</span>
                  <h3 className="font-h3 text-lg font-bold">Zennbot Echo Premium</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-error-container px-4 py-2 text-xs font-bold text-error transition-all hover:opacity-80"
                  >
                    <span className="material-symbols-outlined text-sm">pause</span> PAUSE ALL
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-xs font-bold text-on-primary-container transition-all hover:opacity-80"
                  >
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>{" "}
                    RESUME
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] p-8">
                <img alt="" className="h-full w-full rounded-lg object-cover opacity-40 mix-blend-screen" src={CHART_IMG} />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div>
                      <p className="mb-1 font-label-caps text-xs text-on-surface-variant">EQUITY GROWTH</p>
                      <p className="text-2xl font-bold text-primary">$48,291.54</p>
                    </div>
                    <div>
                      <p className="mb-1 font-label-caps text-xs text-on-surface-variant">MAX DRAWDOWN</p>
                      <p className="text-2xl font-bold text-white">4.23%</p>
                    </div>
                    <div>
                      <p className="mb-1 font-label-caps text-xs text-on-surface-variant">WIN RATE</p>
                      <p className="text-2xl font-bold text-secondary">68.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-glass-card rounded-xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-h3 text-xl font-bold">Strategy Masterclass</h3>
                <Link to="/dashboard/tutorials" className="font-label-caps text-xs text-primary hover:underline">
                  VIEW ALL VIDEOS
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="group relative h-48 cursor-pointer overflow-hidden rounded-xl">
                  <img
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={VIDEO_OPEN}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/20 backdrop-blur-md transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-bold text-white">Advanced Risk Management</p>
                    <p className="text-xs text-white/60">12:45 • Masterclass</p>
                  </div>
                </div>
                <div className="group relative h-48 cursor-not-allowed overflow-hidden rounded-xl border border-white/5">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80">
                    <span className="material-symbols-outlined mb-2 text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>
                      lock
                    </span>
                    <p className="font-label-caps text-xs text-on-surface-variant">ELITE PLAN ONLY</p>
                  </div>
                  <img alt="" className="h-full w-full object-cover opacity-30 grayscale" src={VIDEO_LOCKED} />
                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-sm font-bold text-white/40">Scalping vs Trend Following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-gutter lg:col-span-4">
            <div className="dashboard-glass-card rounded-xl p-6">
              <h4 className="mb-4 font-label-caps text-xs text-on-surface-variant">ACCOUNT HEALTH</h4>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Server Latency</span>
                    <span className="text-primary">12ms (Excellent)</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[92%] bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>VPS Resource Usage</span>
                    <span className="text-secondary">42%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[42%] bg-secondary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>API Connection</span>
                    <span className="text-error">98.2%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[98%] bg-error" />
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-glass-card rounded-xl border-primary/20 bg-primary/5 p-6">
              <h4 className="mb-4 font-label-caps text-xs text-primary">BILLING SUMMARY</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Pro Monthly Plan</p>
                    <p className="text-[10px] text-on-surface-variant">Billing cycle ends Nov 12, 2024</p>
                  </div>
                  <span className="text-lg font-bold">$149.00</span>
                </div>
                <button
                  type="button"
                  className="w-full rounded bg-primary py-2 text-xs font-bold text-black transition-all hover:opacity-90"
                >
                  MANAGE SUBSCRIPTION
                </button>
              </div>
            </div>

            <div className="dashboard-glass-card flex grow flex-col rounded-xl p-6 lg:min-h-0">
              <h4 className="mb-4 font-label-caps text-xs text-on-surface-variant">NOTIFICATIONS</h4>
              <div className="space-y-4">
                <div className="flex gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Zennbot Nexus Active</p>
                    <p className="text-[10px] text-on-surface-variant">Connected to account #92812 successfully.</p>
                  </div>
                </div>
                <div className="flex gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                    <span className="material-symbols-outlined text-sm text-secondary">trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Profit Target Reached</p>
                    <p className="text-[10px] text-on-surface-variant">Daily goal of +2.0% achieved on EURUSD.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/20">
                    <span className="material-symbols-outlined text-sm text-tertiary">update</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">System Update</p>
                    <p className="text-[10px] text-on-surface-variant">V2.4.0 rollout scheduled for tonight 00:00 UTC.</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded border border-white/10 py-2 text-xs font-medium text-on-surface-variant transition-all hover:bg-white/5"
              >
                VIEW ALL ACTIVITY
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
