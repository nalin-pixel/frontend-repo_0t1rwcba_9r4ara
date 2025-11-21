export default function Partners(){
  const types = ['Governments','Councils','Multilateral bodies','Innovation hubs','Health systems','Investors']
  const models = [
    {title:'Government implementation partner', desc:'Co-deploy national registries with governance-grade controls.'},
    {title:'Country strategic partner or licensee', desc:'Operate local rails under a sovereign-aligned model.'},
    {title:'Investor and venture partner', desc:'Support scale-up of trusted health identity infrastructure.'},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Partners</h1>
        <p className="mt-3">One Health Global is built to be a shared rail, not a private silo.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {types.map(t => (<div key={t} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center text-sm">{t}</div>))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {models.map(m => (
            <div key={m.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="text-white font-semibold">{m.title}</div>
              <p className="text-sm mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
        <a href="/contact" className="inline-block mt-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3">Request Partnership Pack</a>
      </section>
    </main>
  )
}
