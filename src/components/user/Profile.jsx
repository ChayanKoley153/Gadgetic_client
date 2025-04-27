import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import ShowOrderProduct from '../ShowOrderProduct';

const Profile = () => {
  const { user, userOrder } = useContext(AppContext);

  return (
    <>
     <div className="container min-h-screen">
     <div className="container text-center my-5 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Welcome, {user?.name}</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl">Email: {user?.email}</h3>
        <h1 className="text-lg sm:text-xl md:text-2xl">Total Orders: {userOrder?.length}</h1>
      </div>

      <div className="container my-5 min-h-[300px] px-4 sm:px-6 md:px-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-dark border border-primary">
            <thead className="bg-dark">
              <tr>
                <th scope="col" className="bg-dark text-light text-center px-4 py-2 text-sm sm:text-base">
                  Order Items
                </th>
                <th scope="col" className="bg-dark text-light text-center px-4 py-2 text-sm sm:text-base">
                  Order Details & Shipping Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-dark">
              {userOrder && userOrder.map((product) => (
                <tr key={product._id} className="border-t border-primary">
                  <td className="bg-dark text-light p-4 align-top">
                    <ShowOrderProduct items={product?.orderItems} />
                  </td>
                  <td className="bg-dark text-light p-4 align-top">
                    <ul className="font-bold space-y-2 text-sm sm:text-base">
                      <li><strong>OrderId:</strong> {product?.orderId}</li>
                      <li><strong>PaymentId:</strong> {product?.paymentId}</li>
                      <li><strong>PaymentStatus:</strong> {product?.payStatus}</li>
                      <li><strong>Name:</strong> {product?.userShipping?.fullName}</li>
                      <li><strong>Phone:</strong> {product?.userShipping?.phoneNumber}</li>
                      <li><strong>Country:</strong> {product?.userShipping?.country}</li>
                      <li><strong>State:</strong> {product?.userShipping?.state}</li>
                      <li><strong>PinCode:</strong> {product?.userShipping?.pincode}</li>
                      <li><strong>Near By:</strong> {product?.userShipping?.address}</li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </>
  );
}

export default Profile;
