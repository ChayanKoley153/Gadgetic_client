import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import ShowOrderProduct from '../ShowOrderProduct';

const Profile = () => {
  const { user, userOrder } = useContext(AppContext);
  return (
    <>
      <div className="container text-center my-5 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Welcome, {user?.name}</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl">Email: {user?.email}</h3>
        <h1 className="text-lg sm:text-xl md:text-2xl">Total Orders: {userOrder?.length}</h1>
      </div>

      <div className="container my-5 min-h-[300px] px-4 sm:px-6 md:px-8">
        <table className="table-auto w-full table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center px-4 py-2">
                Order Items
              </th>

              <th scope="col" className="bg-dark text-light text-center px-4 py-2">
                Order Details & Shipping Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            {userOrder && (
              <>
                {userOrder?.map((product) => (
                  <tr key={product._id}>
                    <td className="bg-dark text-light p-4">
                      <ShowOrderProduct items={product?.orderItems} />
                    </td>
                    <td className="bg-dark text-light p-4">
                      <ul className="font-bold space-y-2 text-sm sm:text-base">
                        <li>OrderId: {product?.orderId}</li>
                        <li>PaymentId: {product?.paymentId}</li>
                        <li>PaymentStatus: {product?.payStatus}</li>
                        <li>Name: {product?.userShipping?.fullName}</li>
                        <li>Phone: {product?.userShipping?.phoneNumber}</li>
                        <li>Country: {product?.userShipping?.country}</li>
                        <li>State: {product?.userShipping?.state}</li>
                        <li>PinCode: {product?.userShipping?.pincode}</li>
                        <li>Near By: {product?.userShipping?.address}</li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile;
