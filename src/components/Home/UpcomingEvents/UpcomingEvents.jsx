import React from 'react'
import img1 from '../../../assets/Home/upcomingEvtImg1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {

    return (
        <div>
        <div className='flex flex-col gap-20'>
          <h1 className='text-4xl font-bold m-auto text-center'>Upcoming Events</h1>
  
          <div className='container mx-auto'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
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
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-sm bg-white rounded-lg shadow flex flex-col p-8 text-center cursor-pointer">
                    <img src={img1} alt={`Event ${index + 1}`} className="w-full h-auto object-cover" />
                    <div className="pt-8 flex flex-col gap-2">
                      <h1 className="mb-2 text-2xl font-bold">Initiation program</h1>
                      <p className="mb-3 text-gray-700">Mark your calendars for the thrilling Annual Sports Day at our university on September 10, 2023 - a day of fierce competition and campus camaraderie you won't want to miss.</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  
          <Link to="/events"><Button btnText="Explore all events" /></Link>
        </div>
      </div>
    )
}

export default UpcomingEvents
