import React from 'react'
import bannerVideo from '../../../assets/Home/bannerVideo.mp4'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import Cards1 from '../Cards1/Cards1'
import icon1 from '../../../assets/Home/icon1.png'
import icon2 from '../../../assets/Home/icon2.png'
import icon3 from '../../../assets/Home/icon3.png'
import overlay from '../../../assets/Home/bannerOverlay.png'

const Banner = () => {
  return (
    <div>
  <div>
    <div style={{ maskImage: `url(${overlay})` }}>
      <video src={bannerVideo} loop autoPlay className='w-full'></video>
      <div
        style={{ height: "80rem" }}
        className='bg-blue w-full absolute top-0 mix-blend-multiply opacity-85'
      ></div>
    </div>
    <div className='relative flex flex-wrap justify-center gap-6 md:gap-20 m-auto -mt-32'>
      <Cards1 number="99+" title="Teachers" icon={icon1} />
      <Cards1 number="12+" title="Research" icon={icon2} />
      <Cards1 number="15+" title="Departments" icon={icon3} />
    </div>
  </div>
</div>


  )
}

export default Banner



