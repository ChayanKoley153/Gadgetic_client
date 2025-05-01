import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Footer = () => {

  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();


  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>Gadgetic</h2>
          <p className="text-sm">
            Your one-stop shop for the latest gadgets at unbeatable prices.
            We offer top-notch products with fast delivery and excellent support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
                {isAuthenticated && <Link to={"/profile"} className="text-white">Profile</Link>}
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@gadgetic.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 bg-blue-700 text-sm">
        &copy; {new Date().getFullYear()} Gadgetic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

