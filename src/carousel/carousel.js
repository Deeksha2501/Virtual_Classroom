import React from "react";
import bg1 from "./bg1.jpeg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";
import bg4 from "./bg4.jpg";
import "./style.css";

const Carousel = () => {
  return (
    <>
      <div className="carousel">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bg4} alt="bg4" />
            </div>
            <div className="carousel-item">
              <img src={bg3} alt="bg3" />
            </div>
            <div className="carousel-item">
              <img src={bg2} alt="bg2" />
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Carousel;
