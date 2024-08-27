import React from 'react'
import Logo from '../assets/Home/logo-white.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Footer = () => {
    return (
        <div>
  <div>
    <div className="bg-[#E6EDF8] container mx-auto relative top-24 py-20">
      <h1 className="text-4xl font-bold text-center mb-3">Join Our Newsletter</h1>
      <p className="text-center text-2xl">Keep up with our latest news and events, Subscribe to our newsletter</p>
      <div className='mx-auto text-center mt-5 flex flex-col md:flex-row w-11/12 md:w-1/2 gap-4 md:gap-10'>
        <input type="text" placeholder='Email Address' className='bg-transparent border-2 rounded-md w-full h-12 pl-5' />
        <button className="flex gap-4 items-center bg-blue rounded-lg px-8 text-white w-full md:w-fit mx-auto">Subscribe</button>
      </div>
    </div>
    <div className='bg-blue pt-32'>
      <div className='container mx-auto flex flex-col md:flex-row pt-5 px-10 gap-10'>
        <div className='w-full md:w-1/2'>
          <img src={Logo} alt="" />
          <p className='text-white py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vel non eaque provident consequuntur! Aspernatur perspiciatis veniam nobis earum, voluptates corrupti a reprehenderit, ipsam, vero quaerat incidunt magnam consequuntur non?</p>
          <div className='text-white space-x-3'>
            <WhatsAppIcon />
            <FacebookIcon />
            <XIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className='w-full md:w-1/4 text-white flex flex-col gap-5'>
          <h1 className="text-2xl font-bold text-white">Contact Us</h1>
          <ul className='flex flex-col gap-3'>
            <li className='flex gap-3'><LocationOnIcon /> Karachi, Pakistan</li>
            <li className='flex gap-3'><EmailIcon />info@school.edu</li>
            <li className='flex gap-3'><LocalPhoneIcon />+923010209887</li>
            <li className='flex gap-3'><LocalPhoneIcon />+923253508178</li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 text-white flex flex-col gap-5'>
          <h1 className="text-2xl font-bold text-white">Useful Links</h1>
          <ul className='flex flex-col gap-3'>
            <li className='flex gap-3'><ArrowForwardIcon />Contact Us</li>
            <li className='flex gap-3'><ArrowForwardIcon />Academic</li>
            <li className='flex gap-3'><ArrowForwardIcon />Admission</li>
            <li className='flex gap-3'><ArrowForwardIcon />Job</li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 text-white flex flex-col gap-5'>
          <h1 className="text-2xl font-bold text-white">Find Us On Google Map</h1>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9915598558837!2d67.08468887393792!3d24.932357442379516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eb7183b97%3A0x35709df45c0003aa!2sLucky%20One%20Mall!5e0!3m2!1sen!2s!4v1719923189586!5m2!1sen!2s"
            width="300"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>

      <hr className="border my-6 text-white" />

      <div className='text-white text-center pb-4'>© 2023 School. All rights reserved to Muhammad Arsalan Aftab.</div>
    </div>
  </div>
</div>

    )
}

export default Footer
