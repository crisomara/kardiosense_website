import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#how", label: "How It Works" },
  { href: "#clinicians", label: "For Clinicians" },
  { href: "#story", label: "Our Story" },
  { href: "#team", label: "Team" },
  { href: "#news", label: "News" },
  { href: "#waitlist", label: "Join Waitlist" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/85 hover:text-cyan-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium gradient-teal text-white hover:opacity-90 transition"
        >
          Join the Waitlist
        </a>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90 py-1">
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="rounded-full px-5 py-2.5 text-center font-medium gradient-teal text-white"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
