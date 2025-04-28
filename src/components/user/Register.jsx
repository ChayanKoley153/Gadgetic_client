import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Register = () => {
  const { register: registerUser } = useContext(AppContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const result = await registerUser(name, email, password);
    if (result.success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 md:mx-auto p-6 bg-blue-600 shadow-md rounded-xl">
        <h1 className="text-2xl font-semibold underline text-center mb-6">User Register</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              id="name"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                }
              })}
            />
            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              id="email"
              type="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                }
              })}
            />
            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              id="password"
              type="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                }
              })}
            />
            {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-24 bg-green-300 text-white py-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
