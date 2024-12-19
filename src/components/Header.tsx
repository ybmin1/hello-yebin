import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen h-[60px] fixed top-0 left-0 z-10 border-b border-gray-300 text-white">
      <nav className="flex items-center justify-start h-full px-8 space-x-6 text-xl">
        <Link className="visited:text-current" to="/">
          Logo
        </Link>
        <Link className="visited:text-current" to="/about">
          About
        </Link>
        <Link className="visited:text-current" to="/portfolio">
          Portfolio
        </Link>
        <Link className="visited:text-current" to="/hobby">
          Hobby
        </Link>
        <Link className="visited:text-current" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;
