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
  const [signup, setSignup] = useState("");
    //  const[data,setData] = useState([])
   const handleChange = (e) =>{
      // let {name,value} = e.target
      //  setSignup({
      //   ...signup,
      //   [name] : value
      //  })
   }

   const handleClick = () =>{
   //  setSignup((signup))
     localStorage.setItem("email",signup)
     console.log(signup)
   }
//console.log("data",data)
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
              onChange={(e)=>setSignup(e.target.value)}
                type="email"
                name="email"
                placeholder="bob@atomicmarketing.com"
              />
              <br />
              <button onClick={handleClick}>Continue</button>

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
// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { register } from "../redux/actions";
// import {register} from "../../redux/actions"

// const Signup = () => {
//   // const registerAuth = useSelector((state)=> state.registerAuth)

//   // console.log(data)
//   const navigate = useNavigate();

//   const [Name, setName] = useState("");
//   const [userMail, setUserMail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [userMobile, setUserMobile] = useState("");
//   const [userDescription, setUserdescription] = useState("");
//   const [userName, setUsername] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     let userData = {
//       name: Name,
//       email: userMail,
//       password: userPassword,
//       username: userName,
//       mobile: userMobile,
//       description: userDescription,
//     };
//     console.log(userData);

//     if (userMail !== "" && userPassword !== "") {
//       axios
//         .post("https://masai-api-mocker.herokuapp.com/auth/register", userData)

//         .then((res) => {
//           console.log(res.data);
//           const registerAction = register(res.data);
//           dispatch(registerAction);
//           alert("Registration Successful...!!");
//           navigate("/");
//         })
//         .catch((e) => {
//           console.log(e);
//           alert("Wrong Credential...");
//         });
//     } else {
//       alert("Fill Complete Data");
//     }
//   };

//   return (
//     <>
//       <center>
//         <h2>REGISTER</h2>
//       </center>
//       <center>
//         <input
//           type="text"
//           placeholder="enter email"
//           onChange={(e) => setUserMail(e.target.value)}
//         />{" "}
//         <br></br>
//         <input
//           type="password"
//           placeholder="enter password"
//           onChange={(e) => setUserPassword(e.target.value)}
//         />{" "}
//         <br></br>
//         <input
//           type="text"
//           placeholder="enter name"
//           onChange={(e) => setName(e.target.value)}
//         />{" "}
//         <br></br>
//         <input
//           type="text"
//           placeholder="enter username"
//           onChange={(e) => setUsername(e.target.value)}
//         />{" "}
//         <br></br>
//         <input
//           type="number"
//           placeholder="enter mobile"
//           onChange={(e) => setUserMobile(e.target.value)}
//         />{" "}
//         <br></br>
//         <input
//           type="text"
//           placeholder="enter description"
//           onChange={(e) => setUserdescription(e.target.value)}
//         />{" "}
//         <br></br>
//         <button onClick={() => handleSubmit()}>SUBMIT</button>
//       </center>
//     </>
//   );
// };

// export default Signup;
