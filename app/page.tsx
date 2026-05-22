export default function Home() {
  const faqs = [
    {
      q: 'What is bus factor and why does it matter?',
      a: 'Bus factor is the minimum number of team members who, if suddenly unavailable, would put a project at risk. A low bus factor means critical knowledge is concentrated in too few people — a major organizational risk.'
    },
    {
      q: 'How does the analysis work?',
      a: 'We connect to your GitHub or GitLab account via OAuth, then analyze commit history, code ownership patterns, PR reviews, and documentation coverage using AI to surface knowledge silos and generate risk scores per repository and team member.'
    },
    {
      q: 'Is my code or data stored?',
      a: 'No source code is stored. We only process metadata — commit authors, file paths, timestamps, and review activity — to compute risk scores. All analysis happens in-memory and results are stored encrypted per your account.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          For Engineering Managers &amp; CTOs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Identify Critical Knowledge<br />
          <span className="text-[#58a6ff]">Dependencies in Your Team</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub or GitLab to analyze commit patterns, code ownership, and documentation coverage. Get AI-powered bus factor scores and actionable recommendations to reduce knowledge silos before they become crises.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Analyzing — $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: '🔍', title: 'Commit Analysis', desc: 'Map who owns what across every repo and module.' },
          { icon: '🤖', title: 'AI Risk Scoring', desc: 'Get per-member and per-repo bus factor scores instantly.' },
          { icon: '📋', title: 'Action Plans', desc: 'Receive prioritized steps to redistribute knowledge.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to eliminate knowledge risk</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'Unlimited repositories',
              'GitHub & GitLab integration',
              'AI-powered bus factor scores',
              'Weekly risk digest emails',
              'Team knowledge heat maps',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Bus Factor Calculator. Built for engineering leaders.
      </footer>
    </main>
  )
}
