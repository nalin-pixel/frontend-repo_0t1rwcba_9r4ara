export default function Impact(){
  const tiles = [
    {k:'Practitioners verified', v:'820,000'},
    {k:'Facilities mapped', v:'12,400'},
    {k:'Average verification time', v:'7s'},
    {k:'Estimated fraud reduction', v:'-38%'},
    {k:'Countries in pipeline', v:'18'},
  ]
  const cases = [
    {title:'Reducing credential fraud risk for a national regulator', desc:'Consolidated registers and audit trails cut manual review times and surface risk early.'},
    {title:'Speeding up hiring for hospitals', desc:'Instant checks help HR verify clinicians faster and safely deploy staff.'},
    {title:'Strengthening cross-border trust', desc:'Regional rails enable faster mobility with verified identities.'},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Impact & Metrics</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiles.map(t => (
            <div key={t.k} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-2xl text-white font-semibold">{t.v}</div>
              <div className="text-sm mt-1">{t.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="text-white font-semibold">{c.title}</div>
              <p className="text-sm mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-6">
          <div className="text-white font-semibold text-2xl">How we measure impact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Safety: fewer unsafe practitioners at the point of care</li>
            <li>Efficiency: faster verification and hiring cycles</li>
            <li>Trust: auditable processes for public assurance</li>
            <li>Economic savings: reduced fraud and administrative burden</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
