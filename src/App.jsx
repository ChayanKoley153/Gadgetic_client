import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ShowProduct from "./components/product/ShowProduct";
import SearchProduct from "./components/product/SearchProduct";
import ProductDetail from "./components/product/ProductDetail";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from './components/Cart';
import Address from './components/Address';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import ContactForm from "./components/Contact";
import AboutPage from "./components/About";
import AddProduct from "./components/product/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <ShowProduct /> },
      { path: "product/search/:term", element: <SearchProduct /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <ContactForm /> },
      { path: "about", element: <AboutPage /> },
      { path: "shipping", element: <Address /> },
      { path: "checkout", element: <Checkout /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "orderconfirmation", element: <OrderConfirmation /> }, 
    ],
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
