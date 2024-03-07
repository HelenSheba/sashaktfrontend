import React from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <div className="container mt-4">
      <div className="heading-box text-center mb">
        <h2>READ ALONG...</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
        {/* Story 1 */}
        <div className="col">
          <div className="card">
            <Link to="/story1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bggGi-fKGaLB3imcxnGzdMthRcX4zplXPQ&usqp=CAU"
                className="card-img-top"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <div className="d-grid gap-4">
                <Link to="/story1" className="btn btn-outline-secondary">
                  <h5>STORY-1</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Story 2 */}
        <div className="col">
          <div className="card">
            <Link to="/story2">
              <img
                src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705850493/xzohfu8qjz1fnhshjuhf.jpg"
                className="card-img-top"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card-body text-center">
              <div className="d-grid gap-4">
                <Link to="/story2" className="btn btn-outline-secondary">
                  <h5>STORY-2</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
