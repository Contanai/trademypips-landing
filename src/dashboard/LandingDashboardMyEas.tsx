import { Link } from "react-router-dom";

const CHART_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDMZND_jLdqdyJIgteFJ_b_rTQXrvsBdlqKJZkVQK-aQrn3tmAbmekNqfGLD9QcMYtums2WvofhJeVMgVPrs3wkg4P2SxaIOqSRXyzRXroVUfNCm32RQscLagHLbsZ8HNR_UMdAfNeakqf4zw_H8pe2UoIt_vIrX_n-i6f28JmBCen17fTzrCw5lcpNv7RvDqYg3-D6ugs9D6rrjh-qW-cR9zY_NMPdicY4c85lZtOf2R3Xcl2hPV7vgRoSueShpkACjpxIK9qO3Ag";

const ACTIVITY_ROWS = [
  { time: "14:02:45", ea: "Zenbot Zero", action: "POSITION OPENED", actionClass: "bg-primary-container/10 text-primary", pair: "XAUUSD", lot: "0.50", pnl: "PENDING", pnlClass: "text-slate-400" },
  { time: "13:58:12", ea: "Zenbot Nexus", action: "TAKE PROFIT", actionClass: "bg-primary-container/10 text-primary", pair: "EURUSD", lot: "1.25", pnl: "+$452.10", pnlClass: "text-primary" },
  { time: "13:45:00", ea: "Zenbot Zero", action: "STOP LOSS", actionClass: "bg-error-container/10 text-error", pair: "GBPUSD", lot: "0.75", pnl: "-$120.30", pnlClass: "text-error" },
  { time: "13:20:55", ea: "Zenbot Nexus", action: "TAKE PROFIT", actionClass: "bg-primary-container/10 text-primary", pair: "USDJPY", lot: "2.00", pnl: "+$890.00", pnlClass: "text-primary" },
] as const;

