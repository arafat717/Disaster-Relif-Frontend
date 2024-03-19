const OurService = () => {
  return (
    <div className="my-24 ">
      {/* <div className='text-center mb-12'>
        <h1 className='font-semibold text-left md:text-center text-2xl md:text-5xl mb-6'>Looking to quickly sell your car online? <br /> You&apos;ve come to the right place!</h1>
        <p className='my-6'>
            If you&apos;re wondering how to go about selling your car, we&apos;re here to help you find the ideal way to maximise <br /> the return for your current vehicle.
        </p>
    </div> */}
      <div className="md:flex md:h-[400px]">
        <div className="md:w-1/2 py-10   px-4 xl:px-[140px] 2xl:px-[240px] bg-left-side flex items-center md:justify-center text-white">
          <div>
            <h1 className="font-semibold text-3xl  mb-5">
              Help Us Make a Difference!
            </h1>
            <p className="mb-6">
              Every day, we strive to disaster Relif. But to continue our vital
              work, we need your support.
            </p>
            <button className="px-8 py-4 text-lg bg-[#111] text-white font-medium hover:text-black hover:bg-white duration-500">
              View Details
            </button>
          </div>
        </div>
        <div className="md:w-1/2 py-10 px-4 xl:px-[140px] 2xl:px-[240px] bg-right-side flex items-center justify-start md:pl-16 text-white">
          <div>
            <h1 className="font-semibold text-3xl mb-5">
              Join Us in Making a Positive Impact!
            </h1>
            <p className="mb-6">
              No amount is too small, and every donation makes a difference.
            </p>
            <button
              className="px-8 py-4 text-lg bg-[#fff] text-black font-medium hover:text-white hover:bg-[#111] duration-500"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Donates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
