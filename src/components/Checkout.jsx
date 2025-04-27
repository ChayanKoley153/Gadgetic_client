import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import TableProduct from "./TableProduct";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  const handlePayment = async () => {
    try {
      const orderRepons = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty: qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user._id,
      });

      console.log(" order response ", orderRepons);
      const { orderId, amount: orderAmount } = orderRepons.data;

      var options = {
        key: "rzp_test_qJtEPX5JnDSBt7",
        amount: orderAmount * 100,
        currency: "INR",
        name: "Chayan Koley",
        description: "Coder",
        order_id: orderId,
        handler: async function (response) {
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItems: cart?.items,
            userId: user._id,
            userShipping: userAddress,
          };

          const api = await axios.post(
            `${url}/payment/verify-payment`,
            paymentData
          );

          console.log("razorpay res ", api.data);

          if (api.data.success) {
            clearCart();
            navigate("/oderconfirmation");
          }
        },
        prefill: {
          name: "Chayan Koley",
          email: "chayan@gmail.com",
          contact: "8336820450",
        },
        notes: {
          address: "Bidhannagar Kolkata",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen p-4 ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Order Summary</h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

          {/* Product Details */}
          <div className=" p-2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Products</h2>
            <div className="overflow-x-auto">
              <TableProduct cart={cart} />
            </div>
          </div>

          {/* Shipping Address */}
          <div className=" p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Shipping Address</h2>
            <ul className="text-white space-y-2 font-medium">
              <li><span className="font-semibold">Name:</span> {userAddress?.fullName}</li>
              <li><span className="font-semibold">Phone:</span> {userAddress?.phoneNumber}</li>
              <li><span className="font-semibold">Country:</span> {userAddress?.country}</li>
              <li><span className="font-semibold">State:</span> {userAddress?.state}</li>
              <li><span className="font-semibold">PinCode:</span> {userAddress?.pincode}</li>
              <li><span className="font-semibold">Nearby:</span> {userAddress?.address}</li>
            </ul>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="text-center mt-10">
          <button
            onClick={handlePayment}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md transition-all"
          >
            Proceed To Pay ₹{price}
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
