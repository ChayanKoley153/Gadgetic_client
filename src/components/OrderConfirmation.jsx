import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";

const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState(null);

  useEffect(() => {
    if (Array.isArray(userOrder) && userOrder.length > 0) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  console.log("latestOrder", latestOrder);

  if (!latestOrder) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">No recent orders found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Heading */}
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Your order has been confirmed,
        </h1>
        <h3 className="text-xl text-gray-600 mt-2">
          It will be delivered soon
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-900">
        <table className="min-w-full text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-3 px-6 text-center text-sm font-semibold uppercase tracking-wider">
                Order Items
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold uppercase tracking-wider">
                Order Details & Shipping Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-6 align-top">
                <ShowOrderProduct items={latestOrder?.orderItems || []} />
              </td>
              <td className="px-6 py-6">
                {/* Order Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DetailCard label="Order ID" value={latestOrder?.orderId} />
                  <DetailCard label="Payment ID" value={latestOrder?.paymentId} />
                  <DetailCard label="Payment Status" value={latestOrder?.payStatus} />
                  <DetailCard label="Name" value={latestOrder?.userShipping?.fullName} />
                  <DetailCard label="Phone" value={latestOrder?.userShipping?.phoneNumber} />
                  <DetailCard label="Country" value={latestOrder?.userShipping?.country} />
                  <DetailCard label="State" value={latestOrder?.userShipping?.state} />
                  <DetailCard label="Pin Code" value={latestOrder?.userShipping?.pincode} />
                  <DetailCard label="Nearby" value={latestOrder?.userShipping?.address} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Reusable Card Component for Order Details
const DetailCard = ({ label, value }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
    <h4 className="text-sm font-medium text-gray-400">{label}</h4>
    <p className="text-lg font-semibold text-white break-words">{value || "N/A"}</p>
  </div>
);

export default OrderConfirmation;
