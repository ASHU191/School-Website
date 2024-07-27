import React from "react";
import Banner from "../components/Home/Banner/Banner";
import bigIcon from "../assets/Home/bigIcon.png";
import Item1 from "../components/Home/Item1/Item1";
import UpcomingEvents from "../components/Home/UpcomingEvents/UpcomingEvents";
import schoolVideoTour from "../assets/Home/schoolVideoTour.png";
import playBtn from "../assets/Home/playBtn.png";
import Faculties from "../components/Home/Faculties/Faculties";
import ButtonOutline from "../components/ButtonOutline"
import FrameByFrame from '../components/FrameByFrame/FrameByFrame'
import StudentVoices from "../components/Home/StudentVoices/StudentVoices";
import Testimonialimg from '../assets/Home/TestimonialImg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


import bannerVideo from '../assets/Home/bannerVideo.mp4'
import OurExpertTeachers from "../components/Home/OurExpertTeachers/OurExpertTeachers";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative mb-20 flex justify-end container mx-auto">
        <img src={bigIcon} alt="" />
      </div>
      <Item1 />
      <div className="bg-blue h-20 my-20"></div>
      <UpcomingEvents />

      <div className="my-20 flex flex-col gap-10 md:gap-20">
        <h1 className="text-2xl md:text-4xl font-bold m-auto text-center">
          University Video Tour
        </h1>
        <div className="w-full flex justify-center">
          <video src={bannerVideo} loop autoPlay className='w-4/5 mx-auto'></video>
          {/* <img className="w-16 md:w-32 m-auto cursor-pointer" src={playBtn} alt="Play Button" /> */}
        </div>
      </div>

  
        <Faculties />
        <OurExpertTeachers/>


      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-16">Frame by Frame</h1>
        <p className="text-blue text-lg text-center mx-auto max-w-2xl">
          Explore a vibrant collection of visual masterpieces, capturing the essence of our academic journey, campus life, and student achievements. Immerse yourself in a kaleidoscope of images that tell the unique story of our vibrant and dynamic community.
        </p>
        <div className="flex flex-wrap justify-center gap-4 my-12">
          <ButtonOutline btnText={"All"} />
          <ButtonOutline btnText={"Admission"} />
          <ButtonOutline btnText={"Annual Program"} />
          <ButtonOutline btnText={"Awards"} />
          <ButtonOutline btnText={"Curriculum"} />
        </div>
        <div>
          <FrameByFrame />
        </div>
      </div>
      <div>

        <h1 className="text-4xl font-bold text-center mb-10 mt-16">Student Voices</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <StudentVoices title={"My university experience has been outstanding, thanks to the dedicated faculty, diverse opportunities, and a supportive community. It's where I've grown academically and personally, making lifelong connections along the way."} name={"Twink Carrol"} qualification={"Graduate of 2022,Department of CSE"} Testimonialimg={Testimonialimg} /></SwiperSlide>
          <SwiperSlide>
            <StudentVoices title={"My university experience has been outstanding, thanks to the dedicated faculty, diverse opportunities, and a supportive community. It's where I've grown academically and personally, making lifelong connections along the way."} name={"Twink Carrol"} qualification={"Graduate of 2022,Department of CSE"} Testimonialimg={Testimonialimg} /></SwiperSlide>
          <SwiperSlide>
            <StudentVoices title={"My university experience has been outstanding, thanks to the dedicated faculty, diverse opportunities, and a supportive community. It's where I've grown academically and personally, making lifelong connections along the way."} name={"Twink Carrol"} qualification={"Graduate of 2022,Department of CSE"} Testimonialimg={Testimonialimg} /></SwiperSlide>
        </Swiper>
      </div >


    </div >
  );
};

export default Home;
