import { useState } from 'react'

import {motion} from 'framer-motion'

import {ArrowRight, Check, Menu, X, Star, Shield, Zap, Sparkles, Clock1} from 'lucide-react'

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

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y:0 }} 
            transition={{ duration: .5, delay: 1}}
            className='mt-14 grid grid-cols-3 gap-4'
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div key={label} className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'>
                <div className='flex items-center gap-3'>
                  {i == 0 && <Zap className='size-5 text-emeral-4'/>}
                  {i == 1 && <Shield className='size-5 text-sky-4'/>}
                  {i == 2 && <Star className='size-5 text-amber-4'/>}
                  <div className='font-semibold'>
                    {label}
                  </div>
                </div>
                <p className='text-sm text-slate-400 mt-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eveniet explicabo veniam consequatur odio similique odit vel.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* FEATURES */}
      <section id='features'  className='mx-auto max-w-6xl px-4 py-8' >
        <h2 className='text-3xl font-bold'>Tudo oque você precisa</h2>
        <p className='text-slate-300 mt-2  max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem saepe beatae placeat cumque laudantium magnam dolores impedit. </p>
        <div  className='mt-8 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Sparkles className='size-5 text-fuchsia-400'/>
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Star className='size-5 text-amber-400'/>
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Zap className='size-5 text-emerald-400'/>
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Shield className='size-5 text-sky-400'/>
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Sparkles className='size-5 text-fuchsia-400'/>
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualque tela",
              icon: <Zap className='size-5 text-emerald-400'/>
            }
          ].map((f) => (
            <div key={f.title} className='rounded-2xl border border-white/10 bg-white/[0.02] p-6'>
              <div className='flex items-center gap-3'>
                {f.icon}
                <p className='font-semibold'>{f.title}</p>
              </div>
              <p className='text-sm text-slate-400 mt-2'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Depoimentos */}
      <section id='testmonials' className='mx-auto max-w-6xl px-4 py-8'>
          <h2 className='text-3xl font-bold'>Quem usou, aprovou</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => 
              <blockquote key={i} className='rounded-2xl border bolder-white/10 p-6'>
                <div className="flex items-center gap-2 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) =>
                    <Star key={i} className='size-4 fill-current' />
                  )}
                </div>
                <p className='mt-3 text-slate-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis et porro deserunt perspiciatis. Quo harum dolor sequi, iusto debitis cum nam sint tempora? 
                </p>
                <footer className='mt-3 text-sm-text-slate-400'>
                  - Nome do cliente 
                </footer>
              </blockquote>
            )}
          </div>
      </section>
      {/* Preço */}
       <section id='testmonials' className='mx-auto max-w-6xl px-4 py-8 mb-20'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className='text-3xl font-bold'>Plano único, Sem complicação</h2>
              <p className='text-slate-300 mt-6  max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem saepe beatae placeat cumque laudantium magnam dolores impedit. 
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className='size-4 text-emerald-400'/> Benefício 1
                </li>
                <li className="flex items-center gap-2">
                  <Check className='size-4 text-emerald-400'/> Benefício 2
                </li>
                <li className="flex items-center gap-2">
                  <Check className='size-4 text-emerald-400'/> Benefício 3
                </li>
              </ul>
            </div>
            <div className='roundex-3xl border bolder-white/10 bg-white/[0.02] p-8 mb-20'>
              <div className='text-sm text-slate-400'>A partir de</div>
              <div className='text-5xl font-extrabold mt-2'>R$ 1990</div>
              <div className='text-sm text-slate-300 mt-4 flex items-center gap-2'>
                <Clock1 className='size-4 text-amber-400' />
                Somente hoje
              </div>
              <button href="" className="mt-6 cursor-pointer rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-400">compre Agora</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default App
