import { Link } from "react-router-dom";

const LOGO = `${import.meta.env.BASE_URL}trademypip_logo.png`;

export default function WaitlistPage() {
  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background font-body-md text-on-surface">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link className="flex items-center gap-3" to="/">
            <img alt="TradeMyPips Logo" className="h-10 w-auto object-contain" src={LOGO} />
          </Link>
          <Link
            className="rounded-full border border-primary/30 px-5 py-2 text-sm font-label-caps text-white/90 transition-colors hover:bg-primary/20"
            to="/"
          >
            Back To Landing
          </Link>
        </div>
      </header>

      <main className="bg-mesh">
        <section className="relative overflow-hidden px-6 pb-24 pt-28">
          <div className="absolute left-1/2 top-1/4 -z-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 px-4 py-2 glass-card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="font-label-caps text-secondary">NOW ACCEPTING EARLY ACCESS APPLICATIONS</span>
            </div>

            <h1 className="mb-8 font-h1 text-h2 leading-tight text-white md:text-h1">
              The Future of MT5 Automation is{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Almost Here.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-body-lg text-on-surface-variant">
              Be the first to access our high-performance EAs. Limited early-access slots available for traders who
              demand precision execution and institutional-grade analytics.
            </p>

            <div className="mx-auto mb-10 grid max-w-md grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/5 p-6 glass-card">
                <div className="font-h2 text-4xl font-bold text-white">14</div>
                <div className="mt-1 font-label-caps text-white/50">DAYS</div>
              </div>
              <div className="rounded-2xl border border-white/5 p-6 glass-card">
                <div className="font-h2 text-4xl font-bold text-white">08</div>
                <div className="mt-1 font-label-caps text-white/50">HOURS</div>
              </div>
              <div className="rounded-2xl border border-white/5 p-6 glass-card">
                <div className="font-h2 text-4xl font-bold text-white">45</div>
                <div className="mt-1 font-label-caps text-white/50">MINUTES</div>
              </div>
            </div>

            <div className="mx-auto max-w-xl rounded-full border border-white/10 p-2 shadow-2xl glass-card">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  className="flex-grow bg-transparent px-6 py-4 text-white placeholder:text-white/45 focus:outline-none"
                  placeholder="Enter your trading email"
                  required
                  type="email"
                />
                <button
                  className="whitespace-nowrap rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:brightness-110 active:scale-95"
                  type="submit"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-primary/30 glass-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <h3 className="mb-2 font-h3 text-h3 text-white">Automated Execution</h3>
              <p className="text-on-surface-variant">
                Sub-millisecond trade execution powered by our custom-built low-latency MT5 bridge.
              </p>
            </article>
            <article className="rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-secondary/30 glass-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20">
                <span className="material-symbols-outlined text-secondary">shield_lock</span>
              </div>
              <h3 className="mb-2 font-h3 text-h3 text-white">Secure Bridge</h3>
              <p className="text-on-surface-variant">
                Enterprise-grade encryption protects your API keys and trading signals at all times.
              </p>
            </article>
            <article className="rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-tertiary/30 glass-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/20">
                <span className="material-symbols-outlined text-tertiary">analytics</span>
              </div>
              <h3 className="mb-2 font-h3 text-h3 text-white">Performance Analytics</h3>
              <p className="text-on-surface-variant">
                Deep-dive metrics including Sharpe ratio, drawdown heatmaps, and expected value tracking.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[40px] border border-white/5 glass-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative grid grid-cols-1 items-center lg:grid-cols-2">
              <div className="space-y-8 p-12 lg:p-20">
                <h2 className="font-h2 text-h2 text-white">Institutional Grade Tech at Your Fingertips</h2>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Fully customizable risk management parameters
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Multi-asset support (Forex, Crypto, Indices)
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Real-time cloud sync across all devices
                  </li>
                </ul>
                <button className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/5">
                  Explore Platform Documentation
                </button>
              </div>
              <div className="relative flex h-[400px] items-center justify-center bg-surface-container-lowest p-6 lg:h-full">
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-[#00182a] to-[#000b14] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-label-caps tracking-widest text-primary/80">EQUITY CURVE</p>
                    <p className="text-sm font-bold text-secondary">+248.6% YTD</p>
                  </div>
                  <div className="relative h-[78%] w-full rounded-xl bg-background/45 p-3">
                    <svg className="h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="returnsLine" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#16adf8" />
                          <stop offset="100%" stopColor="#05d7ff" />
                        </linearGradient>
                        <linearGradient id="returnsFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(22,173,248,0.35)" />
                          <stop offset="100%" stopColor="rgba(22,173,248,0.02)" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.12)" strokeDasharray="2 2" />
                      <line x1="0" y1="38" x2="100" y2="38" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                      <line x1="0" y1="26" x2="100" y2="26" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                      <line x1="0" y1="14" x2="100" y2="14" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                      <path
                        d="M0,52 L7,49 L14,50 L21,45 L28,43 L35,41 L42,36 L49,34 L56,29 L63,25 L70,21 L77,18 L84,14 L91,11 L100,8 L100,60 L0,60 Z"
                        fill="url(#returnsFill)"
                      />
                      <path
                        d="M0,52 L7,49 L14,50 L21,45 L28,43 L35,41 L42,36 L49,34 L56,29 L63,25 L70,21 L77,18 L84,14 L91,11 L100,8"
                        fill="none"
                        stroke="url(#returnsLine)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] text-white/45">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-10 top-10 rounded-xl border border-white/10 p-4 glass-card">
                  <div className="font-h3 font-bold text-secondary">+14.2%</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Avg Monthly Alpha</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
