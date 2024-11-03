import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <footer className="p-5 md:pb-5 md:pt-10 md:px-20">
   <div className="container content-center mx-auto grid grid-cols-2 md:grid-cols-4 gap-32 text-start">
    <div>
     <Link
      to="/"
      className="text-4xl mb-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 inline-block text-transparent bg-clip-text font-bold"
     >
      DocTime
     </Link>
     <p className="text-gray-600">
      DocTime is an online platform that helps you book appointments with top
      medical professionals in just a few clicks.
     </p>
    </div>
    <div>
     <h3 className="text-lg font-bold mb-3">Quick Links</h3>
     <ul className="space-y-2">
      <li>
       <Link
        to="/"
        className="text-gray-600 transition-all hover:text-blue-700"
       >
        Home
       </Link>
      </li>
      <li>
       <Link
        to="/doctors"
        className="text-gray-600 transition-all hover:text-blue-700"
       >
        Our Doctors
       </Link>
      </li>
      <li>
       <Link
        to="/about"
        className="text-gray-600 transition-all hover:text-blue-700"
       >
        About Us
       </Link>
      </li>
      <li>
       <Link
        to="/contact"
        className="text-gray-600  transition-all hover:text-blue-700"
       >
        Contact Us
       </Link>
      </li>
     </ul>
    </div>
    <div>
     <h3 className="text-lg font-bold mb-3">Company</h3>
     <ul className="space-y-2">
      <li>
       <a href="#" className="text-gray-600 transition-all hover:text-blue-700">
        Contact Us
       </a>
      </li>
      <li>
       <a href="#" className="text-gray-600 transition-all hover:text-blue-700">
        Delivery
       </a>
      </li>
      <li>
       <a href="#" className="text-gray-600 transition-all hover:text-blue-700">
        Privacy policy
       </a>
      </li>
      <li>
       <Link
        to="/signIn"
        className="text-gray-600 transition-all hover:text-blue-700"
       >
        Sign In
       </Link>
      </li>
     </ul>
    </div>
    <div>
     <h3 className="text-lg font-bold mb-3">Follow Us</h3>
     <ul className="space-y-2">
      <li>
       <a href="#" className="text-gray-700 hover:text-white">
        Facebook
       </a>
      </li>
      <li>
       <a href="#" className="text-gray-400 hover:text-white">
        Twitter
       </a>
      </li>
      <li>
       <a href="#" className="text-gray-400 hover:text-white">
        Instagram
       </a>
      </li>
      <li>
       <a href="#" className="text-gray-400 hover:text-white">
        LinkedIn
       </a>
      </li>
     </ul>
    </div>
   </div>
   <div className="mt-8 border-t border-gray-500 pt-5 text-center">
    <p className="text-gray-700">
     &copy; {new Date().getFullYear()} Ammar ElShreif. All Rights Reserved.
    </p>
   </div>
  </footer>
 );
};

export default Footer;
