import React from "react";
import facImg1 from "../../../assets/Faculties/facImg1.png"
import facImg2 from "../../../assets/Faculties/facImg2.png"
import facImg3 from "../../../assets/Faculties/facImg3.png"
import { Link } from 'react-router-dom';

const Faculties = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl md:text-4xl font-bold m-auto text-center pb-20">
        FACULTIES
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center max-w-md">
          <h2 className="text-2xl font-bold text-center pt-5 pb-5 bg-gray w-full">BUSINESS</h2>
          <Link to="/business"> <img className="bg-white p-10" src={facImg1} alt="BUSINESS" /></Link>
        </div>
        <div className="flex flex-col items-center max-w-md">
          <h2 className="text-2xl font-bold text-center pt-5 pb-5 bg-gray w-full">ENGINEERING</h2>
          <Link to="/engineering"> <img className="bg-white p-10" src={facImg2} alt="ENGINEERING" /></Link>
        </div>
        <div className="flex flex-col items-center max-w-md">
        <h2 className="text-2xl font-bold text-center pt-5 pb-5 bg-gray w-full">AGRICULTURE</h2>
        <Link to="/agriculture"> <img className="bg-white p-10" src={facImg3} alt="AGRICULTURE" /></Link>
        </div>

      </div>


    </>

  );
};

export default Faculties;
