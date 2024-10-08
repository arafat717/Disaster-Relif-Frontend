/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ComponentsTitle from "../shared/ComponentsTitle";
import { useGetTestominalQuery } from "../../redux/api/testominalApi";

const DynamicTestimonial = () => {
  const theme = useSelector((state) => state.toggle.theme);
  const { data } = useGetTestominalQuery(undefined);

  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">
          Meet Our Top Donars
        </h1>
        <div className="mx-auto w-12 mt-3 mb-3">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
      <div className="testimonial-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div
                className={`max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-4 card ${theme}`}
              >
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover object-center"
                    src={testimonial.imageUrl}
                    alt="Testimonial Image"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4">
                    <h2 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-300">{testimonial.email}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-base">
                    {testimonial.description.slice(0, 95)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DynamicTestimonial;
