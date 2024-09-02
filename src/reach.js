import React from "react";
import PropTypes from "prop-types";
import map from "./map.png";
import "./reach.css";

function Reach() {
  return (
    <div className="reach_container">
      <div className="reach_para">
        <div className="reach_para_head">Our Reach</div>
        <div className="reach_para_p">
          <p>
            In keeping with its philosophy of 'Real Work Real Change', Smile
            Foundation , an <b>NGO in Delhi, India</b> to support the
            underserved, has taken its intervention into the interiors of India,
            reaching the unreached in the remotest of rural areas and urban
            slums with our services and making this{" "}
            <b>helping foundation in India,</b> the <b>best NGO in India.</b>
          </p>
        </div>
        <div className="reach_para_num">
          <span>
            <p className="num_value">23</p>
            <p className="num-head">States</p>
          </span>
          <span>
            <p className="num_value">400+</p>
            <p className="num-head">projects</p>
          </span>
          <span>
            <p className="num_value">2000+</p>
            <p className="num-head">Villages and Slums</p>
          </span>
        </div>
      </div>
      <div className="reach_image">
        <img src={map} className="reach_map" />
      </div>
    </div>
  );
}

export default Reach;
