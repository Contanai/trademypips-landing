import { KineticGlow } from "@/landing/KineticGlow";

export function LandingHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-xxl">
      <KineticGlow className="left-1/2 top-1/2 h-[400px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-primary/20" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-24 text-center font-h2 text-h2 text-white">4 Steps to Freedom</h2>
        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="absolute left-0 top-12 hidden h-[2px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          <div className="group relative text-center">
            <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-primary font-h2 text-4xl text-white glow-blue transition-transform group-hover:scale-110">
              1
            </div>
            <h4 className="mb-3 font-h3 text-2xl text-white">Sign Up</h4>
            <p className="px-4 text-sm text-on-surface-variant">Create your secure account on our cloud platform.</p>
          </div>
          <div className="group relative text-center">
            <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-surface-container font-h2 text-4xl text-primary backdrop-blur-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10">
              2
            </div>
            <h4 className="mb-3 font-h3 text-2xl text-white">Connect</h4>
            <p className="px-4 text-sm text-on-surface-variant">Link your MT5 account via our secure bridge.</p>
          </div>
          <div className="group relative text-center">
            <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-surface-container font-h2 text-4xl text-primary backdrop-blur-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10">
              3
            </div>
            <h4 className="mb-3 font-h3 text-2xl text-white">Choose EA</h4>
            <p className="px-4 text-sm text-on-surface-variant">Select from our vetted library of trading bots.</p>
          </div>
          <div className="group relative text-center">
            <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-surface-container font-h2 text-4xl text-primary backdrop-blur-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10">
              4
            </div>
            <h4 className="mb-3 font-h3 text-2xl text-white">Auto-Trade</h4>
            <p className="px-4 text-sm text-on-surface-variant">Go live and watch the automation take over.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
