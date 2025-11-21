import Spline from '@splinetool/react-spline'
import { ArrowRight, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-20 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 py-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-emerald-300/90 mb-6">
            Sovereign-grade digital identity for healthcare
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            The Digital Identity Layer for Global Healthcare
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            One sovereign ready platform for verifying practitioners, patients, and institutions across borders.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_35px_-10px_rgba(16,185,129,0.7)]">
              Request Government Briefing <ArrowRight size={18} />
            </Link>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">
              <FileDown size={18} /> Download Executive Overview (PDF)
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["Government grade verification","Cross border health identity","Fraud reduction and patient safety"].map((t) => (
              <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-slate-200">
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}
