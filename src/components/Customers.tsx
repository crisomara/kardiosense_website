const customers = [
  { who: "Patients & Consumers", what: "Remote, connected cardiac care for the 99% of life that happens away from a physician's office." },
  { who: "Healthcare Professionals", what: "Deep, real-time analysis of heart-rhythm data that fits naturally into your existing clinical workflow." },
  { who: "Biopharma Partners", what: "Disease and safety monitoring solutions that mitigate the risk of dangerous medication side effects." },
  { who: "Health Systems", what: "An enterprise platform that lets practices remotely track their patients' heart-rhythm data at scale." },
  { who: "Payers & Employers", what: "A PEPM cardiac health solution to help manage the mounting clinical and financial cost of heart disease." },
];

const Customers = () => (
  <section className="bg-background py-28">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">Our Customers</p>
        <h2 className="font-serif text-4xl md:text-5xl text-near-black">A heart-care platform for everyone in the chain of care.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((c, i) => (
          <div key={c.who} className="reveal p-8 rounded-2xl bg-near-black text-white hover:bg-navy transition">
            <div className="text-cyan-accent font-serif text-3xl mb-4">0{i + 1}</div>
            <h3 className="text-xl font-semibold mb-3">{c.who}</h3>
            <p className="text-white/75 leading-relaxed">{c.what}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Customers;
