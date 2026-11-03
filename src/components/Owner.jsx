import Reveal from './Reveal'
import { img } from '../data/img'
import { owner } from '../data/siteData'

export default function Owner() {
    return (
        <section id="owner" className="bg-mango/25 py-24 text-forest md:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-10">
                <Reveal className="md:col-span-4">
                    <div className="aspect-[4/5] overflow-hidden">
                        <img loading="lazy" src={img[owner.photo] || img.logo} alt={owner.name} className="h-full w-full object-cover" />
                    </div>
                </Reveal>
                <div className="md:col-span-7 md:col-start-6">
                    <Reveal><p className="eyebrow">The person behind Kava</p></Reveal>
                    <Reveal delay={.1}>
                        <blockquote className="mt-6 font-serif text-3xl italic leading-snug md:text-5xl">
                            <span className="text-clay">“</span>{owner.quote}<span className="text-clay">”</span>
                        </blockquote>
                    </Reveal>
                    <Reveal delay={.2}>
                        <p className="mt-8 font-serif text-2xl">{owner.name}</p>
                        <p className="eyebrow mt-1">{owner.role}</p>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}