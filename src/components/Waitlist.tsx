import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  role: z.string().min(1, "Please select a role"),
  country: z.string().trim().min(1, "Country is required").max(80),
  message: z.string().trim().max(1000).optional(),
});

const roles = ["Patient", "Clinician", "Community Health Worker", "Investor", "Researcher", "Other"];

const Waitlist = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      setError(r.error.issues[0]?.message || "Please check your inputs.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-navy text-white py-28">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">Join the Waitlist</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Be among the first heartbeats we listen to.</h2>
          <p className="text-white/75">Get early access, clinical updates and a front-row seat to Africa's cardiac AI revolution.</p>
        </div>

        {submitted ? (
          <div className="reveal text-center rounded-2xl border border-cyan-accent/40 bg-white/5 p-10">
            <div className="font-serif text-3xl text-cyan-accent mb-3">Welcome aboard.</div>
            <p className="text-white/85 leading-relaxed">
              Thank you for joining our mission. Every name on this list is a heart we're learning to listen
              for. We'll be in touch as we open access — until then, take care of yours, beat by beat.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="reveal grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label>Role</Label>
                <select name="role" required className="input">
                  <option value="">Select a role</option>
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <Field label="Country" name="country" required />
            </div>
            <div>
              <Label>Message (optional)</Label>
              <textarea name="message" rows={4} maxLength={1000} className="input resize-none" placeholder="Tell us how Kardiosense fits your work or your hopes..." />
            </div>
            {error && <p className="text-sm text-red-300">{error}</p>}
            <button type="submit" className="rounded-full px-7 py-3.5 font-medium gradient-teal text-white hover:opacity-90 transition">
              Join the Waitlist
            </button>
          </form>
        )}

        <p className="reveal text-center text-white/70 italic mt-12 max-w-xl mx-auto">
          Every 33 seconds, someone dies of cardiovascular disease that could have been caught earlier.
          Help us change that.
        </p>
      </div>

      <style>{`
        .input { width:100%; background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius: 0.75rem; padding: 0.75rem 1rem; color: white; outline:none; }
        .input:focus { border-color: hsl(var(--cyan-accent)); }
        .input::placeholder { color: rgba(255,255,255,0.4); }
        select.input option { color: black; }
      `}</style>
    </section>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">{children}</label>
);
const Field = ({ label, name, type = "text", required = false }: any) => (
  <div>
    <Label>{label}</Label>
    <input className="input" name={name} type={type} required={required} />
  </div>
);

export default Waitlist;
