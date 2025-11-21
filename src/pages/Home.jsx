import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import ProblemSolution from '../components/ProblemSolution'
import WhoWeServe from '../components/WhoWeServe'
import MetricsBand from '../components/MetricsBand'

export default function Home(){
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <Hero />
      <ValueProps />
      <ProblemSolution />
      <WhoWeServe />
      <MetricsBand />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl text-white font-semibold">Investors and Ecosystem Partners</h3>
              <p className="mt-2 text-sm">Join a shared rail for safer, faster healthcare verification. Were building sovereign-grade digital public infrastructure with an aligned partnership model.</p>
            </div>
            <div className="md:text-right">
              <a href="/partners" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">Explore Strategic Partnerships →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
