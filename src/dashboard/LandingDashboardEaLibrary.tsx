const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDV0dO9a4MVT2Ukrk7mUPd-swarVNmlZvHOoZ89n8PJ9mdZxWRLnVBkJ3jz3Wp55-4xPELuEwGDCW0NBFVOP1Kb4lyacNmRrh3vZ_dz3M4mQg6fhMcU7SnHiZpLPGS9W8gPDpxaE2YPf-Rj80Z5661JtKf1USG7BwcNtnyQq1o542JgQXUVLUXONCCY1Y7QSlkR0Rfqu3X4HHBaoD56yJVk47fEOXJvNdnfjL5e9WQ2jd1_TRIzqXJrEsx0cclGkYZsBNVKuUyFR10";

const EA_CARDS = [
  {
    title: "Zenbot Nexus",
    risk: "Low Risk",
    riskClass: "text-green-400 bg-green-400/10",
    desc: "Cutting-edge EA utilizing strategies to capitalize on consolidating market periods. Perfect for prop firm management.",
    roi: "+15.30%",
    dd: "6%",
    badge: "MT4/MT5",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQx-ud0pqm4yyvonoL2U9Pm2JcHpZJy-P6f1yCNSiGVBtHpi_W6yzRPIWQp8NnATK2p9DOg6-1PlU9gkYYxKmzBUbb9AJHQvGUdj_cTCL4nB4jhcFgo-BM1y02EMmT5HvCbqbgosjvW0INrwnhSDrEZyVtU1L-DSK4LlWPZHKAs9Rxp7m0nFTl7mCQPOtadiV1YTmGSXeTcbAg5seGMqu3aWpeKZU3e0X9vrIpsCSP00HFyxSxGGO9cgvXkUlPOjdKixv3Ialckxs",
  },
  {
    title: "Zenbot Force",
    risk: "Medium Risk",
    riskClass: "text-orange-400 bg-orange-400/10",
    desc: "Trend-catching powerhouse for momentum trading. Designed to stay in sync with strong directional moves.",
    roi: "+28.7%",
    dd: "12%",
    badge: "FUNDED",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oUkseYJjfAQIWfAeRKyovRmD_zkdrE8clT2BW8Fd2ws48eZNFP-0-OS8MMO07N_uI3vXegWjtcA_pGpPOyjOHLWxIz4Jcyx5fy03cjtwF_7xvBSy7_UQFIpi_qixe2W6q3OfXSWj_JQ50qTMjXYdCKIY8fJ9jOPOU2owzMzWxvPLVg1SeJ7ubE4_Yd6K5gau8aTpw2ETbq4rAdEmpwNkSw5cNSVSgn8eGaeLiSJA1_ygKQ_iaZS-Od4wk6BcQl9qMDPjkLxnodg",
  },
  {
    title: "Zenbot Zero",
    risk: "Passive",
    riskClass: "text-sky-400 bg-sky-400/10",
    desc: "Fully automated, totally effortless. Just connect your account and let Zenbot Zero take over.",
    roi: "+8.4%",
    dd: "2.5%",
    badge: "MT4",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0qEiRjRJ-rLXOda_DPkFloxPrMqVWPewQOjAkmXR1EoCt6c_7HzFHnIbc1VXXWMxjSQPGQslctEEUcaOin4BA3GtPEdgnTczFJenNyqNlGubrHXIk7JK0CuyPRMkU4HYLOlZ0XdS9iZZQqP2ov3qMvO_kOcb8N0K0NxgnoHmPMEgIhmRRMZwv24DFtzzVYNdI4M4DtRCZZ1pzhNTa0dYzT30ZvJHDAowgXsd4jS7CGjAVWUwplZRs63QI-zYxAvKSmbAgAqg2gZY",
  },
  {
    title: "Zenbot Quantum",
    risk: "Advanced",
    riskClass: "text-purple-400 bg-purple-400/10",
    desc: "Hyper-scalping algorithm optimized for the 1-minute timeframe using AI-driven price prediction models.",
    roi: "+42.1%",
    dd: "18%",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTVlJN3yc_fdnbH3NA5qaYUr8Q8iW5mvflwp178Vw467j_NkfRqAJYuDzc6bs-jImlyoo12t_5y6kRPER4MHYydrugm2sjdNK2AQsYIzqRDCr7BTq9fBCQNA7diKU_AFZov8BAEhWqMqXVf6tJ1gNYVPREScNrdI5L5OHcT3W9FXqNPNtNehPrDt7UNk9M95V1NeVGvRR1O7l4pJ6Df8xCvgVw7XmPq9dYPBj8mqYmTwXEA5O155d8RiZW4cz2J1c8BC-F7qbuh0",
  },
] as const;

