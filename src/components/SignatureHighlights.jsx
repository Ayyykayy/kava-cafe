import Reveal from './Reveal'
import { img } from '../data/img'

const items = [
  ['french-toast', 'Mango French Toast'],
  ['smoothie-bowl', 'Green Smoothie Bowl'],
  ['egg-pizza', 'Egg Roast Pizza']
]

export default function SignatureHighlights() {
  return (
    <section className="bg-mango/25 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Signatures</p>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl">Made to <em className="text-clay">crave.</em></h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(([k, n], i) => (
            <Reveal key={k} delay={i * .12}>
              <figure>
                <div className="aspect-[3/4] overflow-hidden">
                  <img loading="lazy" src={img[k]} alt={n} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <figcaption className="mt-3 font-serif text-2xl italic">{n}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}