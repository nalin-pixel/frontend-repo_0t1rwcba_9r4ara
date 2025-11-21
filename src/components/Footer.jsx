import { Link } from 'react-router-dom'

export default function Footer(){
  const links = [
    {label:'Privacy', to:'#'},
    {label:'Security', to:'#'},
    {label:'Terms', to:'#'},
  ]
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-slate-300">
        <div>
          <div className="text-white font-semibold">One Health Global Technologies FZ LLC</div>
          <p className="text-sm mt-2">A sovereign-grade digital identity and verification layer for healthcare. Headquartered in the UAE. Operating globally.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="text-white font-medium">Company</div>
            <ul className="mt-2 space-y-1">
              {['Vision','Solutions','Regions','Technology','Impact & Metrics','Partners','Resources','About & Leadership','Contact'].map(l => (
                <li key={l}><Link to={`/${l.toLowerCase().replace(/ & |\s+/g,'-')}`} className="hover:text-white">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-medium">Legal</div>
            <ul className="mt-2 space-y-1">
              {links.map(l => (<li key={l.label}><a href={l.to} className="hover:text-white">{l.label}</a></li>))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 pb-8">© {new Date().getFullYear()} One Health Global Technologies FZ LLC. All rights reserved.</div>
    </footer>
  )
}
