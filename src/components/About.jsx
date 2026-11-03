import Reveal from './Reveal'
import { img } from '../data/img'
export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
      <Reveal className="md:col-span-5"><div className="overflow-hidden"><img loading="lazy" src={img.service} alt="Kava Café team serving a table" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"/></div></Reveal>
      <div className="md:col-span-6 md:col-start-7">
        <Reveal><p className="eyebrow">About Kava</p></Reveal>
        <Reveal delay={.1}><h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">More than just <em className="text-clay">a café.</em></h2></Reveal>
        <Reveal delay={.2}><p className="mt-8 max-w-lg text-lg leading-relaxed opacity-80">Kava Café is Vijayawada’s spot for coffee, food and good vibes — your daily dose of caffeine and comfort. From sourdough toasts and smoothie bowls to pizzas, plates and weekend specials, every dish is made to be shared and remembered.</p></Reveal>
        <Reveal delay={.3}><p className="mt-5 max-w-lg text-lg leading-relaxed opacity-80">Pull up a chair indoors or under the umbrellas outside. Stay for one cup, or the whole afternoon.</p></Reveal>
      </div>
    </section>
  )
}
