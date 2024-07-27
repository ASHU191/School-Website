import React from "react";
import Ban5 from "../assets/Research/ban5.png";
import Ban6 from "../assets/Research/ban6.png";
import Button from "../components/Button";
import Vission from "../Pages/Vission"
import { Link } from 'react-router-dom';
const Jobs = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-16">Careers</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <p className="text-justify md:w-1/2">
            University's research corner is a vibrant nexus of intellectual
            exploration, where scholars and students converge to catalyze
            innovation and share knowledge. This dynamic space is equipped with
            cutting-edge resources, fostering groundbreaking research and
            academic excellence. It exemplifies the university's commitment to
            nurturing a thriving culture of inquiry and discovery. University's
            research corner is a vibrant nexus of intellectual exploration,
            where scholars and students converge to catalyze innovation and
            share knowledge. This dynamic space is equipped with cutting-edge
            resources, fostering groundbreaking research and academic
            excellence. It exemplifies the university's commitment to nurturing
            a thriving culture of inquiry and discovery.
          </p>
          <img src={Ban5} alt="Research Banner" className="w-full md:w-1/2" />
        </div>
      </div>

    

     <Vission/>

     <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">
          Application process
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 px-10 md:px-0 ml-10 mr-10">
        <div className="flex justify-center w-full md:w-1/4 bg-gray items-center flex-col md:space-between pb-10 gap-5 pt-7">
          <h1 className="text-blue text-6xl font-bold bg-gray rounded-full w-16 h-16 flex items-center justify-center">
            1
          </h1>
          <p className="text-2xl font-bold">Resume and Cover Letter</p>
        </div>

        <div className="flex justify-center w-full md:w-1/4 bg-gray items-center flex-col md:space-between pb-10 gap-5 pt-7">
          <h1 className="text-blue text-6xl font-bold bg-gray rounded-full w-16 h-16 flex items-center justify-center">
            2
          </h1>
          <p className="text-2xl font-bold">Application Submission</p>
        </div>

        <div className="flex justify-center w-full md:w-1/4 bg-gray items-center flex-col md:space-between pb-10 gap-5 pt-7">
          <h1 className="text-blue text-6xl font-bold bg-gray rounded-full w-16 h-16 flex items-center justify-center">
            3
          </h1>
          <p className="text-2xl font-bold">Interview</p>
        </div>

        <div className="flex justify-center w-full md:w-1/4 bg-gray items-center flex-col md:space-between pb-10 gap-5 pt-7">
          <h1 className="text-blue text-6xl font-bold bg-gray rounded-full w-16 h-16 flex items-center justify-center">
            4
          </h1>
          <p className="text-2xl font-bold">Offer and Onboarding</p>
        </div>
      </div>

      <div className="pt-10 pl-10 pr-10">
        <img className="w-full" src={Ban6} />
      </div>



      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">
          Benefits and Compensation
        </h1>
        <p className="text-blue text-lg mx-auto">
          Offers a competitive benefits package, including:
        </p>
        <ul className="list-disc pl-10">
          <li>Health Insurance</li>
          <li>Retirement Plans</li>
          <li>Professional Development Opportunities</li>
          <li>Tuition Assistance</li>
        </ul>
        <p className="text-blue text-lg mx-auto">XYZ is an equal opportunity employer committed to diversity and inclusion. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, or any other protected status.</p>
      </div>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">
          Human Resources Contact Information
        </h1>
        <p className="text-blue text-lg mx-auto">
          For questions or assistance related to job openings or the application process, please contact our Human Resources team:
        </p>
        <ul className="list-disc pl-10">
          <li>Email: hr@gmail.com</li>
          <li>Phone: 0123456789</li>
        </ul>
        <p className="text-blue text-lg mx-auto">Our HR professionals are here to help you navigate the application process and provide support as needed.</p>
      </div>

      <Link to="/apply">
        <div className="my-10"> <Button btnText="Apply Now" /></div></Link>

    </>
  );
};

export default Jobs;
