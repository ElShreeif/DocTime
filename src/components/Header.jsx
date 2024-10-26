import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
 const [show, setShow] = useState(false);
 const navigation = [
  {
   name: "Home",
   href: "/",
  },
  {
   name: "Doctors",
   href: "/doctors",
  },
  {
   name: "About",
   href: "/about",
  },
  {
   name: "Contact Us",
   href: "/contact",
  },
 ];
 return (
  <header className="p-5 md:px-20">
   <nav className="container mx-auto flex justify-between items-center">
    <Link
     to="/"
     className="text-4xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 inline-block text-transparent bg-clip-text font-bold"
    >
     DocTime
    </Link>
    <div className="icon block md:hidden" onClick={() => setShow(true)}>
     <span className="icon-th-menu font-semibold text-3xl cursor-pointer"></span>
    </div>
    <ul className="space-x-6 hidden w-full md:flex md:w-auto">
     {navigation.map((item) => (
      <NavLink
       to={item.href}
       key={item.name}
       className={({ isActive }) => {
        return (
         "font-bold text-lg transition-all hover:text-blue-700 active:text-blue-900" +
         (isActive ? "border border-b-4 border-blue-700" : "")
        );
       }}
      >
       {item.name}
      </NavLink>
     ))}
    </ul>
    <button className="py-3 px-5 hidden w-full md:block md:w-auto bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg transition-all hover:from-blue-700 hover:via-blue-800 hover:to-blue-900">
     <Link className="text-white font-bold text-1xl" to="/signIn">
      Create Accout
     </Link>
    </button>
   </nav>
   <div
    className={`fixed z-40 top-0 transition-all bg-white right-0 w-3/4 h-full flex flex-col justify-center md:hidden ${
     show === false ? "translate-x-full" : "translate-x-0"
    }`}
   >
    <div className="top-6 right-6 absolute" onClick={() => setShow(false)}>
     <span className="icon-cancel font-bold text-2xl cursor-pointer"></span>
    </div>
    <ul className="space-y-5 flex flex-col items-center">
     {navigation.map((item) => (
      <NavLink
       to={item.href}
       key={item.name}
       className={({ isActive }) => {
        return (
         "text-2xl transition-all py-2 font-semibold text-black" +
         (isActive
          ? "py-3 px-5 bg-blue-700 font-bold rounded-lg text-white"
          : "")
        );
       }}
      >
       {item.name}
      </NavLink>
     ))}
    </ul>
    <button className="py-3 px-5 mt-5 w-3/4 text-center mx-auto md:hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg transition-all hover:from-blue-700 hover:via-blue-800 hover:to-blue-900">
     <Link className="text-white font-bold text-2xl" to="/signIn">
      Create Accout
     </Link>
    </button>
   </div>
  </header>
 );
};

export default Header;
