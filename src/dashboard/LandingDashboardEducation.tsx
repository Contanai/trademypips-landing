const FEATURED_THUMB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbUWPOansrAZogYcxzWWvtb908xweOcY_C2qv99sFaslreLS90hlC2I6YcgGTiGVJLMNeqD1y3nJQ-3BXCAhhEQsa532dtyOoPnynLcRq3ZarutTzeVZkvRA8geVJqwSFKnTYMiQ2psstv0-yDMNfZjujdFrjfd_3pDLRtS3gKnIHVyRR9rDpJN2MxOAf8m8PcxrJk7W2r_gqSMWNWRAFq04M0w4yylwhKgipiPRKT5UIBDux2sWBEGdoIEgUhWJ2M09l57550Wkw";

const GETTING_STARTED = [
  {
    title: "MT5 Integration & API Setup",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJGR1-kN2w7uJabXPDdAcw8nycCu7LlfthJCOR1vJ2N-q31VA7UE07Pa9gKV2OWCjHrRI_X1-jlCAQedrFL_fgqbTLJfeoSmtuRmAbeLRmrOXM0FT8b7dNaUnPnBMij7wK0B6QVvJhLDcq3eLY3cY3B0tSrHnoarWmItALoBTZyr9xWtiVipJyhXnVmUSFiqpEQsRC-AXOQFP5eMpZkSnqxoEhxsn8XtsP9xocI4YalJssZx0qK3FE_kh2YilBl2aGnWdFxnHnji0",
    duration: "08:20",
    progress: 40,
    views: "12.4k",
    age: "3 days ago",
  },
  {
    title: "Risk Management Essentials",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAvTN_o6AAiRNLr_KL0OPwDNJ1ek6AoVV6wSVJRSoAUB6m4-Ao5amYYe10WQHOaqLLcnlSAxEnlfZ4b7cH3K_3rpJCydvm7A1zJw-2ajwQjyUkREItaAXif8hT3LUWQWJ9D9ppB7wfTznShjdALFewO11Zg1_dwNLqP2TcpEXc4AO-8G-1u8RUrwPiZ5jIxYB6CZ64Fs1coYeX9PzbrWfLIr0Kkkmtvpv5f7UNzessdxG3-JJwrTdSGCE1J_bZMn0l1weUjMnHeF8",
    duration: "15:10",
    progress: 90,
    views: "8.9k",
    age: "1 week ago",
  },
  {
    title: "Building Your First EA Bot",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6wprQcB4LNEZeb1msO4yIY58OclxJhsw0tQIG5IPGsBQKbRckF2mdU8wH503A4AnNYg4JrymC39vZc_Dw3DpTpFHrhDkKsvDtUuLm1S1HXM48GbnSmxjDeocLrdJvrlPbPkNnNL3Tv4wh8o6y0tjZ5cunJvxYB-dhHxsZbxsVIah49dz7AysDCPoKHhtsv0a7TmhNpz1JsL6TouhmRw7UshV-kJ6ng2ZiI7GQ7gqJu8QbCypqxtwmL4GikcfuUA037Q9nU0QXY0",
    duration: "22:05",
    progress: 0,
    views: "25k",
    age: "2 weeks ago",
  },
] as const;

