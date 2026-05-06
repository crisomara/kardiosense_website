const ForClinicians = () => (
  <section id="clinicians" className="bg-teal text-white py-28">
    <div className="container mx-auto grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-6">For Clinicians</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Built for the rooms<br />where decisions are made.
        </h2>
      </div>
      <div className="md:col-span-7 reveal">
        <p className="text-justify text-white/90 leading-relaxed text-lg mb-6">
          Kardiosense gives frontline clinicians a clinical-grade decision-support tool that works in the
          rural health post, the urban referral hospital, and everything in between. Our explainable AI
          surfaces the signals behind every risk score, so you stay in control of the diagnosis.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            "Clinical-grade ECG analysis",
            "Explainable, auditable AI outputs",
            "Works offline in rural clinics",
            "OpenMRS & DHIS2 integration",
            "PDF reports shareable via WhatsApp",
            "No subscription for core features",
          ].map((f) => (
            <li key={f} className="flex items-start gap-3 text-white/95">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-accent shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href="#waitlist" className="inline-flex rounded-full px-7 py-3.5 font-medium bg-white text-teal hover:bg-cyan-accent hover:text-near-black transition">
          Request a Clinical Demo
        </a>
      </div>
    </div>
  </section>
);

export default ForClinicians;
