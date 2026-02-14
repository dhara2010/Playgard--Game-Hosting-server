import React, { useState, useEffect, useRef } from 'react';
import ReviewBox from './ReviewBox';

function Review() {
  const content = [
    { img: "/images/client_1.webp" },
    { img: "/images/client_2.webp" },
    { img: "/images/client_1.webp" },
    { img: "/images/client_2.webp" },
    { img: "/images/client_1.webp" },
    { img: "/images/client_2.webp" }
  ];

  const images = [...content, ...content];

  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionRef = useRef(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
useEffect(() => {
  const updateSlides = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  updateSlides();
  window.addEventListener("resize", updateSlides);
  return () => window.removeEventListener("resize", updateSlides);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


 useEffect(() => {
  if (currentIndex >= images.length - slidesPerView) {
    setTimeout(() => {
      transitionRef.current = false;
      setCurrentIndex(0);
    }, 700);
  } else {
    transitionRef.current = true;
  }
}, [currentIndex, images.length, slidesPerView]);


  return (
    <div className='bg-dark min-h-[650px] text-white py-20'>
      <div className="flex flex-wrap justify-between px-4 lg:px-30">
        <div>
          <h1 className='text-3xl lg:text-5xl font-bold'>What Our Clients Say!</h1>
          <p className='mt-6 lg:w-125 text-[16px]'>
            Our main focus is on quality and making sure you have everything you need to succeed.
          </p>
        </div>
        <div className='flex flex-wrap pt-10'>
          <div className="flex gap-3">
            <h1 className='text-3xl lg:text-5xl font-bold'>456+</h1>
            <p className='w-50'>Customers have Given Rating for Support</p>
          </div>
          <div className="flex mt-3 lg:gap-2">
            <i className="fa-solid fa-star text-red-400"></i>
            <i className="fa-solid fa-star text-red-400"></i>
            <i className="fa-solid fa-star text-red-400"></i>
            <i className="fa-solid fa-star text-red-400"></i>
            <i className="fa-solid fa-star text-white"></i>
            <div className='border-l-1 border-white-3'>
              <p className='ml-3 text-[16px]'>Average rating 5 / 5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 lg:mx-35 overflow-hidden relative">
        <div className={`flex ${transitionRef.current ? 'transition-transform duration-700 ease-in-out' : ''}`} style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`}} >
          {images.map((item, i) => (
            <div className="flex-shrink-0 px-3" style={{ width: `${100 / slidesPerView}%` }} key={i}>
              <ReviewBox img={item.img} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-22">
        <button onClick={prevSlide} className="left-3 lg:left-10 -translate-y-1/2 border border-white text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={nextSlide} className="right-3 lg:right-10 -translate-y-1/2 border border-white text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
    </div>
  );
}

export default Review;
