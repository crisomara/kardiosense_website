const Features = () => (
  <section className="bg-navy text-white py-28 relative overflow-hidden">
    <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">Our Technology</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          Medical-grade intelligence.<br />Accessible to all.
        </h2>
      </div>

      <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden border border-white/10"
           style={{ background: "linear-gradient(135deg, hsl(var(--teal)/0.18), hsl(var(--cyan-accent)/0.12))" }}>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
          <path className="animate-ecg" d="M0 200 L300 200 L320 200 L340 140 L360 260 L380 100 L400 300 L430 200 L900 200 L920 200 L940 140 L960 260 L980 100 L1000 300 L1030 200 L1200 200"
            stroke="hsl(var(--cyan-accent))" strokeWidth="2" fill="none" />
        </svg>
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-cyan-accent text-sm uppercase tracking-widest mb-4">Hero Capability</p>
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              AI-Powered MI Prediction
            </h3>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl">
              The only solution that fuses ECG signals with clinical biomarkers to predict heart attack risk
              <span className="text-cyan-accent"> before it happens</span> — offline, in under 60 seconds,
              for anyone, anywhere.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Multi-modal", "ECG + Clinical fusion"],
                ["On-device", "Zero internet needed"],
                ["<60s", "End-to-end inference"],
                ["Explainable", "Clinician-ready report"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="font-serif text-2xl text-cyan-accent">{k}</div>
                  <div className="text-white/70 text-sm mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
