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
            <div className='fixed bg-black/60' onClick={() => setOpen(false)}>
                <div className='fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-2'>
                      <Sparkles className='size-6 text-fuchsia-400'/>
                      <span className='font-semibold'>Minha Marca</span>
                    </div>
                    <button className='p-2 rounded-lg' onClick={() => setOpen(false)}>
                      <X className='size-5'/>
                    </button>
                  </div>
                  <div className='flex flex-col gap-4 bg-slate-900 p-4 w-90'>
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className='text-slate-200' onClick={() => setOpen(false)}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        )}
      </header>
      {/* HERO */}
      <section className='relative overflow-hidden'>
        <div className='mx-auto max-w-6xl px-4 py-20 relative'>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y:0 }} 
            transition={{ duration: .1 }}
            className='text-6xl font-extrabold'
          >
            Acelere  sua presença online com uma landing  <span className='bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300'>simples e eficaz </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y:0 }} 
            transition={{ duration: .5, delay: 1}}
            className='mt-5 text-slate-300 max-w-2xl'
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui explicabo in at impedit cumque temporibus maiores fuga expedita enim modi delectus necessitatibus architecto, quos, ab omnis quis quo minus vero!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y:0 }} 
            transition={{ duration: .5, delay: 1}}
            className='mt-8 flex flex-row gap-3'
          >
            <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition'> 
              Comece Agora <ArrowRight className='size-4' />
            </a>
            <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium borde-white/10 hover:bg-white/5  transition'> 
              Ver Recursos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
