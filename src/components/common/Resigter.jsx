/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRegisterUserMutation } from "../../redux/api/baseApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name: username, email, password });
      console.log(res);
      toast.success("Register Successful");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-[700px] bg-white-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md border">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i> Sign Up
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h1 className="text-red-300">
            Already have a Account?...{" "}
            <Link to="/login">
              <span>login</span>
            </Link>
          </h1>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-cyan-700 bg-cyan-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
