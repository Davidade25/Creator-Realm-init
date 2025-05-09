import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const test_data = [
    {
        star: "⭐⭐⭐⭐⭐",
        review: "It was a great platform for african creators to showcase their talent and get hired. I was able to find a job that matched my skills and got paid securely.",
        picture: "./Person1.jpg",
        name: "Jonathan Doe",
        job: "UI/UX"
    },
    {
        star: "⭐⭐⭐⭐",
        review: "A nice platform for freelancers. I was able to find a job that matched my skills and got paid securely.",
        picture: "./Person2.jpg",
        name: "Jane Doe",
        job: "Web Developer"
    },
    {
        star: "⭐⭐⭐⭐", 
        review: "I was able to find a job that matched my skills and got paid securely.",
        picture: "./Person3.jpg",
        name: " John Doe",
        job: "Graphic Designer"
    },
    {
        star: "⭐⭐⭐⭐",
        review: "I was able to find a job that matched my skills and got paid securely.", 
        picture: "./Person4.jpg",
        name: "Mary Doe",
        job: "Content Writer",
    }
]

const Testimonial = () => {
  return (
   <Swiper className='flex flex-col items-center justify-center w-[90%] m-auto my-10'>
        {/* <p>⭐⭐⭐⭐</p>
        <p className='my-7'>“Working with Creator Realm has transformed our project outcome. The talent
        we found exceeded our expectations and delivered exceptional result!”</p>
        <div className='flex gap-3 items-center justify-center'>
            <img src="./Person2.jpg" alt="" className='w-20 rounded-full'/>
            <div className='text-left'>
                <p className='font-medium'>Mary Adesina</p>
                <small>Project Manager</small>
            </div>
        </div> */}
        {
        test_data.map(({star, review, picture, name, job}, index) => {
            return (
                <SwiperSlide key={index} className='container'
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}>
                    <p>{star}</p>
                    <p className='my-7'>{review}</p>
                    <div className='flex gap-3 items-center justify-center'>
                        <img src={picture} alt="" className='w-20 rounded-full'/>
                        <div className='text-left'>
                            <p className='font-medium'>{name}</p>
                            <small>{job}</small>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
        }
   </Swiper>
  )
}

export default Testimonial
