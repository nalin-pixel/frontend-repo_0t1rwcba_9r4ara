export default function MetricsBand(){
  const metrics = [
    {k:'Countries engaged', v:'12'},
    {k:'Practitioner profiles mapped', v:'1.2M'},
    {k:'Avg. verification time', v:'7s'},
  ]
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map(m => (
          <div key={m.k} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-3xl font-semibold text-white">{m.v}</div>
            <div className="text-slate-300 mt-1 text-sm">{m.k}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
