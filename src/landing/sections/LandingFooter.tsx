const LOGO_FOOTER =
  "https://lh3.googleusercontent.com/aida/ADBb0uj_rk5E9F8a9HJhYZyBBxNDSsimKAkI8qHovTUEpUu89yRZeL6Q0imjXBklj7VOAY8geC4iUVtRiSZR0rTPbkNEAkqLvK7sn7r0NqI4bvUlSW0tlEOSQ4hjDxXB0THQ0vTgNmoUvhA8FcWY8Fs-rcWHdIowGZM1M01tYJjh0SgIBob5r3YmCMgbOj7aY1xpRgb_s4CSuhVkI4VS3B3ahvD3Y3Xe36eVS2a7Q5lzZV33tylQw2swYVWE7tPRcDThKoB1Nd8jQGZGmg";
const MT5_BADGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uhHW02OQ7aY3kd01ZQhaboOTkZqtdpHGJ-R0D0dxJeDkj9drd42V6x81oLnpvBHk-nLH2BOHGrB5eYLbPMe-1vdCko20bCV5o8-DVCnnDuo7m-w1YgdMDbVh6rE8zhSJiixq-46-jHSGkWAqtRh-dnnEDnfkcJDCP8h6xtrgmEkIzoL-IhEGsDiUPnXCnPE6ZQSuyPbz3b2x8lA4XB0w_2BSLB7D10n5ydDiaIq3L8xzpWUASlGPnWsb6vdHTXm7Zc5y9EbGwLz2w";

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-background px-8 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-16 lg:flex-row">
          <div className="flex max-w-sm flex-col gap-8">
            <img alt="TradeMyPips" className="h-10 w-fit" src={LOGO_FOOTER} />
            <p className="text-sm leading-relaxed text-white/40">
              The premier destination for high-performance algorithmic trading tools and automated EA deployment for
              MetaTrader 5.
            </p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined cursor-pointer text-2xl text-white/30 transition-colors hover:text-primary">
                account_balance_wallet
              </span>
              <span className="material-symbols-outlined cursor-pointer text-2xl text-white/30 transition-colors hover:text-primary">
                monitoring
              </span>
              <span className="material-symbols-outlined cursor-pointer text-2xl text-white/30 transition-colors hover:text-primary">
                hub
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:gap-20">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Product</span>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#features">
                Features
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Strategies
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#pricing">
                Pricing
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Company</span>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                About Us
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Contact
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Support
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal</span>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Privacy Policy
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Terms
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Risk
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Social</span>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Discord
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                YouTube
              </a>
              <a className="text-sm text-white/40 transition-colors hover:text-primary" href="#">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 border-t border-primary/10 pt-12">
          <div className="mx-auto max-w-5xl text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.15em] text-white/30">
            RISK DISCLOSURE: Trading foreign exchange on margin carries a high level of risk and may not be suitable for
            all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest
            in foreign exchange you should carefully consider your investment objectives, level of experience, and risk
            appetite. The possibility exists that you could sustain a loss of some or all of your initial investment.
          </div>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <span className="font-['Space_Grotesk'] text-xs text-white/50">
              © 2024 TradeMyPips. Institutional Grade Automation.
            </span>
            <img
              alt="Powered by MetaTrader 5"
              className="h-6 cursor-pointer opacity-40 grayscale transition-all hover:grayscale-0"
              src={MT5_BADGE}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
