import React from "react";
import Style from "./Home.module.css";
import header from "../Icons/header.png";
import opticon from "../Icons/Opticon.gif";
import Company from "./Company";
import video from "../Icons/video.png";
import arrow from "../Icons/whiteArrow.png";
import maza from "../Icons/Mazda logo.png";
import Far from "../Icons/Farfetch logo.png";
import apron from "../Icons/Blue Apron logo.png";
import Content from "./Content";
import yelArrow from "../Icons/yelloArrow.png";
import Form from "./Form";
import ForYou from "./ForYou";
import Footer from "./Footer";
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
          <img src={video} alt="" />
        </div>
        <div className={Style.digital_inner1}>
          <h2>DXP</h2>
          <h1>
            Confidently create and optimize with Optimizely Digital Experience
            Platform
          </h1>
          <p>
            Transform digital experience creation with Optimizely Digital
            Experience Platform, an open, extensible platform providing one
            consistent foundation behind every digital touch point.
          </p>
          <div className={Style.link_A}>
            <a href="#">Learn about our Digital Experience Platform </a>

            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      {/* content */}
      <Content />
      {/* mazada */}
      <div className={Style.Mazada}>
        <div className={Style.mazada_div}>
          <img src={maza} alt="" />
          <h1>200%</h1>
          <p>Increase engagement on site</p>

          <h1>5m+</h1>
          <p>Unique visitors within 2 months of launch</p>

          <img id={Style.yello_Arrow} src={yelArrow} alt="" />
        </div>
        <div className={Style.appron_div}>
          <img src={apron} alt="" />
          <h1>10X</h1>
          <p>Increase in experiment run per month after adopting Optimizely</p>

          <h1>100%</h1>
          <p>Number of product teams using experimentation</p>

          <img id={Style.yello_Arrow} src={yelArrow} alt="" />
        </div>
        <div className={Style.farfetch_div}>
          <img src={Far} alt="" />
          <h1>2X</h1>
          <p>
            Experimentation community has enlarged from 80 to 170 participants
          </p>

          <h1>20-50</h1>
          <p>Experiments running each month by the experimentation team</p>

          <img id={Style.yello_Arrow} src={yelArrow} alt="" />
        </div>
      </div>
     {/* form  */}
     <div>
      <Form/>
     </div>
     <div>
      <ForYou/>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
};

export default Home;
