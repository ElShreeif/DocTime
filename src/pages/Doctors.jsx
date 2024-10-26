import { useState } from "react";

const Doctors = () => {
 const allDoctors = [
  {
   name: "Dr. John Doe",
   specialty: "Cardiologist",
   photo: "./doctors/doc8.png",
  },
  {
   name: "Dr. Frank Belek",
   specialty: "Gynecologist",
   photo: "./doctors/doc1.png",
  },
  {
   name: "Dr. Michael Lee",
   specialty: "Psychiatrist",
   photo: "./doctors/doc7.png",
  },
  {
   name: "Dr. Sarah Williams",
   specialty: "Gynecologist",
   photo: "./doctors/doc13.png",
  },
  {
   name: "Dr. Richard Collins",
   specialty: "Neurologist",
   photo: "./doctors/doc4.png",
  },
  {
   name: "Dr. William Carter",
   specialty: "Gynecologist",
   photo: "./doctors/doc3.png",
  },
  {
   name: "Dr. David Harris",
   specialty: "Cardiologist",
   photo: "./doctors/doc10.png",
  },
  {
   name: "Dr. James Peterson",
   specialty: "Neurologist",
   photo: "./doctors/doc6.png",
  },
  {
   name: "Dr. Emily Johnson",
   specialty: "Psychiatrist",
   photo: "./doctors/doc5.png",
  },
  {
   name: "Dr. John Anderson",
   specialty: "Cardiologist",
   photo: "./doctors/doc12.png",
  },
  {
   name: "Dr. Brain Collins",
   specialty: "Neurologist",
   photo: "./doctors/doc14.png",
  },
 ];
 const [specialty, setSpecialty] = useState(allDoctors);
 const handlClick = (button) => {
  const job = allDoctors.filter((item) => {
   return item.specialty === button;
  });
  setSpecialty(job);
 };
 return (
  <div className="p-5 md:px-20 md:py-10 mb-10">
   <div className="container">
    <h1 className="text-4xl font-bold text-black mb-8 text-center">
     Meet Our Doctors
    </h1>
    <div className="md:flex md:justify-between mt-10">
     <div className="flex flex-col items-center mt-5">
      <ul className="space-y-12">
       <li>
        <a
         className="px-10 py-5 text-black text-lg bg-blue-100 transition-all active:bg-blue-400 active:font-bold hover:bg-blue-400 rounded-lg"
         href="#"
         onClick={() => handlClick("Cardiologist")}
        >
         Cardiologists
        </a>
       </li>
       <li>
        <a
         className="px-10 py-5 text-black text-lg bg-blue-100 transition-all active:bg-blue-400 active:font-bold hover:bg-blue-400 rounded-lg"
         href="#"
         onClick={() => handlClick("Psychiatrist")}
        >
         Psychiatrists
        </a>
       </li>
       <li>
        <a
         className="px-9 py-5 text-black text-lg bg-blue-100 transition-all active:bg-blue-400 active:font-bold hover:bg-blue-400 rounded-lg"
         href="#"
         onClick={() => handlClick("Gynecologist")}
        >
         Gynecologists
        </a>
       </li>
       <li>
        <a
         className="px-10 py-5 text-black text-lg bg-blue-100 transition-all active:bg-blue-400 active:font-bold hover:bg-blue-400 rounded-lg"
         href="#"
         onClick={() => handlClick("Neurologist")}
        >
         Neurologists
        </a>
       </li>
      </ul>
     </div>
     <div className="flex flex-grow items-center mt-9 justify-center flex-wrap gap-7 md:mt-0 md:ml-10 ">
      {specialty.map((doctor) => (
       <div
        key={doctor.name}
        className="bg-white transition-all hover:-translate-y-2 border border-spacing-1 border-blue-400 rounded-lg shadow-lg"
       >
        <img
         src={doctor.photo}
         className="w-64 h-64 mx-auto border border-spacing-y-1 border-blue-300 mb-4 bg-blue-200"
        />
        <h2 className="text-xl font-semibold px-5 text-gray-800">
         {doctor.name}
        </h2>
        <p className="text-gray-600 px-5 mb-5">{doctor.specialty}</p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Doctors;
