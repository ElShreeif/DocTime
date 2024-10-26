const About = () => {
 return (
  <div className="p-5 md:px-20 md:py-10">
   <div className="container">
    <h3 className="text-4xl font-bold text-center mb-12">About Us</h3>
    <div className="flex flex-col md:flex md:flex-row items-center md:justify-between">
     <div className="image min-w-52 md:min-w-96 ">
      <img className="rounded-lg" src="./About.webp" alt="" />
     </div>
     <div className="md:mx-10 text-start">
      <p className="text-gray-700 text-2xl mt-3 md:mt-0 md:text-lg leading-8">
       DocTime is an online platform designed to make booking doctor
       appointments quick and easy.
       <br /> We connect you with top medical professionals, allowing you to
       book appointments with just a few clicks.
      </p>
      <h2 className="text-2xl font-semibold my-4">Our Mission</h2>
      <p className=" text-gray-700 text-lg leading-8">
       At DocTime, our mission is to improve access to healthcare by providing a
       seamless appointment booking experience for patients. We strive to
       connect you with the right doctor at the right time, ensuring you get the
       care you need when you need it.
      </p>
     </div>
    </div>
    <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-start my-8 text-black">
      Why Choose Us
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-3 transition-all">
       <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
       <p className="text-gray-600">
        Our platform is available round the clock for you to book appointments
        at your convenience.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-3 transition-all">
       <h3 className="text-2xl font-semibold mb-4">Trusted Doctors</h3>
       <p className="text-gray-600">
        We only work with certified and experienced doctors to ensure the best
        care for you.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-3 transition-all">
       <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
       <p className="text-gray-600">
        Our user-friendly platform makes it simple for anyone to book a doctor’s
        appointment.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-3 transition-all">
       <h3 className="text-2xl font-semibold mb-4">Secure and Private</h3>
       <p className="text-gray-600">
        We prioritize your privacy and ensure that your data is safe with us at
        all times.
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default About;
