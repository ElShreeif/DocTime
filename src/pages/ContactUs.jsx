const ContactUs = () => {
 return (
  <div className="p-5 md:px-20 md:py-10">
   <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center text-black mb-8">
     Contact Us
    </h1>
    <div className="flex-col flex mb-12 md:flex md:flex-row items-center justify-center">
     <div className="image min-w-52 md:w-2/5">
      <img src="./contact.webp" alt="" className="rounded-lg" />
     </div>
     <div className="md:mx-10 text-start">
      <div className="mb-10">
       <p className="text-lg mb-2 mt-3 md:mt-0 text-gray-600">
        Have any questions? We'd love to hear from you!
       </p>
       <p className="text-lg mb-2 text-gray-600">
        Feel free to reach out to us using the form below, or directly at:
       </p>
      </div>
      <h1 className="text-2xl  font-bold">Our Office</h1>
      <p className="text-lg text-gray-600 font-semibold mt-2">
       Phone: (123) 456-7890
      </p>
      <p className="text-lg text-gray-600 font-semibold">
       Email: info@doctime.com
      </p>
      <p className="text-lg text-gray-600 font-semibold">
       Address: 1234 Medical Ave, Health City
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ContactUs;
