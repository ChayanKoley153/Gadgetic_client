import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";

const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});

  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  console.log("latestOrder", latestOrder);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="text-center my-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Your order has been confirmed
        </h1>
        <h3 className="text-lg md:text-xl text-gray-600 mt-2">
          It will be delivered soon
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-6 text-white bg-gray-900 text-center text-sm md:text-base">
                Order Items
              </th>
              <th className="py-3 px-6 text-white bg-gray-900 text-center text-sm md:text-base">
                Order Details & Shipping Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="py-4 px-6 text-white">
                <ShowOrderProduct items={latestOrder?.orderItems} />
              </td>
              <td className="py-4 px-6 text-white">
                <ul className="space-y-2 font-semibold">
                  <li>OrderId: {latestOrder?.orderId}</li>
                  <li>PaymentId: {latestOrder?.paymentId}</li>
                  <li>PaymentStatus: {latestOrder?.payStatus}</li>
                  <li>Name: {latestOrder?.userShipping?.fullName}</li>
                  <li>Phone: {latestOrder?.userShipping?.phoneNumber}</li>
                  <li>Country: {latestOrder?.userShipping?.country}</li>
                  <li>State: {latestOrder?.userShipping?.state}</li>
                  <li>PinCode: {latestOrder?.userShipping?.pincode}</li>
                  <li>Near By: {latestOrder?.userShipping?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Future Payment Button */}
      {/* 
      <div className="text-center my-8">
        <button className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition">
          Proceed To Pay
        </button>
      </div> 
      */}
    </div>
  );
};

export default OrderConfirmation;
