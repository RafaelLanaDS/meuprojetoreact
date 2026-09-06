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
  const [open, setOpen] = useState(false)
  
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fushia-500/30">
      {/* NavBar */}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2 ">
            <Sparkles className="size-5 text-fuchsia-500" />
            <span className="font-bold  tracking-tight">Minha marca</span>
          </a>

          <nav className='hidden md:flex items-center gap-6 text-sm'>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} 
              className='hover:text-fuchsia-300 transition'>
                {link.label}
              </a>
            ))}
          </nav>

          <button className='md:hidden p-2 rounded-lg' onClick={() => setOpen(true)}>
            <Menu className='size-5'/>
          </button>

        </div>
        {open && (
          <div className='md:hidden'>
            <p>menu</p>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
