import React from 'react'
import logos1 from "../assets/Faculties/logos1.png"
import Teacher1 from "../assets/Home/Teacher1.png"
import Teacher2 from "../assets/Home/Teacher2.png"
import Teacher3 from "../assets/Home/Teacher3.png"
import Teacher4 from "../assets/Home/Teacher4.png"
import Button from "../components/Button";

const Engineering = () => {
  return (
    <div>


      <h1 className="text-4xl font-bold text-center my-16">Faculty of Engineering</h1>



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

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>
        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>
        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

        <div className="shadow-md flex m-4 md:m-10 bg-white gap-5">
          <img src={logos1} className="w-32 h-24 bg-dgray p-3 " alt="Logo" />
          <h2 className="text-base md:text-md xl:text-xl font-bold pt-5">Department of Bachelor in Business Administration</h2>
        </div>

      </div>

      <h1 className="text-4xl font-bold text-center my-16">Our Expert Teachers</h1>

      <div className='flex flex-wrap justify-center gap-10'>
        <img src={Teacher1} className='max-w-xs' /> {/* Adjust max-width as needed */}
        <img src={Teacher2} className='max-w-xs' /> {/* Adjust max-width as needed */}
        <img src={Teacher3} className='max-w-xs' /> {/* Adjust max-width as needed */}
        <img src={Teacher4} className='max-w-xs' /> {/* Adjust max-width as needed */}
      </div>
      <br />
      <Button btnText="See more" />





    </div>
  )
}

export default Engineering 