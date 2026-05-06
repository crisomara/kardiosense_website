import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-near-black text-white/60 py-10 border-t border-white/5">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link to="/" className="hover:text-cyan-accent">About Us</Link>
        <span className="opacity-30">·</span>
        <Link to="/disclaimer" className="hover:text-cyan-accent">Disclaimer</Link>
        <span className="opacity-30">·</span>
        <Link to="/privacy" className="hover:text-cyan-accent">Privacy Policy</Link>
        <span className="opacity-30">·</span>
        <Link to="/terms" className="hover:text-cyan-accent">Terms and Conditions</Link>
        <span className="opacity-30">·</span>
        <a href="#waitlist" className="hover:text-cyan-accent">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="LinkedIn" className="hover:text-cyan-accent"><Linkedin size={16} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-cyan-accent"><Twitter size={16} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-cyan-accent"><Instagram size={16} /></a>
        <a href="#" aria-label="WhatsApp" className="hover:text-cyan-accent"><MessageCircle size={16} /></a>
      </div>
      <div className="text-xs">© 2024–2026 Kardiosense. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
