import { Link } from "react-router-dom";

const Error = () => {
 return (
  <div className="flex items-center justify-center px-20 py-56">
   <div className="text-center">
    <h1 className="text-7xl font-bold text-blue-700 mb-5">404</h1>
    <p className="text-2xl font-semibold text-gray-700 mb-5">
     Oops! The page you're looking for doesn't exist.
    </p>
    <p className="text-gray-500 mb-9">
     It seems you've reached a page that doesn't exist. Please check the URL or
     return to the homepage.
    </p>
    <Link
     to="/"
     className="px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-900 transition duration-300"
    >
     Back to Home
    </Link>
   </div>
  </div>
 );
};

export default Error;
