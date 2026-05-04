export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For chronic illness patients &amp; caregivers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track symptoms and medications<br />
          <span className="text-[#58a6ff]">over time</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Visual timeline of symptoms, medications, and triggers with correlation analysis and doctor-ready PDF report generation.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start tracking — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📈', label: 'Interactive Timeline', desc: 'Log and visualize every symptom and dose' },
          { icon: '🔗', label: 'Correlation Analysis', desc: 'Discover triggers and patterns automatically' },
          { icon: '📄', label: 'Doctor Reports', desc: 'Export clean PDF summaries in one click' },
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited symptom & medication logs',
              'Interactive visual timeline',
              'Trigger correlation analysis',
              'PDF doctor report export',
              'Caregiver sharing access',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is SymptomTrack for?',
              a: 'Anyone managing a chronic condition — fibromyalgia, Crohn\'s, migraines, lupus, and more — or caregivers tracking a loved one\'s health.',
            },
            {
              q: 'Can I share my data with my doctor?',
              a: 'Yes. Generate a clean, printable PDF report covering any date range and bring it to your next appointment.',
            },
            {
              q: 'Is my health data private?',
              a: 'Absolutely. Your data is encrypted at rest and in transit, never sold, and only accessible by you and anyone you explicitly invite.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} SymptomTrack. All rights reserved.</p>
      </footer>
    </main>
  )
}