const PROP_FIRM = [
  {
    tag: "ADVANCED",
    tagClass: "bg-primary/20 text-primary",
    title: "Passing FTMO Challenges with Nexus EA",
    meta: "14:20 • Intermediate",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm4umrxAEClR6Ubp3lbYPFWlcLrJyNxky54EwZiB_PwbWkPKWS7TCKsPppkvbYRHjfRu0EMxUaRvcYEdK_BGbsJGeLCvYyNT8Cn8R3Yqba28JTcOo_qF_MbVplEN2cCFq7zUwpFiu_UshrcHAW4PbXyBObMPhXnwNWW7vlCGTjE0bCsW7oHdXHb4xw0rSlGGnNfHljZ9hnxku3LNiwlElyHcs6iAEwPpgqPXAo96EWWIP-k7dwNIMGfXQaUcGVrtylhSatNbJTeLI",
  },
  {
    tag: "PROCEDURAL",
    tagClass: "bg-tertiary/20 text-tertiary",
    title: "Maximizing Payouts: Withdrawal Cycles",
    meta: "08:50 • Beginner",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBT39x5dsT1OWPQFnBT-oQx5YGKyXpYmyG-AVOwVwlFaTlbXXW85d1I6GvQdxZDAG0lGd4YEg5L4OAaWkopkUSqJgsfanlUqnBkoffn7W12i8UZ-NDd9DFwlZGq_eUfO_aAaPkFzfFHvz24wtLyA3xCdDEdMR0xpvGgKBhlwpP31LBmI-i-FoUTeRpA8LsxgFqtLLlaP0mZBpEiZ7TVvlfAAQ5wdhp7oYkquK-J0E69dJ3v2lAqJj3a2dwN3Bbol0l3uYFFoLQ7Pu4",
  },
  {
    tag: "STRATEGY",
    tagClass: "bg-primary/20 text-primary",
    title: "Institutional Scaling: $1M+ Roadmap",
    meta: "35:00 • Expert",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-VZVW1yGF7-HWQxwoTbizHSjQPd_ni6zxyGI7YOqU00fmiOyxV_2OBglouy5AVsZWf0IW6bFizuWQ23AcSoQgJ629BP2NniQqI22ZygNN2ypNXKp49FOqVL2xt4zaGCLW3XoTLy1tOEFjljmmnyqtluX0A0Its4rTrMjYvZv4bcCMxukKzcnP_jdP508do9TN7bwHr7ffaRoVLlwc-AzyV5SCJzy5QXiqKC7mD167-WuzMwL9EspNw9safo504H2cIZ24EsAVc1o",
  },
] as const;

const SESSIONS = [
  {
    badge: "RECORDED" as const,
    badgeClass: "bg-error/90 text-white",
    date: "July 14, 2024",
    title: "London Open: Volatility Breakdown",
    mentor: "Marco R. • Head of Strategies",
    mentorImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBu4bFXDExwJnj1eTAD2-biiXNHiVEllLpQfBqijeGOscIxpSsSlUJcRjww0LyTWBX_oi_7hnCwVmsP_bbsv5PWCvuU_hJPjy7yWk-QMv1vuCylZjoPGY85lkZSwQe63RBuP_lVxNazvLD2Mty9Zx0mIgJHyGJ-exK98V3jh8F_Fs45SzPWTDH_G2ErwA2eE4YFlogg8_k_bZV8wA5tedfN1PqfP1uX_TUkT7-FqFmY6NUMZyoNDKeeFdqPV5XIV4XF4O7p0hBBsuU",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIHjZQOuMYo2P4krDjkOwPlxdgi1VP5sRZBN5ZrX7Zo4EF2UwAxZgeFXYdnauhuJPDSZ8WEDBcqqqkNG69MZUVmFiZUA0NsNDkook8JYfodU4XeQE0Ax7BwMpSTkUvwYuY6WfVJw3DsrxL89HGmFHg1xhQDD4ameuBFDxeaVEFy6DcIuHDVPS4ZmlwofpBXy__ITLbSwCo3tPkcQV1hZWDju2xMhWwcq6DF4ssZfq8Z6rSL7wGfTab9BEQSBsolDwnPH3HHX55820",
  },
  {
    badge: "ARCHIVE" as const,
    badgeClass: "bg-black/60 text-white backdrop-blur-sm",
    date: "July 13, 2024",
    title: "US Core CPI Impact Analysis",
    mentor: "Sarah K. • Risk Analyst",
    mentorImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqNhQWWd7YTaJD4Zb_wtivKKuxCCdTI6xpi2oAVERGnaX_-g8n2jhQjO0NEw3OQECNVpEcTFqNhScxRPFvBC6gi07hH-6Prb2zBwbwYItHo-oug0am5vu8k4PPDiN3mKqvqOe-OuL6BdawnhlH0klRbxfEtOU7pUocZfKWBA3lY0DoU10uNZ0rImIF7WrRSfdtlCJnel4-RkUkHiicqsVlrme7ErgI5i0qRffkhblBin_YawkixCZP854_9UOLnv7w_aTewK-tupI",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZbyBlecIxXHQwP7HSIQJITopOLcDPCuocg3CPKIYJKuOKQpH5XGa0na5rPG_0hiR1BUoRfUeUeDj2Wp_k5elBjRg_nvlGs5ybdKss6g4sq_cLQaWjqYYNCmoMkTS5q_ZfTzp3JRq0dAzVAvvXbqYpiflLumcgDU23jxI2ckHqZF6MEl6lib4ACJ6uKwbNB1TzQ9q-qXtgekqzRAoGItgS1BNHFYUVqY8gGJbVosP0dVKflvLnpTUCc70F0f6pUT1dGofF_cckyDQ",
  },
  {
    badge: "ARCHIVE" as const,
    badgeClass: "bg-black/60 text-white backdrop-blur-sm",
    date: "July 10, 2024",
    title: "Weekly Recap: Portfolio Scaling",
    mentor: "Leo V. • Portfolio Manager",
    mentorImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMrjnK4q4H1KudLqjN1JcAbw8Q1S730ysbxyV4UHaDd1Nz96SU0EY3OiE1g5Pihx-G5A6QDzKwYfNCyzS4wJAnj3T6U9mi9J3i-sAe0H0a33HMEcWuj25n-a0s3TCHC-XXpZlerER6fvey5z6YICBD8OSOEjoYBr-SK8j6MBAQ5vvKBSj4jtFg8hQoTrlemY9z-eZRCzYO4a5TF9leDoVpYaUurS4E78aRQmypNFfHSFf-Ehaa-wWKn0R9qNgv2zosvpwv-qC9koE",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzu1XjOvrquFivWBUqwyRLbDpJmpGWRMHrz9vdp8tnBW161ewNBTT-fxhZTbWsjNxwlHolxYiGmaHX_4hxL-9xDJvZU-1Xgw0O3gdpczadbM7Rfjfz0hwbnMsmp--XRH6eUoeMOvJ1_evrlrdZtmRfc5wxlmQyHrX6Ey18cPldRr-ZWkdTA9UHru_d5GEA_qlB5JlUCb_EvYv2gkDSdRfilOSpUQN27WhxWUUgvZfDSlKCxwGLNurANI-03113aP6ie0Aca4q4ZCs",
  },
] as const;

