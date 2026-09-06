import { useState } from 'react'

import {motion} from 'framer-motion'

import {ArrowRight, Check, Menu, X, Star, Shield, Zap, Sparkles} from 'lucide-react'

const navLinks = [
  {href: "#features", label: "Features"},
  {href: "#testimonials", label: "Testimonials"},
  {href: "#pricing", label: "Pricing"},
  {href: "#faq", label: "FAQ"},
  // esses são os links que vão aparecer no menu de navegação
]

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fushia-500/30">
      {/* NavBar */}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div>

          <a href="#" className="flex items-center gap-2 ">
            <Sparkles className="size-5 text-fuchsia-500" />
            <span className="font-bold  tracking-tight">Minha marca</span>
          </a>

          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default App
