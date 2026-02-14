import React, { useState, useEffect, useRef } from "react";
import FeturesBox from "./FeturesBox";

function Fetures() {
  const content = [
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "/images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },

  ];
  const loopImages = [content[content.length - 1], ...content, ...content, ...content, ...content];
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // tablet
      } else {
        setSlidesPerView(3); // desktop
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index >= loopImages.length - slidesPerView) {
        setIsTransitioning(false);
        setIndex(slidesPerView);
      }

      if (index === 0) {
        setIsTransitioning(false);
        setIndex(loopImages.length - slidesPerView * 2);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, slidesPerView, loopImages.length]);

  return (
    <div className="relative bg-dark lg:min-h-[700px] text-white lg:-mt-120">
      <div className="px-4 lg:px-30 py-20">
        <div className="flex text-red-400">
          <span className="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
          <p>What's Included?</p>
        </div>
        <h1 className="text-white text-3xl lg:text-5xl lg:w-130 font-serif font-bold mt-8">
          Most important Game Server Features
        </h1>
      </div>
      <div className="overflow-hidden mx-4 md:mx-6 lg:mx-35">
        <div ref={sliderRef} className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * (100 / slidesPerView)}%)` }}>
          {loopImages.map((item, i) => (
            <div className="flex-shrink-0 px-3" style={{ width: `${100 / slidesPerView}%` }} key={i}>
              <FeturesBox img={item.img} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-120 md:top-100 lg:top-130 left-2 lg:left-24 -translate-y-1/2 border border-white text-white rounded-full size-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={nextSlide} className="absolute top-120 md:top-100 lg:top-130 right-2 lg:right-24 -translate-y-1/2 border border-white text-white rounded-full size-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Fetures;
