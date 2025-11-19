import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-3 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-2xl">
          <div className="px-4 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-sky-400 to-blue-600 shadow-[0_0_30px] shadow-pink-500/20 grid place-items-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">hdboosts</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-sm text-white/80 hover:text-white transition">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
              <a href="#pricing" className="inline-flex items-center rounded-xl text-sm font-medium px-4 py-2 bg-gradient-to-r from-pink-500 via-sky-400 to-blue-600 text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition">
                Get Boosts
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              <a href="#features" className="block text-sm text-white/80 hover:text-white">Features</a>
              <a href="#pricing" className="block text-sm text-white/80 hover:text-white">Pricing</a>
              <a href="#faq" className="block text-sm text-white/80 hover:text-white">FAQ</a>
              <a href="#pricing" className="block w-full text-center rounded-xl text-sm font-medium px-4 py-2 bg-gradient-to-r from-pink-500 via-sky-400 to-blue-600 text-white">Get Boosts</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
