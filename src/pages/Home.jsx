import Lottie from "lottie-react";
import doctor from "./animation/Animation.json";

const Home = () => {
 return (
  <div className="p-5 md:px-20 md:py-3">
   <section className="py-5 md:py-16">
    <div className="container flex justify-between items-center">
     <div className="text-start">
      <h1 className="text-5xl text-black font-bold mb-4">
       Welcome to DocTime!
      </h1>
      <p className="text-xl text-gray-600 leading-9 md:mr-12 mb-6">
       At DocTime, we are dedicated to providing you with the best medical
       services to meet your healthcare needs. Whether you're looking to book an
       appointment, consult with experienced doctors, or access reliable health
       information, our platform is here to make your healthcare journey easier
       and more accessible.
      </p>
      <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition duration-300">
       Get Started
      </button>
     </div>
     <div className="animation">
      <Lottie
       className="h-1/4 w-[500px] hidden md:block"
       animationData={doctor}
      />
     </div>
    </div>
   </section>
   <section className="py-16">
    <div className="container mx-auto px-4">
     <h2 className="text-4xl font-bold text-center mb-8 text-black">
      Our Services
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <h3 className="text-2xl font-semibold mb-4">General Consultations</h3>
       <p className="text-gray-600">
        Get access to general consultations with experienced doctors in various
        fields.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <h3 className="text-2xl font-semibold mb-4">Specialist Appointments</h3>
       <p className="text-gray-600">
        Easily book appointments with specialists like cardiologists,
        dermatologists, and more.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <h3 className="text-2xl font-semibold mb-4">Follow-up Consultations</h3>
       <p className="text-gray-600">
        Keep track of your health with follow-up consultations and medical
        advice.
       </p>
      </div>
     </div>
    </div>
   </section>
   <section className="py-16">
    <div className="container mx-auto px-4">
     <h2 className="text-4xl font-bold text-center mb-8 text-black">
      What Our Patients Say
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <p className="text-gray-600 mb-4">
        "DocTime made it super easy for me to find the right doctor. I had a
        great experience!"
       </p>
       <h3 className="text-xl font-semibold">- Sarah K.</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <p className="text-gray-600 mb-4">
        "Booking an appointment has never been easier. Highly recommend this
        platform!"
       </p>
       <h3 className="text-xl font-semibold">- Ahmed M.</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
       <p className="text-gray-600 mb-4">
        "The doctors are professional and the process was seamless. Excellent
        service!"
       </p>
       <h3 className="text-xl font-semibold">- Emily J.</h3>
      </div>
     </div>
    </div>
   </section>
   <section className="bg-blue-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
     <h2 className="text-4xl font-bold mb-6">
      Ready to Book Your Appointment?
     </h2>
     <p className="text-xl mb-6">
      Join thousands of happy patients who have benefited from our easy-to-use
      platform.
     </p>
     <button className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white font-semibold px-6 py-3 rounded-md shadow hover:scale-105 transition duration-300">
      Book Now
     </button>
    </div>
   </section>
  </div>
 );
};

export default Home;
