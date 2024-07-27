import React from 'react'
// import AboutImg from '../assets/About/image-1.png'
import AboutImg from '../assets/About/image-1.png'
import Initiative1 from '../assets/About/Strategic-Initiative-1.png'
import Initiative2 from '../assets/About/Strategic-Initiative-2.png'
import Initiative3 from '../assets/About/Strategic-Initiative-3.png'
import Initiative4 from '../assets/About/Strategic-Initiative-4.png'
import Initiative5 from '../assets/About/Strategic-Initiative-5.png'
import Initiative6 from '../assets/About/Strategic-Initiative-6.png'
import image2 from '../assets/About/image-2.png'
import image3 from '../assets/About/image-3.png'
import LogoImg from '../assets/About/logo-image-1.png'
import LogoImg2 from '../assets/About/logo-image-2.png'
import LogoImg3 from '../assets/About/logo-image-3.png'
import wicon1 from '../assets/About/wicon-1.png'
import wicon2 from '../assets/About/wicon-2.png'
import wicon3 from '../assets/About/wicon-3.png'
import wicon4 from '../assets/About/wicon-4.png'


const About = () => {
  const Initiative = [Initiative1, Initiative2, Initiative3, Initiative4, Initiative5, Initiative6]
  const intiativeObj = [{
    heading: "Academic Exellence",
  },
  {
    heading: "Student Success",
  },
  {
    heading: "Global Outreach",
  },
  {
    heading: "Sustainbility",
  },
  {
    heading: "Global Outreach",
  },
  {
    heading: "Sustainbility",
  }

  ]

  return (

    <div>
      <div className='container mx-auto px-4'>
        <h1 className="text-4xl font-bold text-center my-16">The big Misson Behind Eschool</h1>

        <div className='flex flex-col md:flex-row gap-10'>
          <p className='text-justify md:w-1/2'>
            The mission of the university is to provide a high-quality, inclusive education that empowers students to reach their full potential. We aim to foster critical thinking, creativity, and a passion for lifelong learning. Our university is committed to conducting cutting-edge research that contributes to the advancement of knowledge and the betterment of society.The mission of the university is to provide a high-quality, inclusive education that empowers students to reach their full potential. We aim to foster critical thinking, creativity, and a passion for
          </p>
          <img src={AboutImg} alt="Research Banner" className='w-full md:w-1/2' />

        </div>
      </div>




      <h1 className="text-4xl font-bold text-center my-16">Vision Statement</h1>


      <div className='grid grid-cols-2 sm:grid-cols-4 gap-10 px-10'>
        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={wicon1} alt="Icon 1" />
          <h1 className='text-2xl font-bold pt-4'>Fostering Excellence</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={wicon2} alt="Icon 2" />
          <h1 className='text-2xl font-bold pt-4'>Sustainable Future</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={wicon3} alt="Icon 3" />
          <h1 className='text-2xl font-bold pt-4'>Innovative Research</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={wicon4} alt="Icon 4" />
          <h1 className='text-2xl font-bold pt-4'>Global Impact</h1>
        </div>
      </div>








      <div className='mx-auto '><h1 className="text-4xl font-bold text-center my-16">Strategic Initiative</h1></div>

      <div className="flex flex-wrap justify-center gap-10">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative1} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Academic Excellence</h2>
          </div>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative2} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Student Success</h2>
          </div>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative3} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Academic Excellence</h2>
          </div>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative4} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Academic Excellence</h2>
          </div>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative5} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Academic Excellence</h2>
          </div>
          <div className='flex'>
            <img className='bg-[#E6EDF8] p-3' src={Initiative6} alt="Academic Excellence" />
            <h2 className='text-2xl font-bold text-center bg-white px-14 flex items-center w-80'>Academic Excellence</h2>
          </div>
        </div>
      </div>





      <div className="container mx-auto pt-24 flex flex-col md:flex-row md:gap-10">
        <div className="w-full md:w-1/2 flex flex-col">
          <img src={image3} alt="Image 3" className="w-full" />
          <div className="p-6">
            <h1 className="text-3xl font-bold pt-6 md:pt-10">The mission behind Education platform</h1>
            <p className="text-lg pt-6">The mission of the university is to provide a high-quality, inclusive education that empowers students to reach their full potential. We aim to foster critical thinking, creativity, and a passion for lifelong learning. Our university is committed to conducting cutting-edge research that contributes to the advancement of knowledge and the betterment of society.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-6">
            <h1 className="text-3xl font-bold pb-6 md:pb-10">The mission behind Education platform</h1>
            <p className="text-lg pb-6">The mission of the university is to provide a high-quality, inclusive education that empowers students to reach their full potential. We aim to foster critical thinking, creativity, and a passion for lifelong learning. Our university is committed to conducting cutting-edge research that contributes to the advancement of knowledge and the betterment of society.</p>
          </div>
          <img src={image2} alt="Image 2" className="w-full" />
        </div>
      </div>



      <div>
        <h1 className="text-4xl font-bold text-center mb-16 pt-16">A few numbers that we are proud of</h1>
        <div className='bg-[#E6EDF8] h-72 w-full'></div>
      </div>



      <h1 className="text-4xl font-bold text-center mb-16 pt-16">Linkage & Networking</h1>

      <div className='container mx-auto '>
        <div className='w-full md:w-1/2 mob-sc:w-screen mx-auto space-y-12'>
          <div className='flex flex-col md:flex-row gap-10 '>
            <img className='bg-[#E6EDF8] p-7' src={Initiative5} alt="Microsoft Security Cooperation Program" />
            <div>
              <h1 className='text-2xl font-bold'>Microsoft Security Cooperation Program</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Maecenas porttitor congue potuigb</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10'>
            <img className='bg-[#E6EDF8] p-7' src={Initiative6} alt="Microsoft Security Cooperation Program" />
            <div>
              <h1 className='text-2xl font-bold'>Microsoft Security Cooperation Program</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Maecenas porttitor congue potuigb</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10'>
            <img className='bg-[#E6EDF8] p-7' src={Initiative6} alt="Microsoft Security Cooperation Program" />
            <div>
              <h1 className='text-2xl font-bold'>Microsoft Security Cooperation Program</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue Maecenas porttitor congue potuigb</p>
            </div>
          </div>
        </div>
      </div>





      <div>
        <h1 className="text-4xl font-bold text-center mb-10 pt-16">Our Association membership</h1>
        <p className=''>XYZ  is fully accredited by the University Grants Commission, the only national accreditation authority in Bangladesh. The University is prepared to seek institutional and professional accreditation from the US. Currently, it is preparing self-study report for ABET accreditation for Engineering and Computer Science programs. The School of Business and Economics at XYZ is accredited by ACBSP. In 2015, it became the first to receive American accreditation for its programs in the entire country.</p>
        <div className='flex justify-center m-10 gap-14'>
          <img className=' h-32' src={LogoImg} alt="" />
          <img className='h-32' src={LogoImg2} alt="" />
          <img className='h-32' src={LogoImg3} alt="" />
        </div>
      </div>

    </div>

  )
}

export default About