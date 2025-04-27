import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 md:mx-auto p-6 bg-blue-600 shadow-md rounded-xl">
        <h1 className="text-2xl font-semibold text-center mb-6">User Register</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={onChangerHandler}
              type="text"
              id="name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              required
            />
          </div>

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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
