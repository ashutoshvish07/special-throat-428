import React from "react";
import Style from "./ForYou.module.css";
import img1 from "../Icons/Opticon2022.png";
import img2 from "../Icons/EBOOK.png";
import arrow from "../Icons/BlueArrow.png";
const ForYou = () => {
  return (
    <div className={Style.For_You}>
      <h1>Just for you</h1>
      <div className={Style.Div_sec}>
        <div>
          <img src={img1} alt="" />
          <h2>Opticon 2022: Save at least $300 with early bird pricing</h2>
          <p>
            Inspired by the explosive growth of technologies and digital
            transformations, Opticon brings together leaders of technology,
            media, business, and brands for a compelling three days of
            conversations on the evolutions and innovations shaping the future
            of digital experiences.
          </p>
          <div className={Style.link_tag}>
            <a href="/">Read more</a>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div>
          <img src={img2} alt="" />
          <h2>OThe Big Book of Experimentation</h2>
          <p>
            33 proven ideas demonstrating how real businesses leveraged
            experimentation to gain greater insight and control over how they
            engage with customers, tailor their digital channels and improve
            customer satisfaction.
          </p>
          <div className={Style.link_tag}>
            <a href="/">Read more</a>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
