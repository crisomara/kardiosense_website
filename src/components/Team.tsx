import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Omara Christian Kenneth", role: "Founder & CEO", bio: "Background in Biomedical Engineering and Machine learning researcher specializing in multi-modal biomedical signal fusion and explainable cardiac AI." },
  { name: "Ogwal Emmanuel", role: "Co-Founder & CTO", bio: "Mobile and embedded systems engineer building Kardiosense's offline-first architecture for the world's most demanding clinical environments." },
  { name: "Dr. Patricia K Wanjiru", role: "Co-Founder & Clinical Affairs", bio: "Clinician-scientist leading IRB protocols, validation studies and partnerships with African health systems. " },
];

const Team = () => (
  <section id="team" className="bg-teal text-white py-28">
    <div className="container mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Our Team</p>
        <h2 className="font-serif text-4xl md:text-6xl">The Team Behind the Heartbeat</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {team.map((p) => (
          <div key={p.role} className="reveal text-center">
            {/* REPLACE: founder photo */}
            <div className="w-32 h-32 rounded-full mx-auto mb-5 bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="font-serif text-3xl text-white/60">KS</span>
            </div>
            <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
            <p className="text-cyan-accent text-sm uppercase tracking-wider mb-3">{p.role}</p>
            <div className="flex justify-center gap-3 mb-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Twitter size={16} /></a>
            </div>
            <p className="text-white/85 text-justify max-w-md mx-auto leading-relaxed">{p.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 reveal">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/70 mb-8">Partners & Supporters</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-32 rounded bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/60">
              {/* REPLACE: partner logo */}
              Partner {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
