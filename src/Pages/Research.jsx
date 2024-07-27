import React from 'react';
import Ban1 from '../assets/Research/ban1.png';
import Ban2 from "../assets/Research/ban2.png"
import Ban3 from "../assets/Research/ban3.png"
import Ban4 from "../assets/Research/ban4.png"
import { useState, useEffect } from 'react';
import Explore1 from "../assets/Research/explore1.png"
import Explore2 from "../assets/Research/explore2.png"
import Explore3 from "../assets/Research/explore3.png"
import Explore4 from "../assets/Research/explore4.png"
import Button from "../components/Button";

const Research = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleReadMore1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='container mx-auto px-4'>
        <h1 className="text-4xl font-bold text-center my-16">Institutes & Centers</h1>

        <div className='flex flex-col md:flex-row gap-10'>
          <img src={Ban1} alt="Research Banner" className='w-full md:w-1/2' />
          <p className='text-justify md:w-1/2'>
            University's research corner is a vibrant nexus of intellectual exploration, where scholars and students converge to catalyze innovation and share knowledge. This dynamic space is equipped with cutting-edge resources, fostering groundbreaking research and academic excellence. It exemplifies the university's commitment to nurturing a thriving culture of inquiry and discovery. University's research corner is a vibrant nexus of intellectual exploration, where scholars and students converge to catalyze innovation and share knowledge. This dynamic space is equipped with cutting-edge resources, fostering groundbreaking research and academic excellence. It exemplifies the university's commitment to nurturing a thriving culture of inquiry and discovery.
          </p>
        </div>
      </div>

      <div className='w-full h-auto bg-gray mt-10 flex flex-col items-center justify-center py-10'>
        <ul className='text-blue text-4xl md:text-7xl font-bold flex bg-gray w-full md:flex-row gap-10 md:gap-40 justify-center '>
          <li className='text-center'>
            2
            <p className='text-sm md:text-2xl font-medium'>Research Institutes</p>
          </li>
          <li className='text-center'>
            12
            <p className='text-sm md:text-2xl font-medium'>Research Centers</p>
          </li>
          <li className='text-center'>
            20 M
            <p className='text-sm md:text-2xl font-medium'>Annual Research Budget</p>
          </li>
        </ul>
      </div>


      <div className='flex mob-sc:flex-col md:flex-row'>
        <div className='m-10'>
          <img className='w-full' src={Ban2} alt="Research Banner" />
          <h1 className="text-2xl font-bold text-center mt-5">Objective</h1>
          <div className='pt-5 text-justify mx-auto max-w-screen-md'>
            <p className='font-medium'>
              {isExpanded1
                ? `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements. By fostering collaboration and nurturing talent, our research institute remains committed to shaping a brighter future through groundbreaking scientific endeavors.`
                : `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements...`}
            </p>
            <button onClick={toggleReadMore1} className='text-blue bg-gray mt-3 border-transparent'>
              {isExpanded1 ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className='m-10'>
          <img className='w-full' src={Ban3} alt="Research Banner" />
          <h1 className="text-2xl font-bold text-center mt-5">Research Objective</h1>
          <div className='pt-5 text-justify mx-auto max-w-screen-md'>
            <p className='font-medium'>
              {isExpanded2
                ? `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements. By fostering collaboration and nurturing talent, our research institute remains committed to shaping a brighter future through groundbreaking scientific endeavors.`
                : `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements...`}
            </p>
            <button onClick={toggleReadMore2} className='text-blue bg-gray mt-3 border-transparent'>
              {isExpanded2 ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      <div className='m-10'>
        <img className='w-full' src={Ban4} alt="Research Banner" />
        <h1 className="text-2xl font-bold text-center mt-5">Research Objective</h1>
        <div className="max-w-940px mx-auto px-4">
          <p className='font-medium'>
            {isExpanded
              ? `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements. By fostering collaboration and nurturing talent, our research institute remains committed to shaping a brighter future through groundbreaking scientific endeavors.`
              : `Our university's research institute is a hub of innovation and discovery, where cutting-edge research projects span diverse fields and push the boundaries of human knowledge. With a dedicated team of brilliant researchers and state-of-the-art facilities, our institute strives to address pressing global challenges, from sustainable energy solutions to healthcare advancements...`}
          </p>
          {screenWidth < 750 && (
            <button onClick={toggleReadMore} className='text-blue bg-gray mt-3 border-transparent'>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>


      <h1 className="text-4xl font-bold text-center my-16">Vision Statement</h1>


      <div className='grid grid-cols-2 sm:grid-cols-4 gap-10 px-10'>
        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={Explore1} alt="Icon 1" />
          <h1 className='text-2xl font-bold pt-4'>Fostering Excellence</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={Explore2} alt="Icon 2" />
          <h1 className='text-2xl font-bold pt-4'>Sustainable Future</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={Explore3} alt="Icon 3" />
          <h1 className='text-2xl font-bold pt-4'>Innovative Research</h1>
        </div>

        <div className="flex flex-col items-center bg-gray p-4 text-center">
          <img className='w-28 h-28' src={Explore4} alt="Icon 4" />
          <h1 className='text-2xl font-bold pt-4'>Global Impact</h1>
        </div>
      </div>


      <div className="my-10"> <Button btnText="See more" /></div>










    </div>
  );
}

export default Research;
