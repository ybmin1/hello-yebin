import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen h-[60px] fixed top-0 left-0 z-10 border-b border-gray-300">
      <nav className="flex items-center justify-start h-full px-8 space-x-4">
        <Link to="/">Logo</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/hobby">Hobby</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
