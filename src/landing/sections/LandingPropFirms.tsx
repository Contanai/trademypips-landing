import { KineticGlow } from "@/landing/KineticGlow";

const LOGO_FTMO =
  "https://lh3.googleusercontent.com/aida/ADBb0uiY6-YpYJoAbc9yISI_YY5KB5iI3Cb3i-QtaZsFGmqF7WieV5jRUva67CKjmu3h1tVhslBt_fcwgo56I6-G8LO2Tyv9oX2UyrWqmde71OKQrPf-Kt3882Hfm9C45SZqS6Hlrc-zY3LmQYx1DW-V_yc2VFyK_d-1DorNYGjP-Gow1VImhO9WKnvyZh5tEQ1qxxEGfAM8Z4UrkuC3A-HYmwR1jrVIakiqKr0dGhFKP8H_vzOMvhKhbSsVzP99dr4bIZFgk7IphQFg8A";
const LOGO_TOPSTEP =
  "https://lh3.googleusercontent.com/aida/ADBb0uhHW02OQ7aY3kd01ZQhaboOTkZqtdpHGJ-R0D0dxJeDkj9drd42V6x81oLnpvBHk-nLH2BOHGrB5eYLbPMe-1vdCko20bCV5o8-DVCnnDuo7m-w1YgdMDbVh6rE8zhSJiixq-46-jHSGkWAqtRh-dnnEDnfkcJDCP8h6xtrgmEkIzoL-IhEGsDiUPnXCnPE6ZQSuyPbz3b2x8lA4XB0w_2BSLB7D10n5ydDiaIq3L8xzpWUASlGPnWsb6vdHTXm7Zc5y9EbGwLz2w";

export function LandingPropFirms() {
  return (
    <section className="relative overflow-hidden bg-deep-blue px-6 py-24">
      <KineticGlow className="bottom-0 right-0 h-[600px] w-[600px] bg-secondary/15" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-label-caps font-bold uppercase tracking-[0.3em] text-primary">Proven Performance</span>
          <h2 className="font-h2 text-h2 text-white">Dominate Prop Firms</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="group flex flex-col items-center justify-center rounded-3xl border-primary/10 p-8 opacity-60 grayscale transition-all hover:border-primary/40 hover:opacity-100 hover:grayscale-0 glass-card">
            <img alt="FTMO" className="mb-6 h-14 transition-transform group-hover:scale-110" src={LOGO_FTMO} />
            <span className="text-[10px] font-label-caps font-bold tracking-[0.2em] text-primary">PASSED 100%</span>
          </div>
          <div className="group flex flex-col items-center justify-center rounded-3xl border-primary/10 p-8 opacity-60 grayscale transition-all hover:border-primary/40 hover:opacity-100 hover:grayscale-0 glass-card">
            <img alt="Topstep" className="mb-6 h-14 transition-transform group-hover:scale-110" src={LOGO_TOPSTEP} />
            <span className="text-[10px] font-label-caps font-bold tracking-[0.2em] text-primary">ELITE PARTNER</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl border-primary/30 bg-primary/5 p-8 glow-blue glass-card">
            <div className="mb-2 text-3xl font-bold text-white">$50,000+</div>
            <span className="text-[10px] font-label-caps font-bold uppercase tracking-[0.2em] text-secondary">Weekly Payouts</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl border-primary/10 p-8 transition-all hover:border-primary/40 glass-card">
            <div className="mb-2 text-3xl font-bold text-white">98%</div>
            <span className="text-[10px] font-label-caps font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Success Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
