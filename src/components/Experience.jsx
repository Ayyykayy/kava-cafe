import Reveal from './Reveal'
import { img } from '../data/img'
export default function Experience() {
  return (
    <section className="grid bg-mango text-forest md:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-20 md:px-16 md:py-32">
        <Reveal><p className="eyebrow">Sip · Smile · Repeat</p><h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">Good moments happen over <em>coffee.</em></h2><p className="mt-6 max-w-sm text-lg opacity-80">Bring a friend, a book or an appetite. We’ll bring the caffeine and the comfort.</p></Reveal>
      </div>
      <div className="min-h-[420px] overflow-hidden"><img loading="lazy" src={img.lemonade} alt="Blue lemonade on a tray" className="h-full w-full object-cover"/></div>
    </section>
  )
}
