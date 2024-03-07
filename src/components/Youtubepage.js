import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div className="ytbackground-image">
      <div>
      <div className="heading-box text-center mb">
                <h2>VIDEOS</h2>
              </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                    <Link to="/yt/N14_XNH8Mqs">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705679613/spems9vv3dvrjssxworf.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                
                
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/jg1O9hjtj58">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705679286/nt6h657kdexk1u3cgxlc.jpg" className="img-fluid" alt="Video Thumbnail" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/ZtKPr1tpsQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705675981/bpdf5zoq1tw61tmsfqbc.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div class="container mt-5">
            <div class="row">
            <div class="col-lg-4 mb-3">
                    <Link to="/yt/gS9xOczDEZY">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705676109/xhq6fkvohol32qd8m65a.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/_cp1aiGFVHc">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705676349/snrga7aldhdd3pi2ctnv.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/QGLnnk46UQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaXwXOqkxiIB3nB0qQKjD17CCJvi8-8M8jYo9nOhJi8sS2o4bIdkJc5tbyzHNg3AJ_CI&usqp=CAU" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default Youtubepage;