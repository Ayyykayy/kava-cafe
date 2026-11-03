import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { img } from '../data/img'
import { menu } from '../data/menuData'
import { site } from '../data/siteData'
export default function Menu() {
  const cats = Object.keys(menu), [cat, setCat] = useState(cats[0])
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal><p className="eyebrow">Menu preview</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">Coffee, food & <em className="text-clay">comfort.</em></h2></Reveal>
      <div role="tablist" className="mt-10 flex gap-2 overflow-x-auto pb-2">{cats.map(c =>
        <button key={c} role="tab" aria-selected={c === cat} onClick={() => setCat(c)} className={`shrink-0 border px-5 py-2.5 text-xs uppercase tracking-[.18em] transition ${c === cat ? 'border-forest bg-forest text-cream' : 'border-forest/25 hover:border-forest'}`}>{c}</button>)}</div>
      <AnimatePresence mode="wait">
        <motion.ul key={cat} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .4 }} className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {menu[cat].map(it => (
            <li key={it.name} className="group flex items-center gap-5 border-b border-forest/15 pb-6">
              <div className="h-24 w-24 shrink-0 overflow-hidden"><img loading="lazy" src={img[it.img]} alt={it.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110"/></div>
              <div className="flex-1"><h3 className="font-serif text-2xl leading-tight">{it.name}</h3>{it.desc && <p className="mt-1 text-sm opacity-70">{it.desc}</p>}</div>
              <span className="text-sm opacity-60">{it.price ? `₹${it.price}` : '₹ —'}</span>
            </li>))}
        </motion.ul>
      </AnimatePresence>
      <p className="mt-6 text-xs opacity-60">Prices coming soon — add them in src/data/menuData.js.</p>
      <a href={site.instagram} target="_blank" rel="noreferrer" className="btn mt-8 border border-forest hover:bg-forest hover:text-cream">Explore our menu</a>
    </section>
  )
}
