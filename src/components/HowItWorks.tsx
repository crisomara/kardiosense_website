import { Activity, BrainCircuit, FileHeart } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Measure",
    body: "Capture your ECG with the Kardiosense app and enter your clinical risk factors: age, blood pressure, history, lifestyle.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze",
    body: "Our AI fuses your heart signal with your health profile entirely on-device. No internet, no data leaving your phone.",
  },
  {
    icon: FileHeart,
    title: "Act",
    body: "Receive your cardiac risk score and a clinician-ready PDF report in under 60 seconds, shareable anywhere.",
  },
];

const HowItWorks = () => (
  <section id="how" className="bg-background py-28">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">How It Works</p>
        <h2 className="font-serif text-4xl md:text-5xl text-near-black">
          Three steps. Sixty seconds. Zero internet.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="reveal p-8 rounded-2xl border border-border hover:border-teal transition group bg-card">
            <div className="w-14 h-14 rounded-xl gradient-teal flex items-center justify-center mb-6">
              <s.icon className="text-white" size={26} />
            </div>
            <div className="text-xs text-muted-foreground mb-2">Step {i + 1}</div>
            <h3 className="text-2xl font-semibold mb-3 text-near-black">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
