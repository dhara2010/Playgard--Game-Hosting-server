import React, { useState, useEffect, useRef } from "react";
import FeturesBox from "./FeturesBox";

function Fetures() {
  const content = [
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_1.webp", title: "Instant Server", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },
    { img: "../images/feature_icon_2.webp", title: "DDoS Protection", text: "Our Minecraft hosting plans include automatic modpack installation. It’s easy to install" },

  ];

  const loopImages = [content[content.length - 1], ...content, ...content, ...content, ...content];

  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

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
      if (index === loopImages.length - 1) {
        setIsTransitioning(false);
        setIndex(0);
      } else if (index === 0) {
        setIsTransitioning(false);
        setIndex(loopImages.length - 8);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, loopImages.length]);

  return (
    <div className="relative bg-dark min-h-[700px] text-white -mt-140">
      <div className="mx-30 py-20">
        <div className="flex text-red-400">
          <span className="material-icons mr-2" style={{ fontSize: "18px" }}>grid_view</span>
          <p>What's Included?</p>
        </div>
        <h1 className="text-white text-5xl w-130 font-serif font-bold mt-8">
          Most important Game Server Features
        </h1>
      </div>

      <div className="overflow-hidden mx-[200px]">
        <div ref={sliderRef} className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * (100 / 3)}%)` }}>
          {loopImages.map((item, i) => (
            <div className="w-1/3 flex-shrink-0 px-3" key={i}>
              <FeturesBox img={item.img} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute -mt-30 left-24 -translate-y-1/2 border border-white text-white rounded-full size-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={nextSlide} className="absolute -mt-30 right-24 -translate-y-1/2 border border-white text-white rounded-full size-12 flex items-center justify-center bg-black/40 hover:bg-black/60 z-10">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Fetures;
