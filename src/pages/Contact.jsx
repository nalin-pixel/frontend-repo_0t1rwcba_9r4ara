export default function Contact(){
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Contact / Book a Strategy Call</h1>
        <p className="mt-2 text-sm">For governments, regulators, and strategic investors only. Public demo access is not available for this project. Please request a confidential briefing.</p>
        <form className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10" placeholder="Name" />
          <input className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10" placeholder="Role" />
          <input className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 sm:col-span-2" placeholder="Organization" />
          <input className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10" placeholder="Country" />
          <input type="email" className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10" placeholder="Email" />
          <input className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 sm:col-span-2" placeholder="WhatsApp or phone" />
          <select className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 sm:col-span-2">
            <option>Area of interest</option>
            <option>Government</option>
            <option>Regulator</option>
            <option>Health System</option>
            <option>Investor</option>
            <option>Innovation Hub</option>
            <option>Other</option>
          </select>
          <div className="sm:col-span-2 grid grid-cols-2 gap-3">
            {['Government','Regulator','Health System','Investor','Innovation Hub','Other'].map(o => (
              <label key={o} className="flex items-center gap-2 text-sm"><input type="checkbox" /> {o}</label>
            ))}
          </div>
          <label className="sm:col-span-2 text-sm flex items-center gap-2"><input type="checkbox" /> NDA ready</label>
          <button className="sm:col-span-2 mt-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3">Request Confidential Briefing</button>
          <p className="sm:col-span-2 text-xs text-slate-400">We respect your privacy. Your information will be used solely to coordinate a confidential discussion and will not be shared.</p>
        </form>
      </section>
    </main>
  )
}
