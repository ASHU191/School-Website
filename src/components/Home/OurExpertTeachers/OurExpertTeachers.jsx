import React from 'react'
import Teacher1 from "../../../assets/Home/Teacher1.png";
import Teacher2 from "../../../assets/Home/Teacher2.png";
import Teacher3 from "../../../assets/Home/Teacher3.png";
import Teacher4 from "../../../assets/Home/Teacher4.png";
import Button from "../../../components/Button";
import { Link } from 'react-router-dom';


const OurExpertTeachers = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-16">Our Expert Teachers</h1>
        <div className='flex flex-wrap justify-center gap-10'>
          <img src={Teacher1} className='max-w-xs' /> {/* Adjust max-width as needed */}
          <img src={Teacher2} className='max-w-xs' /> {/* Adjust max-width as needed */}
          <img src={Teacher3} className='max-w-xs' /> {/* Adjust max-width as needed */}
          <img src={Teacher4} className='max-w-xs' /> {/* Adjust max-width as needed */}
        </div>
        <br />
        <Link to="/allteachers"> <Button btnText="See more" /></Link>
    </div>
  )
}

export default OurExpertTeachers