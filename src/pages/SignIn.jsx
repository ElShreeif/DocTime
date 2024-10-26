import { useState } from "react";

const SignIn = () => {
 const [show, setshow] = useState(true);
 const toggleAuthMode = () => {
  setshow(!show);
 };
 return (
  <div className="flex items-center justify-center py-20 px-5 md:px-20 md:py-10">
   <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200 max-w-sm w-full">
    {show ? (
     <div className="SignUp">
      <h2 className="text-2xl font-bold text-center text-black mb-6">
       Create Account
      </h2>
      <form>
       <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-semibold">
         Username
        </label>
        <input
         type="text"
         name="username"
         id="username"
         required
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all focus:ring-2 focus:ring-blue-700 hover:border-blue-700"
        />
       </div>
       <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">
         Email
        </label>
        <input
         type="email"
         name="email"
         id="email"
         required
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all focus:ring-2 focus:ring-blue-700 hover:border-blue-700"
        />
       </div>
       <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-semibold">
         Password
        </label>
        <input
         type="password"
         name="password"
         id="password"
         required
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all focus:ring-2 focus:ring-blue-700 hover:border-blue-700"
        />
       </div>
       <button
        type="submit"
        className="w-full font-semibold bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
       >
        Create an account
       </button>
       <p className="text-gray-700 mt-5">
        Already have an account?
        <a
         href="#"
         onClick={toggleAuthMode}
         className="text-blue-700 hover:underline"
        >
         {" "}
         Login
        </a>
       </p>
      </form>
     </div>
    ) : (
     <div className="LogIn">
      <h2 className="text-2xl font-bold text-center text-black mb-6">
       Have An Account
      </h2>
      <form>
       <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">
         Email
        </label>
        <input
         type="email"
         name="email"
         id="email"
         required
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all focus:ring-2 focus:ring-blue-700 hover:border-blue-700"
        />
       </div>
       <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-semibold">
         Password
        </label>
        <input
         type="password"
         name="password"
         id="password"
         required
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all focus:ring-2 focus:ring-blue-700 hover:border-blue-700"
        />
       </div>
       <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
       >
        Log In
       </button>
       <p className="text-gray-700 mt-5">
        Create an new account?
        <a
         href="#"
         onClick={toggleAuthMode}
         className="text-blue-700 hover:underline"
        >
         {" "}
         SignUp
        </a>
       </p>
      </form>
     </div>
    )}
   </div>
  </div>
 );
};

export default SignIn;
