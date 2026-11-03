import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { img } from '../data/img'
import { site } from '../data/siteData'
const up = d => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay: d, ease: [.22,.61,.36,1] } })
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-forest text-cream">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-20 pt-28 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <motion.p {...up(.1)} className="eyebrow">{site.tagline} · Vijayawada</motion.p>
          <h1 className="mt-6 font-serif text-[4.2rem] font-medium leading-[.95] sm:text-8xl lg:text-[9rem]">
            <motion.span {...up(.25)} className="block">Kava</motion.span>
            <motion.span {...up(.4)} className="block italic text-mango">Café</motion.span>
          </h1>
          <motion.p {...up(.6)} className="mt-6 max-w-md font-serif text-2xl italic opacity-90">{site.sub}</motion.p>
          <motion.div {...up(.75)} className="mt-9 flex flex-wrap gap-4">
            <a href="#about" className="btn bg-mango text-forest hover:-translate-y-0.5 hover:bg-cream">Explore Kava</a>
            <a href="#menu" className="btn border border-cream/50 hover:-translate-y-0.5 hover:border-mango hover:text-mango">Discover our menu</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: .3 }} className="relative mx-auto w-full max-w-sm overflow-hidden md:col-span-5 md:max-w-none">
          <div className="aspect-[3/4] overflow-hidden"><motion.img src={img.hero} alt="Mango french toast served at Kava Café" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 6, ease: 'easeOut' }} className="h-full w-full object-cover"/></div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2"><motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="block opacity-70"><ChevronDown/></motion.span></a>
    </section>
  )
}
