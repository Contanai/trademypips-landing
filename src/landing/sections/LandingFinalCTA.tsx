import { KineticGlow } from "@/landing/KineticGlow";
import { Link } from "react-router-dom";

export function LandingFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-mesh px-6 py-32">
      <KineticGlow className="bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 bg-primary opacity-30" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-h1 text-h2 tracking-tighter text-white md:text-h1">
          Start Automating Your <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trading Today</span>
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Link
            className="rounded-full bg-primary px-12 py-6 text-xl font-black text-white shadow-[0_0_60px_rgba(22,173,248,0.6)] transition-all hover:scale-105 hover:bg-secondary"
            to="/waitlist"
          >
            GET LIFETIME ACCESS
          </Link>
          <button
            type="button"
            className="rounded-full border-primary/30 px-12 py-6 text-xl font-bold text-white backdrop-blur-xl transition-all hover:bg-primary/20 glass-card"
          >
            JOIN FREE DISCORD
          </button>
        </div>
        <p className="mt-16 text-xs font-label-caps font-bold uppercase tracking-[0.3em] text-primary/60">
          Risk Warning: Trading contains significant risk of loss.
        </p>
      </div>
    </section>
  );
}
