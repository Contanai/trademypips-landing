import { KineticGlow } from "@/landing/KineticGlow";

const STRATEGY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAX_mahcOOo8qIltW028R6Eec407mftm--qahGeFKBUJTjh8EhZ8a0beWLn2teyzOWi_l36Jm-RP5FRAnF5WX7sCWJxqrdrCn43oFyVwf8bdeLacXvRQ8YSVBj-rhZ08WNsJsSRFEzb5PVp-NbOfpDTF-YRwPHEw3qLQK5U0tB9kqVXQHl3TWHWnUYDEHrp9EnKQJEk9lx6m-bbgPveE_KEzO7Ulw5ADbMlt5W0AAav7u_rwOnyCOmhbiHcHmMoqqkdnqdpmVHdB9Y";

const LOCKED = [
  { name: "Scalp_Master_V3.ea" },
  { name: "Trend_Reaper_Pro.ea" },
  { name: "Gold_Bullion_AI.ea" },
];

export function LandingStrategy() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low px-6 py-xxl">
      <KineticGlow className="-bottom-[500px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 bg-secondary/10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-h2 text-h2 text-white">
              See How Our <br />
              <span className="text-primary">Strategy Works</span>
            </h2>
            <p className="mb-12 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              We don&apos;t hide behind &quot;black boxes&quot;. Our algorithms use mean reversion and momentum
              indicators filtered by AI sentiment analysis for high-probability setups.
            </p>
            <div className="group relative aspect-video overflow-hidden rounded-3xl border-primary/30 glow-blue glass-card">
              <img alt="Strategy demo" className="h-full w-full object-cover opacity-60" src={STRATEGY_IMG} />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-background/40 transition-all group-hover:bg-background/20">
                <span className="material-symbols-outlined text-7xl text-white drop-shadow-[0_0_15px_rgba(22,173,248,0.8)]">
                  play_circle
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative h-full overflow-hidden rounded-3xl border-primary/20 p-lg backdrop-blur-3xl glass-card">
              <div className="mb-10 flex items-center justify-between border-b border-primary/10 pb-6">
                <h3 className="font-h3 text-2xl text-white">Elite Strategy Library</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    lock
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {LOCKED.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-background/40 p-5 opacity-40 blur-[3px] grayscale transition-all hover:opacity-100 hover:blur-none hover:grayscale-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium text-white">{row.name}</span>
                    </div>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      LOCKED
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-14 text-center">
                <button
                  type="button"
                  className="rounded-full bg-white px-10 py-4 font-black text-background shadow-xl transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(22,173,248,0.25)]"
                >
                  Unlock All Strategies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
