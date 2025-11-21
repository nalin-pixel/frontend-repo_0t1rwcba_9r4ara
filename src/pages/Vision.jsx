export default function Vision(){
  const phases = [
    {phase:'Phase 1', title:'Practitioner verification', desc:'National practitioner registry with licensing, renewals and QR-coded IDs.'},
    {phase:'Phase 2', title:'Patient & facility verification', desc:'Trusted identity for patients and vetted records for facilities.'},
    {phase:'Phase 3', title:'Integrations & analytics', desc:'APIs to national systems and insights for safety, efficiency and trust.'},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">A Trusted Health Identity for Every Practitioner and Patient</h1>
        <p className="mt-4 text-lg">Protect citizens, accelerate workforce mobility and enable safer hospitals. Built to align with public mandates and global health goals.</p>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {phases.map(p => (
              <div key={p.title} className="rounded-xl bg-slate-900/60 border border-white/10 p-5">
                <div className="text-emerald-300 text-sm font-medium">{p.phase}</div>
                <div className="text-white font-semibold mt-1">{p.title}</div>
                <p className="text-sm mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-6">
          <h2 className="text-white font-semibold text-2xl">Aligned with Global Goals</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Anchored to WHO standards and national regulatory frameworks</li>
            <li>Supports Universal Health Coverage and digital public infrastructure approaches</li>
            <li>Contributes to SDG 3: Good Health & Well-being</li>
            <li>Respectful of sovereignty, privacy and data residency requirements</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
