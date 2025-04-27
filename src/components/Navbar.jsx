import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticated, cart } = useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
    setMenuOpen(false); // Close menu after search
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-blue-500 relative transition-all">

        <Link to={"/"} className="text-white text-decoration-none">
          <h1 className="text-3xl font-bold hover:text-indigo-500 transition-colors">Gadgetic</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to={"/"} className="text-white">Home</Link>
          <Link to={"/about"} className="text-white">About</Link>
          <Link to={"/contact"} className="text-white">Contact</Link>
          {isAuthenticated && <Link to={"/add-product"} className="text-white">Add Product</Link>}

          {/* Search Bar */}
          <form
            className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full"
            onSubmit={submitHandler}
          >
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-white"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products"
            />
            <button type="submit">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.836 10.615 15 14.695"
                  stroke="#7A7B7D"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  clipRule="evenodd"
                  d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                  stroke="#7A7B7D"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to={"/cart"} className="relative text-white">
                  <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  {cart?.items?.length > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs px-2 text-white bg-indigo-500 w-[20px] h-[20px] rounded-full">
                      {cart.items.length}
                    </span>
                  )}
                </Link>

                <Link to={"/profile"} className="btn btn-info text-white">Profile</Link>

                <button
                  className="btn btn-danger text-white"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-secondary text-white">Login</Link>
                <Link to={"/register"} className="btn btn-info text-white">Register</Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
          aria-label="Menu"
        >
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-blue-500 shadow-md py-4 flex flex-col gap-2 px-5 text-sm md:hidden z-50 
          items-center justify-center">
            <Link to={"/"} onClick={() => setMenuOpen(false)} className="text-white">Home</Link>
            <Link to={"/about"} onClick={() => setMenuOpen(false)} className="text-white">About</Link>
            <Link to={"/contact"} onClick={() => setMenuOpen(false)} className="text-white">Contact</Link>
            {isAuthenticated && <Link to={"/add-product"} onClick={() => setMenuOpen(false)} className="text-white">Add Product</Link>}

            <form
              className="flex items-center gap-2 mb-3"
              onSubmit={submitHandler}
            >
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="form-control w-full text-black"
                placeholder="Search Products..."
              />
            </form>

            {/* User Actions for Mobile */}
            {isAuthenticated ? (
              <>
                <Link
                  to={"/cart"}
                  className="btn btn-primary my-1 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart ({cart?.items?.length || 0})
                </Link>
                <Link
                  to={"/profile"}
                  className="btn btn-info my-1 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="btn btn-danger my-1 text-white"
                  onClick={() => {
                    logout();
                    navigate("/");
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="btn btn-secondary my-1 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-info  my-1 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </nav>

       {/* Sub-filter bar */}
       {location.pathname === "/" && (
          <div className="sub_bar d-none d-md-flex justify-content-center flex-wrap py-2 bg-light text-dark">
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => setFilteredData(products)}
            >
              No Filter
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyCategory("mobiles")}
            >
              Mobiles
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyCategory("laptops")}
            >
              Laptops
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyCategory("cameras")}
            >
              Cameras
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyCategory("headphones")}
            >
              Headphones
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyPrice(15999)}
            >
              15999+
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyPrice(25999)}
            >
              25999+
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyPrice(49999)}
            >
              49999+
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyPrice(69999)}
            >
              69999+
            </div>
            <div
              className="items mx-2 my-1 btn btn-outline-secondary"
              onClick={() => filterbyPrice(89999)}
            >
              89999+
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
