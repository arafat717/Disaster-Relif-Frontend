/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoginUserMutation } from "../../redux/api/baseApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/authSlice";
import { VarifayToken } from "../../utils/varifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispathch = useDispatch();
  const [email, setEmail] = useState("arafatjibon33@gmail.com");
  const [password, setPassword] = useState("arafatjibon177");

  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({ email, password });

      const user = VarifayToken(data.token);

      dispathch(setUser({ user: user, token: data.token }));
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[700px] bg-white-600">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md border">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> login
          </h1>
          <hr className="mt-3" />
          <form onSubmit={handleLogin}>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
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
                type="password"
                id="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-cyan-700 bg-cyan-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
                disabled={isLoading} // Disable button during loading
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
