const TX_ROWS = [
  {
    id: "#INV-982410",
    icon: "auto_awesome",
    desc: "Nexus EA Monthly Rental",
    date: "Sept 12, 2024",
    amount: "$49.00",
  },
  {
    id: "#INV-982355",
    icon: "cloud_download",
    desc: "Data Feed Access (H1)",
    date: "Aug 28, 2024",
    amount: "$12.50",
  },
  {
    id: "#INV-982104",
    icon: "workspace_premium",
    desc: "Pro EA Pass - Annual",
    date: "Aug 15, 2024",
    amount: "$149.00",
  },
] as const;

export function LandingDashboardBilling() {
  return (
    <div className="relative pb-24">
      <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[5%] h-[40%] w-[40%] rounded-full bg-tertiary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-container-max py-xl">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 space-y-gutter lg:col-span-8">
            <div className="dashboard-glass-card relative flex flex-col items-center justify-between gap-xl overflow-hidden rounded-xl p-xl md:flex-row">
              <div className="pointer-events-none absolute right-0 top-0 p-gutter opacity-10">
                <span className="material-symbols-outlined text-[120px]">account_balance_wallet</span>
              </div>
              <div className="relative z-10">
                <p className="mb-xs font-label-caps uppercase tracking-widest text-on-surface-variant">Available Balance</p>
                <h3 className="flex items-baseline gap-xs font-h1 text-h1 font-bold text-primary">
                  <span className="font-h2 font-normal text-on-surface-variant">$</span>12,450.80
                </h3>
                <p className="mt-sm flex items-center gap-xs font-medium text-secondary">
                  <span className="material-symbols-outlined text-sm">trending_up</span>+$1,240.00 from last month
                </p>
              </div>
              <div className="relative z-10 flex w-full gap-md md:w-auto">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-sm rounded-lg bg-gradient-to-br from-secondary-container to-primary px-xl py-md font-bold text-black shadow-[0_0_40px_-10px_rgba(36,216,255,0.3)] transition-transform hover:scale-[1.02] md:flex-none"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  Deposit
                </button>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-sm rounded-lg border border-outline-variant bg-surface-container/50 px-xl py-md font-bold transition-colors hover:bg-surface-container md:flex-none"
                >
                  <span className="material-symbols-outlined">outbound</span>
                  Withdraw
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <div className="dashboard-glass-card rounded-xl border-l-4 border-l-primary p-lg">
                <div className="mb-xl flex items-start justify-between">
                  <div className="flex h-8 w-12 items-center justify-center rounded-sm bg-surface-container opacity-80">
                    <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                  </div>
                  <span className="rounded bg-primary/10 px-sm py-xs font-label-caps text-primary">PRIMARY</span>
                </div>
                <p className="mb-xs font-body-lg font-bold tracking-widest">•••• •••• •••• 4242</p>
                <div className="flex justify-between text-[14px] text-on-surface-variant">
                  <span>VISA DEBIT</span>
                  <span>Exp 12/26</span>
                </div>
              </div>
              <button
                type="button"
                className="dashboard-glass-card group flex cursor-pointer flex-col items-center justify-center gap-sm rounded-xl border-2 border-dashed border-outline-variant/30 p-lg transition-all hover:border-primary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high transition-colors group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover:text-primary">add</span>
                </div>
                <p className="font-bold text-on-surface-variant transition-colors group-hover:text-on-surface">Add New Method</p>
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="dashboard-glass-card h-full rounded-xl border-t-4 border-t-secondary-container p-xl">
              <div className="mb-xl flex items-center gap-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container/20">
                  <span className="material-symbols-outlined font-h3 text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </div>
                <div>
                  <h4 className="font-h3 font-bold">Pro EA Pass</h4>
                  <p className="text-on-surface-variant">Annual Subscription</p>
                </div>
              </div>
              <div className="mb-xl space-y-md">
                <div className="flex items-center justify-between border-b border-outline-variant/20 py-sm">
                  <span className="text-on-surface-variant">Status</span>
                  <span className="flex items-center gap-xs text-secondary">
                    <span className="h-2 w-2 rounded-full bg-secondary" /> Active
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/20 py-sm">
                  <span className="text-on-surface-variant">Next Billing</span>
                  <span className="font-bold">Oct 24, 2024</span>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/20 py-sm">
                  <span className="text-on-surface-variant">Amount</span>
                  <span className="font-bold">$149.00/yr</span>
                </div>
              </div>
              <ul className="mb-xl space-y-sm">
                <li className="flex items-center gap-sm text-[14px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                  Unlimited EA Activations
                </li>
                <li className="flex items-center gap-sm text-[14px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                  Priority Server Connections
                </li>
                <li className="flex items-center gap-sm text-[14px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                  24/7 Technical Support
                </li>
              </ul>
              <button type="button" className="w-full rounded-lg bg-surface-container-highest py-md font-bold transition-all hover:bg-primary hover:text-background">
                Manage Subscription
              </button>
            </div>
          </div>

          <div className="col-span-12">
            <div className="dashboard-glass-card overflow-hidden rounded-xl">
              <div className="flex flex-col justify-between gap-4 border-b border-outline-variant bg-surface-container/30 px-xl py-lg sm:flex-row sm:items-center">
                <h4 className="font-bold text-body-lg">Transaction History</h4>
                <div className="flex flex-wrap gap-sm">
                  <button
                    type="button"
                    className="flex items-center gap-xs rounded-full bg-surface-container px-md py-xs font-label-caps hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-xs rounded-full bg-surface-container px-md py-xs font-label-caps hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-sm">download</span> Export
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low text-[12px] font-bold uppercase text-on-surface-variant">
                    <tr>
                      <th className="px-xl py-md">Invoice ID</th>
                      <th className="px-xl py-md">Description</th>
                      <th className="px-xl py-md">Date</th>
                      <th className="px-xl py-md">Amount</th>
                      <th className="px-xl py-md">Status</th>
                      <th className="px-xl py-md text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {TX_ROWS.map((row) => (
                      <tr key={row.id} className="transition-colors hover:bg-white/5">
                        <td className="px-xl py-md font-mono text-sm text-primary">{row.id}</td>
                        <td className="px-xl py-md">
                          <div className="flex items-center gap-sm">
                            <span className="material-symbols-outlined text-on-surface-variant">{row.icon}</span>
                            {row.desc}
                          </div>
                        </td>
                        <td className="px-xl py-md text-on-surface-variant">{row.date}</td>
                        <td className="px-xl py-md font-bold">{row.amount}</td>
                        <td className="px-xl py-md">
                          <span className="rounded-full bg-green-500/10 px-sm py-xs text-[12px] font-bold text-green-400">PAID</span>
                        </td>
                        <td className="px-xl py-md text-right">
                          <button type="button" className="p-sm transition-colors hover:text-primary" aria-label="View invoice">
                            <span className="material-symbols-outlined">description</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-gutter right-gutter z-40">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary-container to-primary text-black shadow-lg shadow-[0_0_40px_-10px_rgba(36,216,255,0.3)] transition-transform hover:scale-110"
          aria-label="Contact support"
        >
          <span className="material-symbols-outlined">support_agent</span>
        </button>
      </div>
    </div>
  );
}
