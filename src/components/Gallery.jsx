import Reveal from './Reveal'
import { Instagram } from 'lucide-react'
import { img } from '../data/img'
import { gallery } from '../data/galleryData'
import { site } from '../data/siteData'
export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal><p className="eyebrow">Gallery</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">From the <em className="text-clay">feed.</em></h2></Reveal>
      <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[230px] md:grid-cols-4">
        {gallery.map((g, i) => <Reveal key={i} delay={(i % 4) * .08} y={16} className={`overflow-hidden ${g.span}`}><img loading="lazy" src={img[g.img]} alt={g.img.replace(/-/g, ' ')} className="h-full w-full object-cover transition duration-700 hover:scale-105" /></Reveal>)}
      </div>
      <a href={site.instagram} target="_blank" rel="noreferrer"
        className="btn mt-10 inline-flex items-center gap-3 bg-forest text-cream hover:bg-clay">
        <Instagram size={16} /> Follow the Kava experience
      </a>
    </section>
  )
}
