export default function ValueProps(){
  const items = [
    {title:'Government grade verification', desc:'Aligned with national standards. Built for regulators, not just apps.'},
    {title:'Cross-border health identity', desc:'Portable, trusted credentials for practitioners and patients.'},
    {title:'Fraud reduction and patient safety', desc:'Tamper-evident logs, QR checks and risk flags reduce harm.'},
  ]
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {items.map((i)=> (
          <div key={i.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">{i.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
