import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import banner from "../../assets/images/Black Friday (1).png";
import headphone from "../../assets/images/Black Friday.png";
import ulta24 from "../../assets/images/Black Friday (2).png";
import applewatch from "../../assets/images/Black Friday (3).png";
import macbook from "../../assets/images/Black Friday (4).png";
import iphone from "../../assets/images/Black Friday (5).png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const bannerImages = [
    {
      url: banner,
      alt: "Black Friday Sale",
    },
    {
      url: macbook,
      alt: "Macbook Pro",
    },
    {
      url: ulta24,
      alt: "Samsung Galaxy 24 Ultra",
    },
    {
      url: applewatch,
      alt: "Apple Watch",
    },
    {
      url: iphone,
      alt: "iPhone 14 Pro Max",
    },
    {
      url: headphone,
      alt: "Headphone",
    },
  ];

  const extendedImages = [
    bannerImages[bannerImages.length - 1],
    ...bannerImages,
    bannerImages[0],
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          if (prevSlide >= bannerImages.length - 1) {
            setTimeout(() => {
              setCurrentSlide(0);
            }, 0);
            return prevSlide;
          }
          return prevSlide + 1;
        });
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, bannerImages.length]);

  const nextSlide = () => {
    if (currentSlide >= bannerImages.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => {
        setCurrentSlide(0);
      }, 500);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(bannerImages.length);
      setTimeout(() => {
        setCurrentSlide(bannerImages.length - 1);
      }, 500);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="hero bg-[#F3445A] h-[550px] rounded-b-lg w-full">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <NavLink to={"dashboard"}>
            <button className="btn border-1 bg-[#F3445A] text-white border-white hover:bg-[#f3445a] hover:text-white">
              Shop Now
            </button>
          </NavLink>
          <div className="p-4 h-[550px] bg-red-400 rounded-t-lg z-30 w-[1150px] items-center mx-auto -mb translate-y-14">
            <div
              className="relative h-full w-full overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {extendedImages.map((image, index) => {
                const position = index - currentSlide;
                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0 opacity-100"
                        : index < currentSlide
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                    }`}
                    style={{
                      transform: `translateX(${position * 100}%)`,
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                );
              })}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 w-12 bg-[#f3445a] -translate-y-1/2 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10 hover:scale-110"
                aria-label="Previous slide"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 bg-[#f3445a] w-12 -translate-y-1/2 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10 hover:scale-110"
                aria-label="Next slide"
              >
                ❯
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-110"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
