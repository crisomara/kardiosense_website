import { Link } from "react-router-dom";
import logoMark from "@/assets/kardiosense-logo.png";

const Logo = ({ light = true }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group">
    <img
      src={logoMark}
      alt="Kardiosense logo"
      width={36}
      height={36}
      className="h-9 w-9 object-contain"
    />
    <span className={`font-semibold tracking-tight text-lg ${light ? 'text-white' : 'text-near-black'}`}>
      Kardio<span className="text-cyan-accent">sense</span>
    </span>
  </Link>
);

export default Logo;
