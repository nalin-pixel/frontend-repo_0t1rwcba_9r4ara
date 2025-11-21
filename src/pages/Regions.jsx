import { useState } from 'react'

const tabs = [
  {key:'africa', label:'Africa', brand:'African Medical Registry'},
  {key:'mena', label:'MENA', brand:'MENA Medical Registry'},
  {key:'europe', label:'Europe', brand:'European Medical Registry'},
  {key:'apac', label:'Asia Pacific', brand:'Asia Pacific Medical Registry'},
  {key:'americas', label:'Americas', brand:'Americas Medical Registry'},
]

const content = {
  africa: {
    challenges: 'Rapid workforce growth, varied regulatory maturity, and high cross-border mobility create verification gaps and patient safety risks.',
    approach: 'We work with ministries and councils on pilot-ready registries, with country license models and shared rails for regional interoperability.'
  },
  mena: {
    challenges: 'Sovereignty, data residency, and a diverse mix of public and private providers require strong governance and trust.',
    approach: 'UAE-based operations with options for in-country hosting, aligned to national standards and GCC mobility goals.'
  },
  europe: {
    challenges: 'Complex multi-country regulation and portability requirements across the single market.',
    approach: 'API-first verification layer that complements existing registries and supports rapid cross-border checks.'
  },
  apac: {
    challenges: 'Large populations, federal structures and fast-growing private health sectors.',
    approach: 'Scalable cloud with local deployment options and anti-fraud analytics for major hubs.'
  },
  americas: {
    challenges: 'Fragmented registries and credentialing processes across states and countries.',
    approach: 'Unified verification rails that reduce onboarding time and improve safety for employers and payers.'
  },
}

export default function Regions(){
  const [active, setActive] = useState('africa')
  const region = content[active]
  const priority = ['UAE','Saudi Arabia','Ghana','Nigeria','South Africa','Uganda','Kenya','India','UK','USA']
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Regions</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button key={t.key} onClick={()=>setActive(t.key)} className={`px-4 py-2 rounded-full border ${active===t.key ? 'bg-emerald-500 text-slate-900 border-emerald-400' : 'bg-white/5 text-white border-white/10'}`}>{t.label}</button>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="text-emerald-300 text-sm">{tabs.find(t=>t.key===active).brand}</div>
          <div className="grid md:grid-cols-2 gap-6 mt-3">
            <div>
              <h3 className="text-white font-semibold">Regional challenges</h3>
              <p className="text-sm mt-2">{region.challenges}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Our engagement model</h3>
              <p className="text-sm mt-2">{region.approach}</p>
              <a href="/contact" className="inline-block mt-4 text-emerald-300 hover:text-emerald-200 text-sm">Become a Country Lead Partner →</a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-white font-semibold mb-2">Priority Countries</div>
          <div className="flex flex-wrap gap-2">
            {priority.map(p => (<span key={p} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">{p}</span>))}
          </div>
        </div>
      </section>
    </main>
  )
}
