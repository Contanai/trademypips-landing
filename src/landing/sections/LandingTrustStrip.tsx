import { KineticGlow } from "@/landing/KineticGlow";

export function LandingTrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-primary/10 bg-surface-container-lowest py-16">
      <KineticGlow className="left-1/2 top-1/2 h-[200px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/20" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 text-center md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <span className="font-h2 text-h2 text-primary">500+</span>
          <span className="text-label-caps font-medium uppercase tracking-[0.2em] text-outline">Active Users</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-h2 text-h2 text-secondary">1.5M+</span>
          <span className="text-label-caps font-medium uppercase tracking-[0.2em] text-outline">Trades Executed</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-h2 text-h2 text-primary">99.9%</span>
          <span className="text-label-caps font-medium uppercase tracking-[0.2em] text-outline">Server Uptime</span>
        </div>
      </div>
    </section>
  );
}
