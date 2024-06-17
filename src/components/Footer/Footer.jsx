import React from "react";
import "./Footer.scss";
import img1 from "../../assets/adv/image 2.svg";
import img2 from "../../assets/adv/image 3.svg";

const footRoutes = [
  {
    name: "Support Center",
  },
  {
    name: "Invoicing",
  },
  {
    name: "Contact",
  },
  {
    name: "Careers",
  },
  {
    name: "Blog",
  },
  {
    name: "FAQs",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__subs">
        <div className="footer__subs-img1">
          <img src={img1} alt="" />
        </div>
        <div className="footer__subs-center">
          <h1>Subscribe To Our Newsletter</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis et odio delectus dolor ea sunt, adipisci quisquam quam
            est tempore illum minus laborum necessitatibus non recusandae,
            nostrum aut eveniet debitis?
          </p>
          <button>Subscribe Now</button>
        </div>
        <div className="footer__subs-img2">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content-top">
        <h1>FASCO</h1>
        <ul>
          {footRoutes.map((foot, i) => (
            <li key={i}>{foot.name}</li>
          ))}
        </ul>
      </div>
      <div className="footer__content-foot">
        <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
