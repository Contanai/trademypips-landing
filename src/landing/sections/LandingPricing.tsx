import { KineticGlow } from "@/landing/KineticGlow";

export function LandingPricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-deep-blue px-6 py-xxl">
      <KineticGlow className="left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 bg-primary/15" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="font-h2 text-h2 text-white">Choose Your Level</h2>
          <p className="mt-4 text-on-surface-variant">Scalable plans for every stage of your trading journey</p>
        </div>
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-3">
          <div className="flex h-full flex-col rounded-3xl border-primary/10 p-lg transition-all duration-300 hover:border-primary/30 glass-card">
            <span className="mb-6 text-label-caps tracking-[0.2em] text-outline">STARTER</span>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="font-h2 text-h2 text-white">$49</span>
              <span className="text-lg text-on-surface-variant">/mo</span>
            </div>
            <ul className="mb-14 flex-grow space-y-5">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                1 MT5 Terminal
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                Standard EA Access
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant/40">
                <span className="material-symbols-outlined text-xl">cancel</span>
                VPS Included
              </li>
            </ul>
            <button
              type="button"
              className="w-full rounded-2xl border border-primary/20 py-5 font-bold text-primary transition-all hover:bg-primary/10"
            >
              Select Plan
            </button>
          </div>
          <div className="relative z-10 flex min-h-[600px] scale-105 flex-col rounded-3xl border-primary/50 bg-primary/10 p-lg glow-blue glass-card">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(22,173,248,0.5)]">
              Most Popular
            </div>
            <span className="mb-6 text-label-caps tracking-[0.2em] text-primary">PRO TERMINAL</span>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="font-h1 text-h1 leading-none text-white">$149</span>
              <span className="text-lg text-on-surface-variant">/mo</span>
            </div>
            <ul className="mb-14 flex-grow space-y-5">
              {[
                "Unlimited Terminals",
                "All Elite Strategies",
                "Premium VPS Hosting",
                "Discord Alerts",
                "Risk Management Suite",
              ].map((label) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="w-full rounded-2xl bg-primary py-5 font-black text-white shadow-[0_0_40px_rgba(22,173,248,0.5)] transition-all hover:scale-[1.02] hover:bg-secondary"
            >
              Get Started Now
            </button>
          </div>
          <div className="flex h-full flex-col rounded-3xl border-primary/10 p-lg transition-all duration-300 hover:border-primary/30 glass-card">
            <span className="mb-6 text-label-caps tracking-[0.2em] text-outline">MASTER BUNDLE</span>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="font-h2 text-h2 text-white">$999</span>
              <span className="text-lg text-on-surface-variant">/yr</span>
            </div>
            <ul className="mb-14 flex-grow space-y-5">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                Lifetime All Features
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                Priority 1-on-1 Support
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                Prop Firm Masterclass
              </li>
            </ul>
            <button
              type="button"
              className="w-full rounded-2xl border border-primary/20 py-5 font-bold text-primary transition-all hover:bg-primary/10"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