export function LandingDashboardMyEas() {
  return (
    <div className="relative pb-xl">
      <div className="pointer-events-none absolute -right-[400px] -top-[400px] h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[600px] w-[600px] rounded-full bg-tertiary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] space-y-8 px-0 py-2 md:py-4">
        <div className="flex flex-col gap-6 border-b border-white/5 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="font-h2 text-h2 text-white md:text-h3">Expert Advisors</h1>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Manage and monitor your live trading bots</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-surface-container-low px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-bold text-slate-300">SERVER STATUS: OPTIMAL</span>
            </div>
            <Link
              to="/dashboard/ea-library"
              className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#16adf8] to-[#05d7ff] px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(22,173,248,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              Deploy New EA
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="dashboard-glass-card group relative overflow-hidden rounded-3xl border-t-2 border-t-primary/20 p-6">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zenbot Zero</h3>
                  <p className="text-xs font-bold text-primary">ACTIVE &amp; RUNNING</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-tighter text-slate-500">Running Time</div>
                <div className="font-mono text-sm text-white">124:12:08</div>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
                <div className="text-[10px] uppercase text-slate-400">Risk Mode</div>
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  Conservative
                  <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
                <div className="text-[10px] uppercase text-slate-400">VPS Location</div>
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">cloud</span>
                  London-01
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/5 bg-surface-container-high py-3 transition-all hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-sm group-hover/btn:text-yellow-400">pause</span>
                <span className="text-xs font-bold uppercase tracking-wider">Pause</span>
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-error/20 bg-error-container/20 py-3 text-error transition-all hover:bg-error-container/40"
              >
                <span className="material-symbols-outlined text-sm">stop</span>
                <span className="text-xs font-bold uppercase tracking-wider">Stop</span>
              </button>
              <button type="button" className="rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-sm">refresh</span>
              </button>
            </div>
          </div>

          <div className="dashboard-glass-card group relative overflow-hidden rounded-3xl border-t-2 border-t-tertiary/20 p-6">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-tertiary/20 bg-tertiary/10">
                  <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hub
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zenbot Nexus</h3>
                  <p className="text-xs font-bold text-tertiary">OPTIMIZING</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-tighter text-slate-500">Running Time</div>
                <div className="font-mono text-sm text-white">48:05:12</div>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
                <div className="text-[10px] uppercase text-slate-400">Risk Mode</div>
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  Aggressive
                  <span className="material-symbols-outlined text-[14px] text-error">warning</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
                <div className="text-[10px] uppercase text-slate-400">VPS Location</div>
                <div className="flex items-center gap-1 text-sm font-bold text-white">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">cloud</span>
                  NYC-04
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/5 bg-surface-container-high py-3 transition-all hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-sm group-hover/btn:text-yellow-400">pause</span>
                <span className="text-xs font-bold uppercase tracking-wider">Pause</span>
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-error/20 bg-error-container/20 py-3 text-error transition-all hover:bg-error-container/40"
              >
                <span className="material-symbols-outlined text-sm">stop</span>
                <span className="text-xs font-bold uppercase tracking-wider">Stop</span>
              </button>
              <button type="button" className="rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-sm">refresh</span>
              </button>
            </div>
          </div>

          <div className="dashboard-glass-card flex flex-col justify-between rounded-3xl p-6 md:col-span-2 xl:col-span-1">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Total Fleet Analytics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Total Open P/L</span>
                  <span className="font-bold text-primary">+$1,240.45</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[75%] bg-primary shadow-[0_0_10px_#16adf8]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Win Rate (Global)</span>
                  <span className="font-bold text-white">68.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Daily Goal</span>
                  <span className="font-bold text-white">$1,500.00</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-2xl border border-white/10 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/5"
            >
              View Detailed Fleet Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="dashboard-glass-card rounded-[32px] p-8">
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Performance Matrix</h3>
                  <p className="text-sm text-slate-500">Live P/L tracking across all active EAs</p>
                </div>
                <div className="flex rounded-xl bg-surface-container-low p-1">
                  <button type="button" className="rounded-lg bg-primary-container px-4 py-2 text-xs font-bold text-black transition-all">
                    24H
                  </button>
                  <button type="button" className="rounded-lg px-4 py-2 text-xs font-bold text-slate-400 transition-all hover:text-white">
                    1W
                  </button>
                  <button type="button" className="rounded-lg px-4 py-2 text-xs font-bold text-slate-400 transition-all hover:text-white">
                    1M
                  </button>
                </div>
              </div>
              <div className="relative mb-4 h-64 w-full">
                <img alt="" className="h-full w-full rounded-2xl object-cover opacity-40 grayscale" src={CHART_IMG} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
                  <path
                    d="M0 180 Q 100 150 200 170 T 400 120 T 600 100 T 800 80 T 1000 40"
                    fill="none"
                    stroke="#16adf8"
                    strokeWidth="3"
                    className="drop-shadow-[0_0_12px_rgba(22,173,248,0.6)]"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6 sm:grid-cols-4">
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-slate-500">Open Trades</div>
                  <div className="text-xl font-bold text-white">12</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-slate-500">Trades Today</div>
                  <div className="text-xl font-bold text-white">48</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-slate-500">Avg Win Rate</div>
                  <div className="text-xl font-bold text-primary">72%</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-slate-500">Max Drawdown</div>
                  <div className="text-xl font-bold text-error">2.4%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-glass-card flex flex-col rounded-[32px] p-6 lg:col-span-4">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Connected MT5</h4>
              <button type="button" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                Add Account
              </button>
            </div>
            <div className="flex-1 space-y-4">
              <div className="cursor-pointer rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-primary/20">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                      <span className="text-[10px] font-black text-blue-400">MT5</span>
                    </div>
                    <span className="text-sm font-bold">FTMO Challenge #1</span>
                  </div>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-xs text-slate-400">Acc: 10428945</div>
                  <div className="text-sm font-bold text-white">$10,420.50</div>
                </div>
              </div>
              <div className="cursor-pointer rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-primary/20">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                      <span className="text-[10px] font-black text-purple-400">MT5</span>
                    </div>
                    <span className="text-sm font-bold">Personal Fund - Scalp</span>
                  </div>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-xs text-slate-400">Acc: 77812903</div>
                  <div className="text-sm font-bold text-white">$5,102.80</div>
                </div>
              </div>
              <div className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 opacity-60 grayscale transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-500/20">
                      <span className="text-[10px] font-black text-slate-400">MT5</span>
                    </div>
                    <span className="text-sm font-bold">Old Archive</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-slate-500" />
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-xs text-slate-400">DISCONNECTED</div>
                  <div className="text-sm font-bold text-white">$0.00</div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">info</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Trading Tip</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                Market volatility is expected to spike during the US session open. Consider switching Zenbot Nexus to &apos;Defensive&apos; mode.
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-glass-card overflow-hidden rounded-[32px]">
          <div className="flex flex-col justify-between gap-4 border-b border-white/5 px-8 py-6 lg:flex-row lg:items-center">
            <h3 className="text-xl font-bold text-white">Live Activity Stream</h3>
            <div className="flex flex-wrap gap-4">
              <div className="relative w-full min-w-0 sm:w-64">
                <input
                  className="w-full rounded-xl border border-white/10 bg-surface-container-low py-2 pl-4 pr-10 text-xs transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Filter activities..."
                  type="search"
                  aria-label="Filter activities"
                />
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-2.5 text-sm text-slate-500">search</span>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-surface-container-high px-4 py-2 text-xs font-bold transition-all hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Sort
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-slate-500">
                  <th className="px-8 py-5">Time</th>
                  <th className="px-8 py-5">EA Instance</th>
                  <th className="px-8 py-5">Action</th>
                  <th className="px-8 py-5">Pair</th>
                  <th className="px-8 py-5">Lot Size</th>
                  <th className="px-8 py-5 text-right">Profit/Loss</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {ACTIVITY_ROWS.map((row) => (
                  <tr key={`${row.time}-${row.pair}`} className="group border-b border-white/5 transition-all hover:bg-white/5">
                    <td className="px-8 py-5 text-slate-400">{row.time}</td>
                    <td className="px-8 py-5 text-white">{row.ea}</td>
                    <td className="px-8 py-5">
                      <span className={`rounded-md px-2 py-1 text-[10px] font-bold ${row.actionClass}`}>{row.action}</span>
                    </td>
                    <td className="px-8 py-5">{row.pair}</td>
                    <td className="px-8 py-5">{row.lot}</td>
                    <td className={`px-8 py-5 text-right ${row.pnlClass}`}>{row.pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-white/5 p-6 text-center">
            <button type="button" className="text-xs font-bold uppercase tracking-widest text-slate-400 transition-all hover:text-white">
              Show 25 More Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
