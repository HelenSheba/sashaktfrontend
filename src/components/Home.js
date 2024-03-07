import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="background-image">
        <img src="https://i.pinimg.com/564x/48/1e/01/481e01b1957ed50b4dc33e94c805601c.jpg" alt="Background" />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="heading-box1 text-center mb">
                <h1 style={{fontSize:"50px"}}>SASHAKT</h1>
                <h2>APP FOR CHILD EMPOWERMENT</h2>
              </div>
              <div className="d-flex justify-content-center mt"> 
                <Link to="/loginsignup" className="btn btn-secondary">Explore!</Link> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
