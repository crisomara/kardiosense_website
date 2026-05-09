const Block = ({ bg, label, title, children }: any) => (
  <section className={`${bg} py-28`}>
    <div className="container mx-auto grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5 reveal">
        {label && <p className="text-xs uppercase tracking-[0.25em] mb-6 opacity-80">{label}</p>}
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">{title}</h2>
      </div>
      <div className="md:col-span-7 reveal text-justify text-lg leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);

const Story = () => (
  <div id="story">
    <Block bg="bg-near-black text-white" label="Our Story" title="Born in Uganda. Built for the world.">
      <p className="mb-6 text-white/85">
        In 2024, in Kampala, two-third year Biomedical Engineering students found themselves asking a simple but very important question; 
        Why are there so many people dying from heart diseases and what could they do to reduce that number.
        What began as late-night discussions and simple IoT ECG monitoring device slowly eveolved into something much bigger. As we read more about the problem,
        and studied the realities of healthcare in Low and Middle income settings, we saw how inaccessible cardiac diagnostics remained for millions. 
        We drew wisdom from a common saying; "Prevention is better than Cure",
        and we realized it wasn't anout monitoring the heart but catching the danger before it arrives. 
      </p>
      <p className="mb-6 text-white/85">
        Kardiosense started as a question. What would cardiac care look like if it were designed,
        from the very first line of code, for the rural clinic instead of the research hospital? For the
        community health worker instead of the cardiologist? For the patient who has never owned a
        wearable but does own a phone?
      </p>
      <p className="text-white/85">
        Our answer is an AI cardiac platform that runs offline, costs little to deploy, and
        speaks the language of both patients and providers, wherever they are, from urban hospitals to rural healthcare centres. 
        What started as a pair of engineers has now grown into a rich multidisciplinary team, with clinicians, venture capitalists and researchers, 
        from all over the African continent, to join the mission to help shape technology that is not only intelligent, but clinically meaningfull and human-centred.
        We started in Uganda. We are building for the
        world.
      </p>
    </Block>

    <Block bg="bg-teal text-white" label="Our Mission" title="To put a cardiologist in every pocket.">
      <p className="text-white/95">
        We exist to close the global cardiac diagnostic gap by making AI-powered heart attack prediction
        affordable, offline, and universally accessible beginning with the African communities the
        world has overlooked, and reaching every person whose heart deserves to be heard.
      </p>
    </Block>

    <Block bg="bg-near-black text-white" label="Our Vision" title="A world where no one dies of a heart attack we could have seen coming.">
      <p className="text-cyan-accent font-serif text-2xl md:text-3xl leading-snug">
        One billion hearts monitored. Zero preventable deaths. Africa first. Then the world.
      </p>
    </Block>
  </div>
);

export default Story;
