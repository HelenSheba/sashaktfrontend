import React from "react";
import { Link } from "react-router-dom";
import './explore.css';

const Features = () => {
  return (
    <div className="explorebackground-image">
      <div className="container mt-3">
        <div className="heading-box text-center mb">
          <h2>EXPLORE</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col">
            <div className="card">
              <Link to="/ytv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZa5lkfzKB1OYKQ6Fm4HbpVo4Sh7lPi4rU_A&usqp=CAU"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <div className="d-grid gap-4">
                  <Link to="/see" className="btn btn-outline-secondary">
                    <h5>VIDEOS</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card">
              <Link to="/games">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyP69-FEFyvDiA9K81QR5hQHtVPwXnjRENbMEf2kTAxRo67zHCFfUURgFB0dP6fc2NWw&usqp=CAU"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </Link>
              <div className="card-body text-center">
                <div className="d-grid gap-4">
                  <Link to="/games" className="btn btn-outline-secondary">
                    <h5>GAMES</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card">
              <Link to="/Stories">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJRVOLAJYyQtOqPaza-rMYwInj-BsKdizaw&usqp=CAU"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </Link>
              <div className="card-body text-center">
                <div className="d-grid gap-4">
                  <Link to="/Stories" className="btn btn-outline-secondary">
                    <h5>READ ALONG...</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
          {/* Card 4 */}
          <div className="col">
            <div className="card">
              <Link to="/knr">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.LJzsXHjiV-Mdah4QsHGUlgHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </Link>
              <div className="card-body text-center">
                <div className="d-grid gap-4">
                  <Link to="/Knr" className="btn btn-outline-secondary">
                    <h5>KNOW YOUR RIGHTS</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col">
            <div className="card">
              <Link to="/diy">
                <img
                  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705855747/rh4wc0e154z7e7nokbww.png"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </Link>
              <div className="card-body text-center">
                <div className="d-grid gap-4">
                  <Link to="/diy" className="btn btn-outline-secondary">
                    <h5>DO IT YOURSELF</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
        { /* <div className="col">
            <div className="card">
              <a href="#do">
                <img
                  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705856375/t5d36yvupy8mdscapbhs.png"
                  className="card-img-top"
                  height="150"
                  alt="..."
                />
              </a>
              <div className="card-body text-center">
                <div className="d-grid gap-4">
                  <Link to="/diy" className="btn btn-outline-secondary">
                    <h5>DO's AND DON'Ts</h5>
                  </Link>
                </div>
              </div>
            </div>
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Features;
