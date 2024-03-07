import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="container mt-4">
      <div className="heading-box text-center mb">
        <h2>GAMES</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
        {/* Game 1 */}
        <div className="col">
          <div className="card">
            <Link to="/jigsaw">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hsMqU3oE4fAOl3vxqrAqmPSKz3qcfqiqCQ&usqp=CAU"
                className="card-img-top"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <div className="d-grid gap-4">
                <Link to="/jigsaw" className="btn btn-outline-secondary">
                  <h5>JIGSAW PUZZLE</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Game 2 */}
        <div className="col">
          <div className="card">
            <Link to="/memg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsh9_YGpz6-1krHzrDKhftM1aT3QZX_72zA&usqp=CAU"
                className="card-img-top"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card-body text-center">
              <div className="d-grid gap-4">
                <Link to="/memg" className="btn btn-outline-secondary">
                  <h5>MEMORY GAME</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Game 3 */}
        <div className="col">
          <div className="card">
            <Link to="/mazehome">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVMfufAYJtlazcRbj7nyT-CBPb4mVGvHW6g&usqp=CAU"
                className="card-img-top"
                height="200"
                width="50"
                alt="..."
              />
            </Link>
            <div className="card-body text-center">
              <div className="d-grid gap-4">
                <Link to="/mazehome" className="btn btn-outline-secondary">
                  <h5>MAZE GAME</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Game 4 */}
        <div className="col">
          <div className="card">
            <Link to="/candyhome">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBJNmm8evpGrfTJB6dmpbr2DGoQWyWr72hkylX_C1WhPovWE8vpTHkY5P3f1u0tPEsDI&usqp=CAU"
                className="card-img-top"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card-body text-center">
              <div className="d-grid gap-4">
                <Link to="/candyhome" className="btn btn-outline-secondary">
                  <h5>MATCHING GAME</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
