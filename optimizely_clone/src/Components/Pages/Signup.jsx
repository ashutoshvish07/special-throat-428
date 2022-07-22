import React, { useState } from "react";
import style from "./Login.module.css";
import welcom from "../Icons/welcome-optimizely-logo.png";
import google from "../Icons/Goggle.png";
import grid from "../Icons/grid.png";
import color from "../Icons/color.png";
import line from "../Icons/lines.png";
import team from "../Icons/team.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [login, setlogin] = useState(false);

  return (
    <div>
      <div className={style.logi_div}>
        <div className={style.first_div}>
          <div className={style.welcom_div}>
            <img src={welcom} alt="" />
            <div className={style.login_Signup}>
              <div>
                <button>
                  <Link to="/login">Login</Link>
                </button>
              </div>
              <div>
                <button>
                  <Link to="/signup">Signup</Link>
                </button>
              </div>
            </div>
            <div className={style.logo}>
              <img src={google} alt="" />
              <h3>Sign up with Google</h3>
            </div>
            <br />
            <br />
            <p>or</p>

            <div className={style.input_form}>
              <label htmlFor="">Work Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="bob@atomicmarketing.com"
              />
              <br />
              <button>Continue</button>

              <p>
                By sign up you agree top <span>tearms</span> &{" "}
                <span>Condition</span>
              </p>
            </div>
          </div>
        </div>
        <div className={style.second_div}>
          <h1>Unleash the potential of your marketing team with:</h1>

          <div className={style.workSpace}>
            <img src={line} alt="" />
            <p>One workspace to plan, track & distribute work</p>
          </div>
          <div className={style.workSpace}>
            <img src={color} alt="" />
            <p>One workspace to plan, track & distribute work</p>
          </div>
          <div className={style.workSpace}>
            <img src={grid} alt="" />
            <p>One workspace to plan, track & distribute work</p>
          </div>

          <div className={style.team_div}>
            <img src={team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
