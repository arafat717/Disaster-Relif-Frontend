/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <button
      className="bg-cyan-700 text-white font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-cyan-600 
    duration-500"
    >
      {children}
    </button>
  );
};

export default Button;
