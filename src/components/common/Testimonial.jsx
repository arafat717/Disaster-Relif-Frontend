import { data } from "../../Array";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "../Ui/SlideCard";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show one slide at a time by default
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 667, // Medium devices (tablets, iPads)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium devices (tablets, iPads)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Large devices (desktops)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-5/6 m-auto mb-20 mt-20">
      <div className="text-center mt-20">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">donor of us</h1>
        <div className="mx-auto w-12 mt-3 mb-3">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
      <div className="mt-4">
        <Slider {...settings}>
          {data.map((item) => (
            <SlideCard key={item.id} item={item}></SlideCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
