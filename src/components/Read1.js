import React from 'react';
import { Link } from 'react-router-dom';

const Read1 = () => {
  return ( 
    <div>
        <div className="heading-box text-center mb">
                <h2>READ ALONG...</h2>
              </div>
        <div class="main">
    </div>
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888086/carimg1_fs92jl.jpg"
              className="d-block w-100" height="500"  alt="..." />
          </div>
          <div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888194/carimg2_hib2ua.jpg"
                    class="d-block w-100" height="500"  alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888249/carimg3_e3xnej.jpg"
                    class="d-block w-100" height="500"  alt="..."/>
            </div>
			<div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892155/carimg4_f8wrlx.jpg"
                    class="d-block w-100" height="500"  alt="..."/> 
            </div>
			<div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892817/carimg5_qgvcrs.jpg"
                    class="d-block w-100" height="500"  alt="..."/>
            </div>
			<div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892936/carimg6_rs9v2o.jpg"
                    class="d-block w-100" height="500"  alt="..."/>
            </div>
			<div class="carousel-item">
                <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1700893012/carimg7_dyacml.jpg"
                    class="d-block w-100" height="500"  alt="..."/>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-center mt-4">
          <h1>Did we get it right??</h1>
          <Link to="/quiz1" className="btn btn-warning">Let's See</Link>
        </div>
        </div>
    </div>
  );
}
export default Read1;