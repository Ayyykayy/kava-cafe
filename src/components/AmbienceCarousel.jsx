import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { img } from '../data/img'
import { slides } from '../data/ambienceData'
const pad = n => String(n).padStart(2, '0')
export default function AmbienceCarousel() {
  const [[i, dir], set] = useState([0, 1]), [paused, setPaused] = useState(false)
  const go = d => set(([c]) => [(c + d + slides.length) % slides.length, d])
  useEffect(() => { if (paused) return; const t = setInterval(() => go(1), 6000); return () => clearInterval(t) }, [paused, i])
  const s = slides[i]
  return (
    <section id="experience" className="bg-forest py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="eyebrow">The Kava experience</p>
        <h2 className="mt-4 font-serif text-5xl md:text-8xl">Step into <em className="text-mango">Kava.</em></h2>
        <p className="mt-4 font-serif text-2xl italic opacity-80">Every corner has a story. Every visit has a feeling.</p>
      </div>
      <div role="region" aria-roledescription="carousel" aria-label="Kava Café ambience" tabIndex={0}
        onKeyDown={e => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1) }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
        className="mx-auto mt-12 max-w-[1500px] px-0 md:px-6">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9]">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div key={i} custom={dir} className="absolute inset-0 touch-pan-y" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={.2}
              onDragEnd={(_, { offset }) => { if (offset.x < -60) go(1); else if (offset.x > 60) go(-1) }}
              variants={{ in: d => ({ x: `${d * 100}%` }), mid: { x: 0 }, out: d => ({ x: `${-d * 100}%` }) }} initial="in" animate="mid" exit="out" transition={{ duration: .7, ease: [.65,0,.35,1] }}>
              <motion.img src={img[s.img]} alt={s.title} draggable={false} initial={{ scale: 1 }} animate={{ scale: 1.07 }} transition={{ duration: 8, ease: 'linear' }} className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent"/>
            </motion.div>
          </AnimatePresence>
          <motion.div key={'c' + i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: .6 }} className="pointer-events-none absolute bottom-6 left-5 right-5 md:bottom-10 md:left-10">
            <h3 className="font-serif text-3xl md:text-5xl">{s.title}</h3><p className="mt-1 max-w-md text-sm opacity-85">{s.text}</p>
          </motion.div>
        </div>
        <div className="mt-5 flex items-center justify-between px-5 md:px-0">
          <p className="font-serif text-xl tracking-widest" aria-live="polite">{pad(i + 1)} / {pad(slides.length)}</p>
          <div className="flex gap-3">{[[-1, ArrowLeft, 'Previous slide'], [1, ArrowRight, 'Next slide']].map(([d, Ic, l]) =>
            <button key={l} aria-label={l} onClick={() => go(d)} className="grid h-12 w-12 place-items-center rounded-full border border-cream/40 transition hover:-translate-y-0.5 hover:border-mango hover:bg-mango hover:text-forest"><Ic size={18}/></button>)}</div>
        </div>
      </div>
    </section>
  )
}
