import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required').min(10, 'Message should be at least 10 characters'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-blue-600 shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              {...register('name')}
              className="w-full border p-2 rounded mt-1 text-black"
            />
            {errors.name && <p className="text-red-200 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full border p-2 rounded mt-1 text-black"
            />
            {errors.email && <p className="text-red-200 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Message</label>
            <textarea
              {...register('message')}
              rows="5"
              className="w-full border p-2 rounded mt-1 text-black"
            ></textarea>
            {errors.message && <p className="text-red-200 text-sm">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 py-2 rounded hover:bg-green-500 transition font-semibold"
          >
            Send Message
          </button>
          {isSubmitSuccessful && (
            <p className="text-green-200 text-center mt-2">Thanks for reaching out!</p>
          )}
        </form>
      </div>
    </div>

  );
};

export default ContactForm;
