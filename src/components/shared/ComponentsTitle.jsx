/* eslint-disable react/prop-types */

const ComponentsTitle = ({ topTitle, boldblackTitle }) => {
  return (
    <div className={`mx-auto mode text-center lg:w-4/12 mb-5 mt-10 px-4`}>
      <p className="text-[#ef1721] uppercase font-bold flex justify-center ">
        {topTitle}
      </p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase py-2 font-bold">
        {boldblackTitle}
      </h1>
      <hr className="w-1/3 border-2 border-[#ef1721] mx-auto" />
    </div>
  );
};

export default ComponentsTitle;
