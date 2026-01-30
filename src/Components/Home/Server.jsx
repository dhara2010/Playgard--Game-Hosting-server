import React, { useState, useEffect, useRef } from "react";
import ServerBox from "./ServerBox";

function Server() {
  const images = [
    { img: "./images/service_slider_1.webp", head: "Gaming Server" },
    { img: "./images/service_slider_2.webp", head: "Dedicated Server" },
    { img: "./images/service_slider_1.webp", head: "Gaming Server" },
    { img: "./images/service_slider_1.webp", head: "Gaming Server" },
    { img: "./images/service_slider_2.webp", head: "Dedicated Server" },
    { img: "./images/service_slider_1.webp", head: "Gaming Server" },
  ];

  // Add clones: last slide at start, first slide at end
  const loopImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const [index, setIndex] = useState(1); // start from first real slide
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (index === loopImages.length - 1) {
      setTransition(false);
      setIndex(1);
    }
    if (index === 0) {
      setTransition(false);
      setIndex(loopImages.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      const timer = setTimeout(() => {
        setTransition(true);
      }, 50); 
      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <div className="overflow-hidden">
      <div
        ref={sliderRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 50}%)` }}
      >
        {loopImages.map((item, i) => (
          <div className="w-1/2 flex-shrink-0" key={i}>
            <ServerBox img={item.img} head={item.head} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Server;
