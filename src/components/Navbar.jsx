import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { img } from '../data/img'
import { links } from '../data/siteData'
export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const go = () => setOpen(false)
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-500 ${solid || open ? 'bg-forest/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" className="flex items-center gap-3"><img src={img.logo} alt="Kava Café logo" className="h-9 w-9 rounded-full object-cover"/><span className="font-serif text-xl tracking-[.2em]">KAVA CAFÉ</span></a>
        <ul className="hidden gap-8 md:flex">{links.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-xs uppercase tracking-[.2em] opacity-80 transition hover:text-mango hover:opacity-100">{l}</a></li>)}</ul>
        <button className="p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>
      <AnimatePresence>{open && <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .4 }} className="overflow-hidden px-5 md:hidden">
        {links.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={go} className="block border-t border-cream/15 py-4 font-serif text-2xl">{l}</a></li>)}</motion.ul>}</AnimatePresence>
    </header>
  )
}