export function LandingDashboardEaLibrary() {
  return (
    <div className="relative pb-xl">
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="space-y-12 md:px-0">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="mb-2 font-h2 text-h2 text-white">EA Library</h1>
              <p className="font-body-md text-slate-400">The world&apos;s most powerful collection of automated trading systems.</p>
            </div>
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
              <input
                className="w-full rounded-full border border-white/10 bg-black py-3 pl-12 pr-6 text-sm outline-none transition-all focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Search strategies, pairs, or risk levels..."
                type="search"
                aria-label="Search EA library"
              />
            </div>
          </div>

          <section className="mb-16">
            <div className="dashboard-glass-card group relative h-[min(500px,70vh)] w-full overflow-hidden rounded-3xl">
              <img
                alt=""
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 transition-transform duration-700 group-hover:scale-100"
                src={FEATURED_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full max-w-3xl p-8 md:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-sky-400/30 bg-primary-container/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    Featured Release
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Live Tracked
                  </span>
                </div>
                <h2 className="mb-4 font-h1 text-h2 text-white md:text-h1">Zenbot Echo V2</h2>
                <p className="mb-8 max-w-xl text-lg text-slate-300">
                  Our next-generation indicator, powered by TradingView. Perfect for prop firms and personal accounts alike. Now with HFT detection and
                  institutional level entry logic.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#16adf8] to-[#05d7ff] px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(22,173,248,0.3)] transition-transform hover:scale-105 active:scale-95"
                  >
                    <span className="material-symbols-outlined">bolt</span> Deploy Now
                  </button>
                  <button
                    type="button"
                    className="dashboard-glass-card flex items-center gap-3 rounded-xl px-8 py-4 font-bold transition-colors hover:bg-white/10"
                  >
                    <span className="material-symbols-outlined">play_circle</span> Watch Strategy
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <div className="flex items-center justify-between">
              <h3 className="font-h3 text-h3 text-white">All Algorithms</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-white/5 bg-surface-container-high p-2 text-slate-400 transition-colors hover:text-white"
                  aria-label="Filter"
                >
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-white/5 bg-surface-container-high p-2 text-slate-400 transition-colors hover:text-white"
                  aria-label="Grid view"
                >
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {EA_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="dashboard-glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:border-sky-500/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={card.thumb} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                    {"badge" in card && card.badge ? (
                      <div className="absolute right-4 top-4 flex gap-2">
                        <span className="rounded border border-sky-400/20 bg-black/60 px-2 py-1 text-[10px] font-bold text-sky-400 backdrop-blur-md">
                          {card.badge}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-2">
                      <h4 className="font-h3 text-xl text-white">{card.title}</h4>
                      <span className={`shrink-0 rounded px-2 py-1 text-xs font-bold ${card.riskClass}`}>{card.risk}</span>
                    </div>
                    <p className="mb-6 line-clamp-2 text-sm text-slate-400">{card.desc}</p>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Monthly ROI</p>
                        <p className="font-bold text-sky-400">{card.roi}</p>
                      </div>
                      <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Drawdown</p>
                        <p className="font-bold text-white">{card.dd}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="dashboard-glass-card w-full rounded-xl py-3 font-bold transition-all duration-300 hover:bg-sky-500 hover:text-black"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-12">
              <button type="button" className="flex items-center gap-2 font-label-caps text-slate-400 transition-colors hover:text-sky-400">
                View all 42 algorithms <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
