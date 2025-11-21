export default function Resources(){
  const items = [
    {title:'Executive Briefing', desc:'Concise overview for cabinet, ministers and permanent secretaries.'},
    {title:'Policy & Governance Notes', desc:'Guidance on regulatory alignment, sovereignty and data residency.'},
    {title:'Technical Overview', desc:'Architecture and security practices in plain language.'},
    {title:'Frequently Asked Questions', desc:'Straightforward answers for procurement and governance teams.'},
    {title:'Media & Speaking', desc:'Quotes, photos and upcoming events.'},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Resources</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(i => (
            <div key={i.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-white font-semibold">{i.title}</div>
              <p className="text-sm mt-2">{i.desc}</p>
              <a href="#" className="inline-block mt-3 text-emerald-300 hover:text-emerald-200 text-sm">Open →</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
