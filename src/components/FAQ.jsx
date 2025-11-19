const faqs = [
  {
    q: "How fast are boosts delivered?",
    a: "In most cases, boosts are applied within minutes after payment.",
  },
  {
    q: "Are the boosts safe?",
    a: "Yes. We use trusted accounts and follow best practices to ensure stability.",
  },
  {
    q: "Do you offer refunds?",
    a: "If boosts are not delivered or there's a technical issue on our side, we will make it right.",
  },
  {
    q: "Can I change servers later?",
    a: "Absolutely. Contact support and we can help transfer boosts to a new server.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-white font-medium">{f.q}</h3>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
