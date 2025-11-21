export default function WhoWeServe(){
  const audiences = [
    {title:'Governments & Ministries of Health', desc:'National scale registries, governance and oversight.'},
    {title:'Medical & Nursing Councils', desc:'Licensing, renewal and disciplinary workflows.'},
    {title:'Hospitals & Health Systems', desc:'Credentialing, workforce mobility and safety.'},
    {title:'Insurers & Embassies', desc:'Eligibility checks and cross-border verification.'},
    {title:'Multilateral Partners', desc:'Alignment with global health goals and DPI.'},
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white font-semibold">Who we serve</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map(a => (
            <div key={a.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="text-white font-medium">{a.title}</div>
              <div className="text-slate-300 mt-2 text-sm">{a.desc}</div>
              <button className="mt-4 text-emerald-300 hover:text-emerald-200 text-sm">Talk to our team →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
