import React, { useState } from "react";
import style from "./Login.module.css";
import welcom from "../Icons/welcome-optimizely-logo.png";
import google from "../Icons/Goggle.png";
import grid from "../Icons/grid.png";
import color from "../Icons/color.png";
import line from "../Icons/lines.png";
import team from "../Icons/team.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setlogin] = useState("");
  const navigate = useNavigate()
  let data = localStorage.getItem("email")
  console.log("Data-->",data)
  const handleClick = () => {
      if(login === data){
        alert("Login SucessFull")
    navigate("/")
      }
      else{
        alert("Wrong credential")
      }
  };

  return (
    <div>
      <div className={style.logi_div}>
        <div className={style.first_div}>
          <div className={style.welcom_div}>
            <img src={welcom} alt="" />
            <div className={style.login_Signup}>
              <div>
                <button onClick={handleClick}>
                  <Link to="/login">Login</Link>
                </button>
              </div>
              <div>
                <button onClick={handleClick}>
                  <Link to="/signup">Signup</Link>
                </button>
              </div>
            </div>
            <div className={style.logo}>
              <img src={google} alt="" />
              <h3>Login with Google</h3>
            </div>
            <br />
            <br />
            <p>or</p>

            <div className={style.input_form}>
              <label htmlFor="">Work Email</label>
              <br />
              <input
              onChange={(e)=>setlogin(e.target.value)}
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

export default Login;

// import axios from 'axios';
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { login } from '../../redux/actions';

// const Login = () => {

//     const [mail,setMail] = useState("") ;
//     const [password,setPassword] = useState("") ;

//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const handleSubmit =()=>{
//         let loginData = {
//             username : mail ,
//             password : password
//         }

//         if(mail!=="" && password!=="")
//         {
//             axios.post('https://masai-api-mocker.herokuapp.com/auth/login',loginData)
//             .then((res)=>{
//                 const isAuthAction = login(res.data)
//                 dispatch(isAuthAction)
//                 alert("Login Successful.")
//                 navigate('/home')
//             })
//             .catch((e)=>{
//                 console.log(e) ;
//                 alert("wrong credential")
//             })
//         }
//         else{
//             alert("Fill complete details")
//         }
//     }

//   return (
//    <>
//         <center><h2>LOGIN</h2></center>

//         <center>
//              <input type='text' placeholder='enter username' onChange={(e)=>setMail(e.target.value)}  /> <br></br>
//              <input type='password' placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}  /> <br></br>
//              <button onClick={()=>handleSubmit()}>SUBMIT</button>
//         </center>
//         <br></br>
//         <center>
//                 <Link to='/register' style={{textDecoration:"none"}}>Click Here to Register here</Link>
//         </center>
//    </>
//   )
// }

// export default Login
