export default function ProblemSolution(){
  const problems = [
    'Fake doctors and forged licenses',
    'Fragmented registers and siloed data',
    'Slow manual verification and paper processes',
    'Cross-border worker migration chaos',
  ]
  const solutions = [
    'Unified national registry with global rails',
    'Instant QR verification at point of care',
    'Secure APIs into HR, council and payer systems',
    'Dashboards for regulators and facilities',
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">The problem</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {problems.map(p=> <li key={p} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">{p}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">The solution</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {solutions.map(p=> <li key={p} className="rounded-xl bg-emerald-500/10 border border-emerald-400/20 px-4 py-3">{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
