import { Zap, Shield, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    desc: "Boosts applied to your server within minutes — no delays, no hassle.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "We use trusted accounts and follow best practices for long-term stability.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Always-on support to help with setup, transfers, or any questions.",
  },
  {
    icon: Star,
    title: "Flexible Plans",
    desc: "Pick the level you need — scale up or down anytime with no fuss.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why choose hdboosts?</h2>
          <p className="mt-3 text-white/70">Built for reliability, speed, and peace of mind.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/7.5 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.35)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-sky-400 to-blue-600 grid place-items-center text-white shadow-lg shadow-pink-500/20">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
