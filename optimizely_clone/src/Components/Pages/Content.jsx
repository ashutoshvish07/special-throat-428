import React from "react";
import Style from "./Content.module.css";
import arrow from "../Icons/whiteArrow.png";
import blueArrow from "../Icons/BlueArrow.png";
const Content = () => {
  return (
    <div>
      <div className={Style.content}>
        <div>
          <div className={Style.arrow}>
            <h1>Content</h1>
            <img src={arrow} alt="" />
          </div>

          <p className={Style.Para}>
            Easily create, tailor and scale content on a best-in-class
            enterprise CMS.
          </p>
          <div className={Style.btn}>
            <button>CMS</button>
            <button>Headless</button>
            <button>Approval workflows</button>
            <button>Media management</button>
            <button>Authoring & layout</button>
            <button>Project management</button>
          </div>
        </div>
        <div>
          <div className={Style.arrow}>
            <h1>Commerce</h1>
            <img src={arrow} alt="" />
          </div>

          <p className={Style.Para}>
            Run multiple shops, inventory and a catalog online and/or offline.
          </p>
          <div className={Style.btn}>
            <button>B2B</button>
            <button>B2C</button>
            <button>PIM</button>
            <button>Targeting</button>
            <button>Multisite</button>
            <button>Catalog management</button>
            <button>CCustomer specific pricing</button>
          </div>
        </div>
        <div>
          <div className={Style.arrow}>
            <h1>Optimization</h1>
            <img src={arrow} alt="" />
          </div>

          <p className={Style.Para}>
            Use AI to test new features and personalize every touchpoint.
          </p>
          <div className={Style.btn}>
            <button>Web A/B testing</button>
            <button>Personalization</button>
            <button>Feature management</button>
            <button>Data</button>
            <button>Email</button>
            <button>Recommendations</button>
          </div>
        </div>
      </div>
      {/* Explore our latest insights */}
      <div className={Style.explore}>
        <h1>Explore our latest insights</h1>
        <div>
          <div className={Style.Digital}>
            <div>
              <h4>Digital Experiences</h4>
              <p>
                Leading digital strategies wrap themselves around every customer
                and conform to their behaviors, preferences and history. They
                embrace customers in a context that evolves.
              </p>

              <div className={Style.DXP}>
                <a href="/">DXP insights</a>
                <img src={blueArrow} alt="arrow" />
              </div>
            </div>
            <div>
              <h4>Experimentation</h4>
              <p>
                With an experimentation platform that gives you space to try new
                approaches and respond to the needs and behaviors of your
                audience, you can test instead of guess.
              </p>

              <div className={Style.DXP}>
                <a href="/">Experimentation insights</a>
                <img src={blueArrow} alt="arrow" />
              </div>
            </div>
            <div>
              <h4>Content management</h4>
              <p>
                Learn how successful companies are in a constant state of
                invention and empower their teams to blend science and
                creativity to create compelling content experiences.
              </p>

              <div className={Style.DXP}>
                <a href="/">Content management insights</a>
                <img src={blueArrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
