import React from "react";
import style from "./Footer.module.css";
import logo from "../Icons/Logomark.png";
import Yt from "../Icons/Yt.png";
import Fb from "../Icons/Fb.png";
import Linkdin from "../Icons/Linkdin.png";
import Twit from "../Icons/Twit.png";
const Footer = () => {
  return (
    <div className={style.main_div}>
      <div className={style.Footer}>
        <div className={style.content_div}>
          <img src={logo} alt="" />
          <hr />
          <h3>Products</h3>
          <ul>
            <li>Digital Experience Platform</li>
            <li>Content Cloud</li>
            <li>Commerce Cloud</li>
            <li>Intelligence Cloud</li>
            <li>Plans & pricing</li>
          </ul>
        </div>

        <div className={style.content_div}>
          <div>
            <hr />
            <h3>Resources</h3>
            <ul>
              <li>Insights</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className={style.content_div}>
          <div>
            <hr />
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Offices</li>
              <li>Executive Team</li>
              <li>IDiversity & Inclusion</li>
              <li>Press</li>
            </ul>
          </div>
        </div>

        <div className={style.content_div}>
          <div>
            <hr />
            <h3>Careers</h3>
            <ul>
              <li>About working at Optimizely</li>
              <li>We're hiring!</li>
            </ul>
          </div>
        </div>

        <div className={style.content_div}>
          <h4>Language</h4>
          <br />
          <select name="" id="">
            <option value="">English</option>
            <option value="">Deutsch</option>
            <option value="">Svenska</option>
            <option value="">Norsk</option>
          </select>
          <hr />
          <h3>Global headquarters</h3>
          <ul>
            <li>119 5th Ave 7th floor</li>
            <li>New York, NY 10003, USA</li>
          </ul>

          <b>Contact Us</b>   
          <p>Phone  +1 603 594 0249</p>

        </div>
      </div>
      <div className={style.bottom_sec}>
        <div className={style.footer_text}>
          <div>
            <p>© 2022 Optimizely, Inc. All Rights Reserved.</p>
          </div>
          <div>
            <a href="">Privacy policy</a>
          </div>
          <div>
            <a href="">Website terms of use</a>
          </div>
          <div>
            <a href="">Trust center</a>
          </div>
        </div>
        <div className={style.social}>
          <div>
            <img src={Fb} alt="" />
          </div>
          <div>
            <img src={Yt} alt="" />
          </div>
          <div>
            <img src={Linkdin} alt="" />
          </div>
          <div>
            <img src={Twit} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
