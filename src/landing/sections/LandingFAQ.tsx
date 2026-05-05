import { KineticGlow } from "@/landing/KineticGlow";

export function LandingFAQ() {
  return (
    <section id="faq" className="relative px-6 py-xxl">
      <KineticGlow className="right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 bg-primary/10" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-20 text-center font-h2 text-h2 text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="group cursor-pointer rounded-2xl border-primary/10 p-8 transition-all hover:border-primary/30 glass-card">
            <button type="button" className="flex w-full items-center justify-between text-left">
              <span className="text-xl font-medium text-white transition-colors group-hover:text-primary">
                Is this safe for my capital?
              </span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
            <div className="mt-6 text-base leading-relaxed text-on-surface-variant">
              Yes. Our systems include hard stop-losses on every trade and account-level drawdown protection that kills
              all trades if a specific risk threshold is hit.
            </div>
          </div>
          <div className="group cursor-pointer rounded-2xl border-primary/10 p-8 transition-all hover:border-primary/30 glass-card">
            <button type="button" className="flex w-full items-center justify-between text-left">
              <span className="text-xl font-medium text-white transition-colors group-hover:text-primary">
                Does it work with funded accounts?
              </span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
          <div className="group cursor-pointer rounded-2xl border-primary/10 p-8 transition-all hover:border-primary/30 glass-card">
            <button type="button" className="flex w-full items-center justify-between text-left">
              <span className="text-xl font-medium text-white transition-colors group-hover:text-primary">
                Do I need a VPS?
              </span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
