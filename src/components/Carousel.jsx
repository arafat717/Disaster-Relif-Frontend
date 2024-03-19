import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Button from "../utils/Button";

const Carousel = () => {
  const slides = [
    {
      url: "http://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide1.jpg",
      title: " Flood Disaster",
      caption: "Help Us Grom The Flood Disaster",
    },
    {
      url: "http://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slid3.jpg",
      title: "fireworks",
      caption: "Fire Takes Everything With Its Distruction",
    },
    {
      url: "http://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide2.jpg",
      title: "WindStrom",
      caption: "Heavy WindStrom Destroy All The Home",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-[580px] w-full m-auto pt-1 pb-10 px-2 relative group">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${slide.url})` }}
          className={`w-full h-full rounded-sm bg-center bg-cover duration-500 relative ${
            index === currentIndex ? "" : "hidden"
          }`}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-5xl mx-auto mb-5 ">{slide.title}</h2>
              <h2 className="text-5xl  mx-auto mb-5 ">{slide.caption}</h2>
              <Button>View Details</Button>
            </div>
          </div>
        </div>
      ))}
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center   py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
