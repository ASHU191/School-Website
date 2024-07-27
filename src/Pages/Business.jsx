import React from 'react'
import logos1 from "../assets/Faculties/logos1.png"
import logos2 from "../assets/Faculties/logos2.png"
import logos3 from "../assets/Faculties/logos3.png"
import logos4 from "../assets/Faculties/logos4.png"
import logos5 from "../assets/Faculties/logos5.png"
import logos6 from "../assets/Faculties/logos6.png"
import Teacher1 from "../assets/Home/Teacher1.png"
import Teacher2 from "../assets/Home/Teacher2.png"
import Teacher3 from "../assets/Home/Teacher3.png"
import Teacher4 from "../assets/Home/Teacher4.png"
import Button from "../components/Button";
import OurExpertTeachers from '../components/Home/OurExpertTeachers/OurExpertTeachers'

const Business = () => {
  return (
    <div>


      <h1 className="text-4xl font-bold text-center my-16">Faculty of Business</h1>



      <div className='w-full h-auto bg-gray mt-10 flex flex-col items-center justify-center py-10'>
        <ul className='text-blue text-4xl md:text-7xl font-bold flex bg-gray w-full md:flex-row gap-10 md:gap-40 justify-center '>
          <li className='text-center'>
            31
            <p className='text-sm md:text-2xl font-medium pt-4'>Faculty Members</p>
          </li>
          <li className='text-center'>
            5500
            <p className='text-sm md:text-2xl font- pt-4'>Students</p>
          </li>
          <li className='text-center'>
            6
            <p className='text-sm md:text-2xl font-medium pt-4'>Departments</p>
          </li>
        </ul>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-center lg:mx-24 md:mx-auto sm:mx-20">
        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-left">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-right">
          <img src={logos2} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-left">
          <img src={logos3} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-right">
          <img src={logos4} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-left">
          <img src={logos5} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5 animate-from-right">
          <img src={logos6} className="w-32 h-24 bg-dgray p-3" alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>
      </div>


      <OurExpertTeachers />



    </div>
  )
}

export default Business