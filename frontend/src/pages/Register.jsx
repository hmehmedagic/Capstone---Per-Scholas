import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/login_register.css'

const Register = () => {
  return (
    <div className="dummyContainer-register">
        <div className="loginBorderContainer" id="registerPage">
            <form action="index.html">
                {/* Icon and Txt */}
                <div className="login">
                    <div className="loginContainer">
                        <div><img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" className="profilePic"/></div>
                        <div className="signUpTxt">Sign Up</div>
                    </div>
                </div>

                {/* Email and Password Section */}
                <div className="emailAndPass">
                    <div className="emailAndPassContainer">
                        <div className="emailTxt">Email address</div>
                        <div className="emailInput">
                            <input type="text" className="input-field"/>
                        </div>
                        <div className="buffer"></div>
                        <div className="passTxt">Password</div>
                        <div className="passInput">
                            <input type="password" className="input-field"/>
                        </div>
                        <div className="buffer"></div>
                        <div className="passTxt">Confirm Password</div>
                        <div className="passInput">
                            <input type="password" className="input-field"/>
                        </div>
                        <div className="buffer"></div>
                        <div className="nameTxt">Name</div>
                        <div className="nameInput">
                            <input type="text" className="input-field"/>
                        </div>
                        <div className="buffer"></div>
                        <div className="userNameTxt">User Name</div>
                        <div className="userNameInput">
                            <input type="text" className="input-field"/>
                        </div>
                    </div>
                </div>
                {/* Sign Up Button */}
                <div className="signUpBtn">
                    <Link to="/">
                        <button id="myAccount">Sign Up</button>
                    </Link>
                </div>
            </form>
            {/* <div className="signUpBtn"> */}
            <div className="signUpBtn2">
                <Link to="/login">
                    <button id="myAccount">Already Member</button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Register