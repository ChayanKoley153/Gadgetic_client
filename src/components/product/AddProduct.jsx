import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    qty: '',
    imgSrc: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/product/add', formData);
      setMessage(response.data.message);
      setError('');
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        qty: '',
        imgSrc: '',
      });
    } catch (err) {
      setError('Failed to add product. Please try again.');
      setMessage('');
    }
    alert('Sucessfully Submitted');
  };

  return (
    <div className="max-w-md md:mx-auto mx-10 p-6 bg-blue-600 shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Add New Product</h2>

      {/* Success/Failure Message */}
      {message && <p className="text-green-600 mb-4 text-center">{message}</p>}
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder='eg. mobiles, cameras, laptops, headphones'
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Quantity</label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