export function LandingDashboardEducation() {
  return (
    <div className="max-w-container-max mx-auto py-xl">
      <section className="mb-xxl">
        <div className="dashboard-glass-card overflow-hidden rounded-xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
            <div className="group relative lg:col-span-7">
              <img alt="" className="aspect-video w-full object-cover" src={FEATURED_THUMB} />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  type="button"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-[0_0_30px_rgba(22,173,248,0.5)]"
                  aria-label="Play featured tutorial"
                >
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="rounded bg-secondary-container px-sm py-xs text-[12px] font-bold text-on-secondary-container">
                  FEATURED
                </span>
                <span className="rounded bg-black/60 px-sm py-xs text-[12px] font-bold text-on-surface backdrop-blur-md">
                  12:45
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-xl lg:col-span-5">
              <span className="mb-sm font-label-caps uppercase tracking-widest text-secondary-container">Advanced Strategy</span>
              <h2 className="mb-md font-h3 text-h3 leading-tight">Mastering High-Frequency Grid Bots</h2>
              <p className="mb-xl text-on-surface-variant">
                Learn how to configure our Zennbot Echo for volatile market conditions. This deep dive covers risk parameters and automated
                hedge settings.
              </p>
              <div className="flex flex-wrap items-center gap-md">
                <button
                  type="button"
                  className="flex items-center gap-sm rounded-lg bg-primary px-xl py-md font-bold text-on-primary transition-all hover:brightness-110"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_circle
                  </span>
                  Watch Now
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-outline-variant px-xl py-md font-bold transition-all hover:bg-surface-container-high"
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-xxl pb-xxl">
        <section>
          <div className="mb-xl flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-label-caps uppercase tracking-widest text-tertiary">Level 01</span>
              <h3 className="mt-sm font-h3 text-h3">Getting Started</h3>
            </div>
            <a className="flex items-center gap-xs text-primary hover:underline" href="#getting-started">
              View all 12 videos <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
          <div id="getting-started" className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {GETTING_STARTED.map((v) => (
              <div key={v.title} className="group cursor-pointer">
                <div className="dashboard-glass-card relative mb-md overflow-hidden rounded-xl">
                  <img alt="" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src={v.thumb} />
                  <div className="dashboard-video-overlay pointer-events-none absolute inset-0 opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-[12px] font-bold">{v.duration}</div>
                  <div className="absolute bottom-0 left-0 h-1 bg-primary" style={{ width: `${v.progress}%` }} />
                </div>
                <h4 className="mb-xs text-lg font-bold transition-colors group-hover:text-primary">{v.title}</h4>
                <div className="flex flex-wrap items-center gap-md text-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span> {v.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> {v.age}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-xl flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-label-caps uppercase tracking-widest text-secondary-container">Level 02</span>
              <h3 className="mt-sm font-h3 text-h3">Prop Firm Scaling</h3>
            </div>
            <a className="flex items-center gap-xs text-primary hover:underline" href="#prop-firm">
              Explore Strategies <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
          <div id="prop-firm" className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {PROP_FIRM.map((c) => (
              <div key={c.title} className="dashboard-glass-card group cursor-pointer rounded-xl p-md transition-all hover:bg-surface-container-high">
                <div className="relative mb-sm overflow-hidden rounded-lg">
                  <img alt="" className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" src={c.thumb} />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <span className={`mb-xs inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${c.tagClass}`}>{c.tag}</span>
                <h5 className="line-clamp-2 font-bold text-body-md">{c.title}</h5>
                <p className="mt-xs text-[12px] text-on-surface-variant">{c.meta}</p>
              </div>
            ))}
            <div className="dashboard-glass-card flex flex-col items-center justify-center rounded-xl border border-dashed border-primary/40 p-md text-center">
              <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-3xl text-primary">add_circle</span>
              </div>
              <h5 className="font-bold text-body-md">Request a Topic</h5>
              <p className="mt-sm text-[12px] text-on-surface-variant">Can&apos;t find what you need? Ask our mentors.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-xl flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-label-caps uppercase tracking-widest text-error">Live Archive</span>
              <h3 className="mt-sm font-h3 text-h3">Trading Floor Sessions</h3>
            </div>
            <div className="flex gap-sm">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant transition-all hover:bg-surface-container-high"
                aria-label="Scroll sessions left"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant transition-all hover:bg-surface-container-high"
                aria-label="Scroll sessions right"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="scrollbar-hide flex gap-gutter overflow-x-auto pb-md">
            {SESSIONS.map((s) => (
              <div key={s.title} className="dashboard-glass-card min-w-[min(400px,85vw)] shrink-0 overflow-hidden rounded-xl">
                <div className="relative h-48">
                  <img alt="" className="h-full w-full object-cover" src={s.thumb} />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className={`absolute left-4 top-4 flex items-center gap-1 rounded px-2 py-1 text-[12px] font-bold ${s.badgeClass}`}>
                    {s.badge === "RECORDED" ? (
                      <>
                        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                        RECORDED
                      </>
                    ) : (
                      s.badge
                    )}
                  </div>
                </div>
                <div className="p-md">
                  <p className="mb-xs text-sm text-on-surface-variant">{s.date}</p>
                  <h4 className="text-lg font-bold">{s.title}</h4>
                  <div className="mt-md flex items-center gap-sm">
                    <img alt="" className="h-6 w-6 rounded-full" src={s.mentorImg} />
                    <span className="text-sm text-on-surface">{s.mentor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mb-xl mt-xxl">
        <div className="dashboard-glass-card group relative overflow-hidden rounded-xl border-primary/20 p-xl">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px] transition-all group-hover:bg-primary/20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-xl md:flex-row">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="mb-md font-h2 text-h2">Need 1-on-1 Help?</h2>
              <p className="text-body-lg text-on-surface-variant">
                Our veteran traders are available for private mentorship sessions to help you optimize your specific setup and reach your funding goals
                faster.
              </p>
            </div>
            <button
              type="button"
              className="rounded-xl bg-secondary-container px-xl py-xl text-xl font-bold text-on-secondary-container shadow-[0_0_40px_rgba(0,213,253,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Book a Mentor Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
