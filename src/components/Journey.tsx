const milestones = [
  { date: "August 2024", title: "Founded in Uganda", body: "Kardiosense is born in Kampala. We started the project as an IoT device to just capture ecg signals without the having to go to the hospital, just after completing out third year of Biomedical Engineering." },
  { date: "May 2025", title: "First Conference Presentation", body: "We were invited to present our findings on the model at the 3rd Africa Test and Treat Initiative held in Kampala." },
  { date: "july 2025", title: "Winners of the HSB Undergraduate Research Grant", body: "We received the HSB Undergraduate Research Grant for our work on the AI cardiac platform." },
  { date: "August 2025", title: "Second Conference Presentation ", body: "Building on our initial success, we presented our updated model at the International Scientific Conference on NCDs hosted by Gulu University in Gulu, Uganda." },
  { date: "Late 2025", title: "AI Architecture Designed", body: "We designed the model catering to the unique needs of low-resource settings. Multi-modal model architecture version two was finalized. Clinical datasets acquired and curated: PTB-XL, MIT-BIH, and CODE-15%." },
  { date: "February 2026", title: "Pre-Seed Funding", body: "Secured pre-seed funding to support the development of the AI cardiac platform from The Engineering Innovation Bootcamp supported by the Royal academy of Engineering (#LIF Community Project)." },
  { date: "March 2026", title: "App Development Begins", body: "Mobile development underway. Multi-modal fusion engine combines ECG deep learning with clinical risk modeling, all on-device." },
  { date: "2026", title: "Clinical Validation Underway", body: "Establishing clinical validation partnerships across East Africa. IRB protocols in active development." },
  { date: "2026", title: "Seed Round & Hospital Partners", body: "Seeking seed funding and pilot partners across Uganda, Kenya and Nigeria to scale early deployments." },
  { date: "Coming soon", title: "Africa Launch", body: "Rolling out via Community Health Worker networks across sub-Saharan Africa. Then the world." },
];

const Journey = () => (
  <section className="bg-near-black text-white py-28">
    <div className="container mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">Our Journey</p>
        <h2 className="font-serif text-4xl md:text-6xl">From a Kampala notebook to the world.</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 md:-translate-x-px" />
        {milestones.map((m, i) => {
          const left = i % 2 === 0;
          return (
            <div key={i} className="relative md:grid md:grid-cols-2 mb-16 reveal">
              <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-accent bg-near-black" />
              <div className={`pl-12 md:pl-0 ${left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                <div className="font-serif text-cyan-accent text-2xl mb-1">{m.date}</div>
                <div className="font-semibold text-xl mb-3">{m.title}</div>
                <p className="text-white/75 leading-relaxed text-justify md:text-justify">{m.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Journey;
