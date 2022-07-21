import React from "react";
import Style from "./Content.module.css";
import arrow from "../Icons/whiteArrow.png";
const Content = () => {
  return (
    <div className={Style.content}>
      <div>
        <div className={Style.arrow}>
          <h1>Content</h1>
          <img src={arrow} alt="" />
        </div>

        <p className={Style.Para}>
          Easily create, tailor and scale content on a best-in-class enterprise
          CMS.
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
  );
};

export default Content;
