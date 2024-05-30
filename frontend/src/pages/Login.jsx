import { Link, useNavigate } from 'react-router-dom';
import '../assets/login_register.css';

/* 
  Allows user to log in to their existing account.
*/

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmitFormData = async (event) => {
    event.preventDefault(); //needed to stop the default event caused by submit for forms which refreshs the page.
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const res = await fetch('/api/login', { //used to fetch user
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) { //if user exists
      const { user } = await res.json();
      setUser(user); //save the user to state.
      navigate('/'); //navigates to the homepage after submit button is clicked.
    } else {
      const errorText = await res.text(); //error text sent from backend.
      window.alert(errorText); //alert to user of the error.
    }
  };

  return (
    // Icon and Txt
    <div className="dummyContainer-login">
      <div className="loginBorderContainer" id="loginPage">
        <form onSubmit={handleSubmitFormData}>
          <div className="login">
            <div className="loginContainer">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt=""
                  className="profilePic"
                />
              </div>
              <div className="loginTxt">Login</div>
            </div>
          </div>

          {/* Email and Password Section  */}
          <div className="emailAndPass">
            <div className="emailAndPassContainer">
              <div className="emailTxt">Email address</div>
              <div className="emailInput">
                <input id="email" type="text" className="input-field" />
              </div>
              <div className="buffer"></div>
              <div className="passTxt">Password</div>
              <div className="passInput">
                <input id="password" type="password" className="input-field" />
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className="loginBtn">
            <button id="myAccount" type="submit">
              Login
            </button>
          </div>
        </form>
        {/* Create Account Page */}
        <Link to="/register" className="createAccount">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;