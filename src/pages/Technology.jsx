export default function Technology(){
  const layers = [
    {title:'Digital Identity Core', desc:'Secure profiles for practitioners, patients and facilities with encryption and role-based access.'},
    {title:'Verification Engine', desc:'Rules, workflows and QR checks to confirm identity and credentials in seconds.'},
    {title:'Governance & Audit Layer', desc:'Tamper-evident logging with blockchain-backed audit trails for trust and accountability.'},
    {title:'API & Integration Layer', desc:'Standards-based APIs to connect to national ID, civil registration and health information systems.'},
  ]
  const highlights = [
    {title:'Blockchain audit logging', desc:'Immutable, verifiable event trails that make tampering evident.'},
    {title:'AI anomaly detection', desc:'Model-assisted risk flags for credential fraud patterns.'},
    {title:'Security by design', desc:'Encryption, access controls and data residency options where required.'},
    {title:'Interoperability', desc:'Integrates with existing national systems to avoid rip-and-replace.'},
  ]
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-semibold">Technology</h1>
        <p className="mt-3 max-w-3xl">Built for trust, security and interoperability. We keep the language simple and the engineering rigorous.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {layers.map(l => (
            <div key={l.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-white font-semibold">{l.title}</div>
              <p className="text-sm mt-2">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(h => (
            <div key={h.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="text-white font-semibold">{h.title}</div>
              <p className="text-sm mt-2">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
