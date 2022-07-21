import React from "react";
import Style from "./Form.module.css";
import form from "../Icons/Form.png"
const Form = () => {
  return (
    <div className={Style.main_div}>
      <div className={Style.blue}></div>
      <div className={Style.second_div}>
        <h1>Getting started with Optimizely</h1>
        <p>
          Optimizely is known for content, commerce and optimization with our
          Digital Experience Platform (DXP). Millions of experiences are served
          with our platform every single day, helping organizations grow
          exponentially online. Ready to take your digital experiences to the
          next level?
        </p>

        <ul>
          <b>
            {" "}
            If you have questions about our products or services, our experts
            are here to help with:
          </b>
          <li>Technical requirements</li>
          <li>TCustomized demos</li>
          <li>Pricing information</li>
          <li>Optimizely product capabilities</li>
        </ul>
      </div>
      <div className={Style.Form_div}>
        <h1>First, we need to know a couple of things about you</h1>
        <div className={Style.First_name}>
          <img src={form} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
