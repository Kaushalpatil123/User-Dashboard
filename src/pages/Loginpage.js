import React from "react";
import "../login.css";
import git from "../img/github (1).png";
import twitter from "../img/twitter Vector.png";
import linkedin from "../img/linkedin vector.png";
import discort from "../img/discort vector.png";
import google from "../img/google-icon 1.png";
import apple from "../img/apple Vector.png";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    alert("Log in Successful");
    navigate("/dashboard");
  };

  return (
    <div className=" flex flex-row">
      <div className="right">
        <h4 className="logo">LOGO</h4>
        <h1 className="heading">Board.</h1>
        <ul>
          <a className="platformlink" href="">
            <img className="platformimg" src={git} alt="git" />
          </a>
          <a className="platformlink" href="">
            <img className="platformimg" src={twitter} alt="twitter" />
          </a>

          <a className="platformlink" href="">
            <img className="platformimg" src={linkedin} alt="linkedin" />
          </a>

          <a className="platformlink" href="">
            <img className="platformimg" src={discort} alt="discort" />
          </a>
        </ul>
      </div>
      <div className="left">
        <div className="signup">
          <h2 className="signuphead">Sign In</h2>
          <h5 className="signupdes">Sign in to your account </h5>
          <div className="links">
            <div className="link">
              <img className="linkimg" src={google} alt="" />
              <a href=""> sign in with google</a>
            </div>
            <div className="link">
              <img className="linkimg" src={apple} alt="" />
              <a href=""> sign in with Apple</a>
            </div>
          </div>
          <form onSubmit={redirectToDashboard}>
            <div className="logininputs">
              <label htmlFor="">Email.address</label>
              <br />
              <input
                className="forminputs"
                type="email"
                required
                placeholder="abc@gmail.com"
              />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input className="forminputs" type="password" required />
            </div>
            <a className="forgot" href="">
              Forgot password?
            </a>
            <br />
            <button className="loginbtn">Sign In</button>
          </form>
          <p className="registerlink">
            Don't Have an account? <a href="">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
