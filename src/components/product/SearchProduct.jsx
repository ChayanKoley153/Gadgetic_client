import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";

const SearchProduct = () => {
  const { products } = useContext(AppContext);
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (products.length && term) {
      const filtered = products.filter((product) =>
        (product?.title || "").toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [term, products]);

  if (!products.length) {
    return (
      <div className="container text-center my-5">
        <h2 className="text-light">Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="container text-center my-5 min-h-screen">
      <h2 className="text-light mb-4">
        Search Results for "<span style={{ color: "yellow" }}>{term}</span>"
      </h2>
      <div className="row justify-content-center">
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <div key={product._id} className="col-md-4 d-flex justify-content-center my-3">
              <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                <Link to={`/product/${product._id}`} className="p-3 d-flex justify-content-center">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="d-flex justify-content-center my-3">
                    <button className="btn btn-primary mx-2">
                      {product.price} ₹
                    </button>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-light mt-5">No products found for "{term}"</h4>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
