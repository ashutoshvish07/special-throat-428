import React from "react";
import Style from "./Home.module.css";
import header from "../Icons/header.png";
import opticon from "../Icons/Opticon.gif";
import Company from "./Company";
const Home = () => {
  return (
    <div>
      {/* heater section */}
      <div className={Style.header_div}>
        <div className={Style.Text_Div}>
          <h1>Unlock digital potential</h1>
          <p>
            Creating digital experiences that transform your company takes
            data-driven decisions, continued experimentation and constant
            invention. Optimizely Digital Experience Platform helps you unlock
            your digital potential.
          </p>
        </div>
        <div className={Style.header_img}>
          <img src={header} alt="image" />
        </div>
      </div>
      {/* opticone  Section */}
      <div className={Style.Opticon}>
        <div className={Style.opt_gif}>
          <img src={opticon} alt="" />
        </div>

        <div className={Style.date}>
          <div>
            <h2>October 3-5</h2>
            <p>2022</p>
          </div>
          <div className={Style.vertical_line}></div>
          <div>
            <h1>Marriot Marquis </h1>
            <h1>San Diego Marina</h1>
          </div>
        </div>
        <div className={Style.para}>
          Lock in early bird ticket pricing before <span>Friday, July 22</span>
        </div>

        <div className={Style.btn_para}>
          <button>Register now</button>
          <p>Leran more→</p>
        </div>
      </div>
      <div>
        <Company />
      </div>

      <div className={Style.digital_section}>
        <div className={Style.digital_inner}>
          <h1>Digital Experience Platform</h1>
          
        </div>
        <div className={Style.digital_inner1}></div>
      </div>
    </div>
  );
};

export default Home;
