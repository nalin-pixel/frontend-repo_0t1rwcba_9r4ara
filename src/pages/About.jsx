export default function About(){
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">About & Leadership</h1>
        <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-white font-semibold text-xl">Company story</h2>
          <p className="text-sm mt-2">One Health Global was founded to solve global medical credential fraud and verification fragmentation. Headquartered in a UAE free zone, operating globally with regional teams.</p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Founder</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-4 items-start">
              <div className="aspect-square rounded-xl bg-white/5 border border-white/10" />
              <div className="sm:col-span-2">
                <div className="text-white font-medium">Dr. Williams S. K. Anarfi</div>
                <p className="text-sm mt-2">Visionary health tech founder with experience across medical registries, hospitals, wellness and multi-country digital health initiatives.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Advisory & leadership</h3>
            <p className="text-sm mt-2">Reserved cards for medical, legal, technology and policy advisors.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1,2,3,4].map(i => (<div key={i} className="h-20 rounded-xl bg-white/5 border border-white/10" />))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
