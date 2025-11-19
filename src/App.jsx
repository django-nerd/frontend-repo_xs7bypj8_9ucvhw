import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Galaxy gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(2,6,23,0)_0%,rgba(14,165,233,0.15)_35%,rgba(2,6,23,0.8)_55%,rgba(2,6,23,1)_70%)]"></div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} hdboosts. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <a href="#faq" className="text-white/70 hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
