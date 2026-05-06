const Hero = () => {
  return (
    <section id="home" className="relative bg-navy text-white pt-36 pb-24 overflow-hidden">
      {/* Animated ECG */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-64 opacity-30"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className="animate-ecg"
          d="M0 100 L200 100 L230 100 L250 60 L270 140 L290 40 L310 160 L340 100 L600 100 L630 100 L650 60 L670 140 L690 40 L710 160 L740 100 L1000 100 L1030 100 L1050 60 L1070 140 L1090 40 L1110 160 L1140 100 L1600 100"
          stroke="hsl(var(--cyan-accent))"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-accent mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-soft" />
            Born in Uganda · Built for the world
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-in">
            Taking care of your heart,<br />
            <span className="text-gradient-teal">beat by beat.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-in">
            Kardiosense is an AI-powered cardiac intelligence platform that predicts heart attack risk
            from ECG signals and clinical biomarkers — for patients and clinicians, anywhere, even offline.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <a href="#waitlist" className="rounded-full px-7 py-3.5 font-medium gradient-teal text-white hover:opacity-90 transition">
              Join the Waitlist
            </a>
            <a href="#how" className="rounded-full px-7 py-3.5 font-medium border border-white/30 text-white hover:bg-white/10 transition">
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            { n: "1.5M+", t: "CVD deaths per year in sub-Saharan Africa" },
            { n: "60s", t: "to a full cardiac risk assessment" },
            { n: "0", t: "internet required — works fully offline" },
          ].map((s) => (
            <div key={s.n} className="reveal">
              <div className="font-serif text-4xl md:text-5xl text-cyan-accent">{s.n}</div>
              <div className="text-white/70 mt-2 text-sm">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
