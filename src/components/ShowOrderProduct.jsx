import React, { useEffect, useState } from "react";

const ShowOrderProduct = ({ items }) => {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (items) {
      for (let i = 0; i < items?.length; i++) {
        qty += items[i].qty;
        price += items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [items]);

  return (
    <div className="w-full p-2">
      <div className="grid grid-cols-1 md:hidden gap-4">
        {/* Mobile Card View */}
        {items?.map((product) => (
          <div key={product._id} className="bg-gray-800 rounded-lg shadow-md p-4">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-white mb-2">{product.title}</h2>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span>Price:</span>
              <span className="text-yellow-400 font-bold">{product.price}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-300 mt-2">
              <span>Quantity:</span>
              <span className="text-cyan-400 font-bold">{product.qty}</span>
            </div>
          </div>
        ))}

        {/* Total Summary Card */}
        <div className="bg-gray-900 rounded-lg shadow-md p-4">
          <div className="flex flex-col gap-2">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded">
              Total
            </button>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded">
             {price}
            </button>
            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded">
              {qty} Items
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow-md text-center">
          <thead className="bg-gray-900">
            <tr>
              <th className="py-3 px-4 text-white text-sm md:text-base">Product Img</th>
              <th className="py-3 px-4 text-white text-sm md:text-base">Title</th>
              <th className="py-3 px-4 text-white text-sm md:text-base">Price</th>
              <th className="py-3 px-4 text-white text-sm md:text-base">Qty</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((product) => (
              <tr key={product._id} className="border-t border-gray-700">
                <td className="py-3 px-4">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-14 h-14 object-cover mx-auto rounded-md"
                  />
                </td>
                <td className="py-3 px-4 text-white">{product.title}</td>
                <td className="py-3 px-4 text-yellow-400 font-semibold">₹{product.price}</td>
                <td className="py-3 px-4 text-cyan-400 font-semibold">{product.qty}</td>
              </tr>
            ))}

            <tr className="border-t border-gray-700">
              <td></td>
              <td className="py-3 px-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  Total
                </button>
              </td>
              <td className="py-3 px-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                 ₹{price}
                </button>
              </td>
              <td className="py-3 px-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded">
                  {qty} Items
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowOrderProduct;
