import React from 'react'
import img1 from '../../../assets/Home/Item1Img1.png'
import img2 from '../../../assets/Home/Item1Img2.png'
import img3 from '../../../assets/Home/Item1Img3.png'
import Button from '../../Button';


const Item1 = () => {
    return (
        <div className='container mx-auto p-4'>
        <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between items-center lg:gap-10'>
          <div className='w-full lg:w-3/6 flex flex-col gap-10'>
            <h1 className='text-3xl md:text-4xl font-bold'>We are School since 12 years</h1>
            <p>
              Welcome to xyz, a distinguished institution of higher learning committed to academic excellence and innovation. With a history spanning 12 years, we have consistently provided a world-class education, empowering our students to succeed in their chosen fields. Our dedicated faculty, state-of-the-art facilities, and vibrant campus community create an environment where students can thrive both academically and personally.
            </p>
            <Button btnText="Learn More" />
          </div>
          <div className='w-full lg:w-auto flex flex-col gap-5 mt-10 lg:mt-0'>
            <img src={img1} alt="Image 1" className='w-full h-auto object-cover' />
            <div className='flex justify-between gap-5'>
              <img src={img2} alt="Image 2" className='w-1/2 h-auto object-cover' />
              <img src={img3} alt="Image 3" className='w-1/2 h-auto object-cover' />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item1
