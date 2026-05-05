import { KineticGlow } from "@/landing/KineticGlow";

export function LandingBenefits() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low px-6 py-xxl">
      <KineticGlow className="-bottom-[400px] -right-[400px] h-[800px] w-[800px] bg-primary/10" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border-primary/10 p-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 glass-card">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/15 shadow-[0_0_20px_rgba(22,173,248,0.2)] transition-colors group-hover:bg-primary/30">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              precision_manufacturing
            </span>
          </div>
          <h3 className="mb-4 font-h3 text-2xl text-white">Fully Automated</h3>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Set it and forget it. Our EAs handle entries, exits, and risk management 24/5.
          </p>
        </div>
        <div className="group rounded-2xl border-primary/10 p-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 glass-card">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/15 shadow-[0_0_20px_rgba(22,173,248,0.2)] transition-colors group-hover:bg-primary/30">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
          </div>
          <h3 className="mb-4 font-h3 text-2xl text-white">Secure Bridge</h3>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Ultra-low latency connection between your MT5 and our institutional servers.
          </p>
        </div>
        <div className="group rounded-2xl border-primary/10 p-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 glass-card">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/15 shadow-[0_0_20px_rgba(22,173,248,0.2)] transition-colors group-hover:bg-primary/30">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              insights
            </span>
          </div>
          <h3 className="mb-4 font-h3 text-2xl text-white">Tested Strategies</h3>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Backtested across 10 years of market data with strict drawdown controls.
          </p>
        </div>
        <div className="group rounded-2xl border-primary/10 p-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 glass-card">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/15 shadow-[0_0_20px_rgba(22,173,248,0.2)] transition-colors group-hover:bg-primary/30">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
          </div>
          <h3 className="mb-4 font-h3 text-2xl text-white">Easy Deploy</h3>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Get up and running in under 10 minutes with our streamlined onboarding.
          </p>
        </div>
      </div>
    </section>
  );
}
