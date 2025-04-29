import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; 

const ProductSkeleton = () => (
  <div className="my-3 col-md-4 d-flex justify-content-center align-items-center">
    <div
      className="card bg-dark text-light text-center"
      style={{ width: "18rem" }}
    >
      <div className="p-3 d-flex justify-content-center align-items-center">
        <Skeleton width={200} height={200} borderRadius={10} />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Skeleton width={120} height={20} />
        </h5>
        <div className="my-3 d-flex justify-content-center gap-2">
          <Skeleton width={60} height={35} />
          <Skeleton width={100} height={35} />
        </div>
      </div>
    </div>
  </div>
);

const ShowProduct = () => {
  const { filteredData, addToCart } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      setLoading(false);
    }
  }, [filteredData]);

  return (
    <div className="container d-flex justify-content-center align-items-center min-h-screen">
      <div className="row container d-flex justify-content-center align-items-center my-5">
        {loading
          ? Array(6).fill(null).map((_, index) => <ProductSkeleton key={index} />)
          : filteredData?.map((product) => (
              <div
                key={product._id}
                className="my-3 col-md-4 d-flex justify-content-center align-items-center"
              >
                <div
                  className="card bg-dark text-light text-center"
                  style={{ width: "18rem" }}
                >
                  <Link
                    to={`/product/${product._id}`}
                    className="d-flex justify-content-center align-items-center p-3"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt={product.title}
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                        border: "2px solid yellow",
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div className="my-3">
                      <button className="btn btn-primary mx-3">
                        ₹{product.price}
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          addToCart(
                            product._id,
                            product.title,
                            product.price,
                            1,
                            product.imgSrc
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ShowProduct;
