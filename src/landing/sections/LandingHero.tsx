import { KineticGlow } from "@/landing/KineticGlow";

const HERO_VIDEO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDw1oor9HyJprgT4Y16l3FUrjafHashQk_qgboxk5qyLyU9Mpke5K2H_HkaM4Ww5NR0mQfLRGR2GKAaA4JE_uCvnBOVT22UHR44FGEkhuSp50b832w603QhuQeCYnCbSm4YUufpkAbb4_OYgYgSUzesmz5ymo_06PSP3JgokoRyNd5K2mB1msMN76Ajjvea2sjtECm1At8kQoWCSok4usX8v83cXOepRZe8LghL2UiJwA3AbiTqsGgzfbKpnpgy6gO4gsR4_xOzepE";

export function LandingHero() {
  return (
    <section id="features" className="relative overflow-hidden bg-mesh px-6 pb-24 pt-48">
      <KineticGlow className="kinetic-glow-drift-a bg-primary -left-48 -top-48 h-[600px] w-[600px]" />
      <KineticGlow className="kinetic-glow-drift-b bg-secondary -right-24 top-1/4 h-[500px] w-[500px]" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="mb-16 font-h1 text-h1 leading-[1.05] tracking-tighter text-white">
          Automate Your MT5 Trading <br /> with{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Proven EAs</span>
        </h1>
        <div className="group relative overflow-hidden rounded-2xl p-2 glow-blue glass-card">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-container">
            <img
              alt="Video Preview"
              className="h-full w-full object-cover opacity-80"
              src={HERO_VIDEO_IMG}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-all group-hover:bg-background/10">
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-primary/90 shadow-[0_0_40px_rgba(22,173,248,0.7)] transition-transform hover:scale-110">
                <span
                  className="material-symbols-outlined text-5xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
