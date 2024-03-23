import { data } from "../../Array";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "../Ui/SlideCard";
import ComponentsTitle from "../shared/ComponentsTitle";

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
      <ComponentsTitle
        topTitle="top Donor "
        boldblackTitle="donor of us"
      ></ComponentsTitle>
      <div className="mt-20">
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
