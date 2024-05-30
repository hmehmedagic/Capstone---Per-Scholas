import { Link, useNavigate } from 'react-router-dom'
import '../assets/login_register.css'

/* 
    handles registration of new users
*/
const Register = () => {
    const navigate = useNavigate();

    const handleSubmitFormData = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const name = document.querySelector('#name').value;
        const userName = document.querySelector('#userName').value;
        const confirm = document.querySelector('#confirm').value;

        if(!email) {
            window.alert('Please enter an email.');
            return;
        } else if(!password) {
            window.alert('Please enter a secure password.');
            return;
        } else if(!confirm || confirm != password) {
            window.alert('Please re-enter your password');
            return;
        }
    
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, userName, email, password }),
        });
    
        if (res.ok) {
          navigate('/');
        } else {
          const errorText = await res.text();
          window.alert(errorText);
        }
      };



    return (
        <div className="dummyContainer-register">
            <div className="loginBorderContainer" id="registerPage">
                <form onSubmit={handleSubmitFormData}>
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
                                <input id="email" type="text" className="input-field"/>
                            </div>
                            <div className="buffer"></div>
                            <div className="passTxt">Password</div>
                            <div className="passInput">
                                <input id="password" type="password" className="input-field"/>
                            </div>
                            <div className="buffer"></div>
                            <div className="passTxt">Confirm Password</div>
                            <div className="passInput">
                                <input id="confirm" type="password" className="input-field"/>
                            </div>
                            <div className="buffer"></div>
                            <div className="nameTxt">Name</div>
                            <div className="nameInput">
                                <input id="name" type="text" className="input-field"/>
                            </div>
                            <div className="buffer"></div>
                            <div className="userNameTxt">User Name</div>
                            <div className="userNameInput">
                                <input id="userName" type="text" className="input-field"/>
                            </div>
                        </div>
                    </div>
                    {/* Sign Up Button */}
                    <div className="signUpBtn">
                        <button id="myAccount" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
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