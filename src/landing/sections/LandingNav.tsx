import { Link } from "react-router-dom";

const LOGO = `${import.meta.env.BASE_URL}trademypip_logo.png`;

export function LandingNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/40 shadow-[0_0_40px_rgba(22,173,248,0.1)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img alt="TradeMyPips Logo" className="block h-10 w-auto object-contain" src={LOGO} />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a className="border-b-2 border-primary pb-1 font-label-caps font-bold text-primary" href="#features">
            Features
          </a>
          <a className="font-label-caps text-white/70 transition-colors hover:text-primary" href="#pricing">
            Pricing
          </a>
          <a className="font-label-caps text-white/70 transition-colors hover:text-primary" href="#testimonials">
            Testimonials
          </a>
          <a className="font-label-caps text-white/70 transition-colors hover:text-primary" href="#faq">
            FAQ
          </a>
          <Link className="font-label-caps text-white/70 transition-colors hover:text-primary" to="/dashboard">
            Academy
          </Link>
        </div>
        <Link
          className="rounded-full bg-primary px-6 py-2 font-bold text-white shadow-[0_0_25px_rgba(22,173,248,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          to="/waitlist"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
