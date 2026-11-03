import Reveal from './Reveal'
import { MapPin, Clock, Phone, Instagram } from 'lucide-react'
import { img } from '../data/img'
import { site } from '../data/siteData'
export default function VisitUs() {
  const rows = [[MapPin, site.address], [Clock, site.hours], [Phone, site.phone]]
  return (
    <section id="visit" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
      <Reveal>
        <p className="eyebrow">Visit Kava</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">Kava Café, <em className="text-clay">Vijayawada.</em></h2>
        <ul className="mt-8 space-y-4">{rows.map(([Ic, t], i) => <li key={i} className="flex gap-4"><Ic size={18} className="mt-1 shrink-0 text-clay"/><span>{t}</span></li>)}
          <li className="flex gap-4"><Instagram size={18} className="mt-1 shrink-0 text-clay"/><a className="underline underline-offset-4" href={site.instagram} target="_blank" rel="noreferrer">@{site.handle}</a></li></ul>
        <a href={site.maps} target="_blank" rel="noreferrer" className="btn mt-10 bg-forest text-cream hover:bg-clay">Find us</a>
      </Reveal>
      <Reveal delay={.15}><a href={site.maps} target="_blank" rel="noreferrer" aria-label="Open Kava Café in Google Maps" className="group relative block aspect-[4/3] overflow-hidden">
        <img loading="lazy" src={img.umbrella} alt="Outdoor seating at Kava Café" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
        <span className="absolute inset-0 grid place-items-center bg-forest/45 text-cream"><span className="flex items-center gap-2 text-xs uppercase tracking-[.2em]"><MapPin size={16}/> Get directions</span></span></a></Reveal>
    </section>
  )
}
