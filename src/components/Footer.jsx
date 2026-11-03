import { img } from '../data/img'
import { links, site } from '../data/siteData'
export default function Footer() {
  return (
    <footer className="bg-forest px-5 py-16 text-cream md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
      <div><img src={img.logo} alt="Kava Café" className="h-14 w-14 rounded-full object-cover"/><p className="mt-4 font-serif text-2xl italic">{site.sub}</p></div>
      <nav aria-label="Footer"><ul className="space-y-2 text-sm">{links.map(([l, id]) => <li key={id}><a href={`#${id}`} className="opacity-80 hover:text-mango hover:opacity-100">{l}</a></li>)}</ul></nav>
      <div className="space-y-2 text-sm opacity-80"><p>{site.address}</p><a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-mango">Instagram @{site.handle}</a></div>
    </div><p className="mx-auto mt-12 max-w-7xl border-t border-cream/15 pt-6 text-xs opacity-60">© {new Date().getFullYear()} Kava Café, Vijayawada. Demo website.</p></footer>
  )
}
