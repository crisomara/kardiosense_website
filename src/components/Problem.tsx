const Problem = () => (
  <section className="bg-near-black text-white py-28">
    <div className="container mx-auto grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-teal mb-6">The Problem</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          A continent of hearts,<br />and not enough listeners.
        </h2>
      </div>
      <div className="md:col-span-7 md:col-start-7 reveal">
        <p className="text-justify text-white/80 leading-relaxed text-lg mb-6">
          Cardiovascular disease is the world's leading cause of mortality and morbidity, and Africa carries a disproportionate share
          of its weight. Over <span className="text-cyan-accent font-medium">1.5 million people</span> die each year
          in sub-Saharan Africa from conditions that, in better-resourced parts of the world, are routinely caught
          early. The tragedy is not that treatments don't exist it is that the tools to detect risk in time are
          absent, unaffordable, or impossible to use where they are needed most.
        </p>
        <p className="text-justify text-white/80 leading-relaxed text-lg mb-6">
          More than <span className="text-cyan-accent font-medium">90% of cardiovascular events</span> happen in
          low- and middle-income countries. Yet existing diagnostic platforms assume reliable electricity,
          stable internet, expensive cardiology suites, and specialists in walking distance luxuries the
          rural clinic in Mbale or the community health worker in Kisumu simply does not have.
        </p>
        <p className="text-justify text-white/80 leading-relaxed text-lg">
          Kardiosense was born inside that gap. Not as charity. As infrastructure.
        </p>
      </div>
    </div>
  </section>
);

export default Problem;
