import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(12,16,32,0)_0%,rgba(7,10,20,0.35)_35%,rgba(6,9,18,0.85)_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80 backdrop-blur">
            Trusted Discord Boosts
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(14,165,233,0.25)]">
            hdboosts
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Upgrade your server with premium Nitro boosts, delivered fast and securely. Simple pricing, instant setup, and 24/7 support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-semibold px-6 py-3 bg-gradient-to-r from-pink-500 via-sky-400 to-blue-600 text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition">
              Get Boosts Now
            </a>
            <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-semibold px-6 py-3 bg-white/10 text-white/90 border border-white/15 hover:bg-white/15 transition">
              See Features
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-xs text-white/60">
            <span>Instant delivery</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>99.9% uptime</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>Secure & trusted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
