import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCallback, useEffect, useState } from "react";

interface TextContent {
  home: string;
  about: string;
  portfolio: string;
  hobby: string;
  contact: string;
}
const textContent: TextContent = {
  home: "Home",
  about: "About",
  portfolio: "Portfolio",
  hobby: "Hobby",
  contact: "Contact",
};

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const onClickMenu = useCallback(() => {
    setIsMenuOpened((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpened]);

  return (
    <div className="w-screen h-[65px] fixed top-0 left-0 z-30 border-b border-gray-300 text-white backdrop-blur-sm">
      {/*Overlay*/}
      <div
        onClick={onClickMenu}
        className={`fixed inset-0 w-screen h-screen bg-gray-800 z-40 transition-opacity duration-500 ease-out ${
          isMenuOpened
            ? "opacity-30 pointer-eventes-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      {/*Slide Menu*/}
      <div
        className={`w-[400px] h-screen bg-black border border-gray-300 text-2xl fixed top-0 left-0 origin-left transition-all duration-500 ease-out z-50 ${
          isMenuOpened
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }
        }`}
      >
        <div onClick={onClickMenu} className="p-6 hover:cursor-pointer">
          <IoClose className="hover:rotate-90 transition-transform duration-300 ease-out" />
        </div>
        <div className="flex flex-col mt-[10px] gap-4 text-l">
          <Link to="/" onClick={onClickMenu} className="visited:text-current">
            <div className="group flex justify-between items-center px-6 hover:bg-gray-200 hover:bg-opacity-40 transition-all duration-200 ease-out">
              {textContent.home}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </div>
          </Link>
          <Link
            to="/about"
            onClick={onClickMenu}
            className="visited:text-current"
          >
            <div className="group flex justify-between items-center px-6 hover:bg-gray-200 hover:bg-opacity-40 transition-all duration-200 ease-out">
              {textContent.about}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </div>
          </Link>
          <Link
            to="/portfolio"
            onClick={onClickMenu}
            className="visited:text-current"
          >
            <div className="group flex justify-between items-center px-6 hover:bg-gray-200 hover:bg-opacity-40 transition-all duration-200 ease-out">
              {textContent.portfolio}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </div>
          </Link>
          <Link
            to="/hobby"
            onClick={onClickMenu}
            className="visited:text-current"
          >
            <div className="group flex justify-between items-center px-6 hover:bg-gray-200 hover:bg-opacity-40 transition-all duration-200 ease-out">
              {textContent.hobby}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </div>
          </Link>
          <Link
            to="/contact"
            onClick={onClickMenu}
            className="visited:text-current"
          >
            <div className="group flex justify-between items-center px-6 hover:bg-gray-200 hover:bg-opacity-40 transition-all duration-200 ease-out">
              {textContent.contact}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </div>
          </Link>
        </div>
      </div>
      {/*Desktop Menu*/}
      <nav className="flex items-center justify-start h-full px-8 relative">
        <div
          onClick={onClickMenu}
          className="lg:hidden text-3xl hover:cursor-pointer"
        >
          <RxHamburgerMenu />
        </div>
        <div className="hidden lg:block space-x-8 text-l">
          <Link className="visited:text-current" to="/">
            {textContent.home}
          </Link>
          <Link className="visited:text-current" to="/about">
            {textContent.about}
          </Link>
          <Link className="visited:text-current" to="/portfolio">
            {textContent.portfolio}
          </Link>
          <Link className="visited:text-current" to="/hobby">
            {textContent.hobby}
          </Link>
          <Link className="visited:text-current" to="/contact">
            {textContent.contact}
          </Link>
        </div>
        <Link
          className="visited:text-current absolute left-1/2 transform -translate-x-1/2"
          to="/"
        >
          <img src="/logo.png" alt="Logo" className="w-[200px]" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
