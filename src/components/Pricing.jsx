const tiers = [
  {
    name: "Starter",
    price: "$9.99",
    per: "per month",
    boosts: "2 Boosts",
    cta: "Get Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$24.99",
    per: "per month",
    boosts: "6 Boosts",
    cta: "Get Pro",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$44.99",
    per: "per month",
    boosts: "14 Boosts",
    cta: "Get Elite",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(236,72,153,0.12),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Pick the plan that fits your server. Upgrade or downgrade anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl p-6 border backdrop-blur-sm ${
              t.highlight
                ? 'bg-gradient-to-b from-white/10 to-white/5 border-white/20 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.35)]'
                : 'bg-white/5 border-white/10'
            }`}>
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500 via-sky-400 to-blue-600 text-white border border-white/20 shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-white">{t.price}</span>
                <span className="text-sm text-white/60">{t.per}</span>
              </div>
              <p className="mt-3 text-white/80">{t.boosts}</p>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>Instant delivery</li>
                <li>Region-free</li>
                <li>Dedicated support</li>
              </ul>

              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl text-sm font-semibold px-4 py-2 bg-gradient-to-r from-pink-500 via-sky-400 to-blue-600 text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition">
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
