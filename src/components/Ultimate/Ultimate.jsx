import React from "react";
import "./Ultimate.scss";
import img1 from "../../assets/adv/image 2 28.svg";
import img2 from "../../assets/adv/image 227.svg";
import img3 from "../../assets/adv/image.svg";
import img4 from "../../assets/adv/image (1).svg";
import logo2 from "../../assets/adv/logo (1).svg";
import logo1 from "../../assets/adv/logo (6).svg";
import logo3 from "../../assets/adv/logo (2).svg";
import logo4 from "../../assets/adv/logo (3).svg";
import logo5 from "../../assets/adv/logo (4).svg";
import { Link } from "react-router-dom";

const Ultimate = () => {
  return (
    <div className="ultimate">
      <div className="ultimate__blocks">
        <div className="ultimate__blocks--block1">
          <img src={img1} alt="" />
        </div>
        <div className="ultimate__blocks--block2">
          <div className="ultimate__blocks--block2-top">
            <img src={img3} alt="" />
          </div>
          <div className="ultimate__blocks--block2-center">
            <h1>ULTIMATE</h1>
            <h2>SALE</h2>
            <h3>NEW COLLECTION</h3>
            <Link to={'/shop'}> 
            <button className="shop">SHOP NOW</button>
            </Link>
          </div>
          <div className="ultimate__blocks--block2-foot">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="ultimate__blocks--block3">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="ultimate__footer">
        <img src={logo1}  alt=''/>
        <img src={logo2}  alt=''/>
        <img src={logo3}  alt=''/>
        <img src={logo4}  alt=''/>
        <img src={logo5}  alt=''/>
      </div>
    </div>
  );
};

export default Ultimate;
