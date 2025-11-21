import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/vision', label: 'Vision' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/regions', label: 'Regions' },
  { to: '/technology', label: 'Technology' },
  { to: '/impact', label: 'Impact & Metrics' },
  { to: '/partners', label: 'Partners' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About & Leadership' },
  { to: '/contact', label: 'Contact / Book a Strategy Call' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-slate-200/90 hover:text-white transition-colors'
  const linkActive = 'text-white'

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_0_25px_rgba(16,185,129,0.35)]" />
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">One Health Global</div>
              <div className="text-xs text-emerald-300/80">Technologies FZ LLC</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
            >
              Request Confidential Briefing
            </Link>
          </nav>

          <button
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white/90 hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/70" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-slate-900 border-l border-white/10 shadow-2xl">
            <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
              <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400" />
                <div className="text-white font-semibold">One Health Global</div>
              </Link>
              <button className="h-10 w-10 grid place-items-center text-white/90" onClick={() => setOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>
            <div className="p-4 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block px-3 py-2 rounded-lg ${linkBase} ${isActive ? 'bg-white/10 ' + linkActive : 'hover:bg-white/5'}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block text-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2"
              >
                Request Confidential Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
