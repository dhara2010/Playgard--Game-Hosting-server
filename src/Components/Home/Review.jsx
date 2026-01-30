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
    if (currentIndex >= content.length) {
      setTimeout(() => {
        transitionRef.current = false; 
        setCurrentIndex(0);
      }, 700); 
    } else {
      transitionRef.current = true;
    }
  }, [currentIndex, content.length]);

  return (
    <div className='bg-dark min-h-[650px] text-white'>
      <div className="flex justify-between mx-30">
        <div>
          <h1 className='text-5xl font-bold'>What Our Clients Say!</h1>
          <p className='mt-6 w-125 text-[16px]'>
            Our main focus is on quality and making sure you have everything you need to succeed.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className="flex gap-3">
            <h1 className='text-5xl font-bold'>456+</h1>
            <p className='w-50'>Customers have Given Rating for Support</p>
          </div>
          <div className="flex mt-3 gap-2">
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

      <div className="mt-10 mx-30 overflow-hidden relative">
        <div className={`flex ${transitionRef.current ? 'transition-transform duration-700 ease-in-out' : ''}`} style={{ transform: `translateX(-${currentIndex * (100 / 12)}%)`, width: `${(images.length / 3) * 100}%`}} >
          {images.map((item, i) => (
            <div className="w-1/12 flex-shrink-0 px-3" key={i}>
              <ReviewBox img={item.img} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-22">
        <button onClick={prevSlide} className="absolute left-155 -translate-y-1/2 border border-white text-white rounded-full size-12 bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={nextSlide} className="absolute right-155 -translate-y-1/2 border border-white text-white rounded-full size-12 bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
    </div>
  );
}

export default Review;
