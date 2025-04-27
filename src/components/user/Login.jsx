import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-blue-600 shadow-md rounded-xl">
        <h1 className="text-2xl font-semibold text-center mb-6">User Login</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={onChangerHandler}
              type="email"
              id="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={onChangerHandler}
              type="password"
              id="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              required
            />
          </div>

          <div className="w-full flex justify-center">
            <button type="submit" className="w-20 bg-green-300 text-white py-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
