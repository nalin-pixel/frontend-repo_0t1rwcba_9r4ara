export default function Solutions(){
  const sections = [
    {title:'For Governments & Regulators', desc:'Build a unified national practitioner registry with governance-grade workflows.', items:['National practitioner registry','Licensing and renewal workflows','QR coded digital ID cards','Compliance dashboards and alerts']},
    {title:'For Hospitals & Health Systems', desc:'Verify staff credentials and monitor facilities with clear oversight.', items:['Staff credential verification','Facility level dashboards','API plug in to HR and credentialing systems']},
    {title:'For Insurers, Embassies, Employers', desc:'Instant verification and risk intelligence to reduce fraud and delays.', items:['Instant verification portal','Risk scoring and fraud flags','Secure audit trail of checks']},
    {title:'For Practitioners & Patients', desc:'Secure profiles and portable identity across borders.', items:['Secure profile and ID','Portable identity across borders','Transparency on license status']},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Solutions</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {sections.map(s => (
            <div key={s.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-white font-semibold">{s.title}</div>
              <p className="text-sm mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.items.map(i => (<li key={i} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2">{i}</li>))}
              </ul>
              <a href="/contact" className="inline-block mt-4 text-emerald-300 hover:text-emerald-200 text-sm">Talk to our team →</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
