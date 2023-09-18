import {useState} from "react";
import './App.css';
import logo from './assets/instagram.png'

function App() {
  const [login, setLogin] = useState(true);

  const switchLogin = () => {
    setLogin(!login)
  }

  return (
    <div id="Container"> 
    <div id="User">
      <img src={logo} alt="InstaLogo"/>
      <input hidden={login} type="text" name="" placeholder="Mobile Number or Email" id=""  />
      <input hidden={login} type="text" name="" placeholder="Full Name" id="" />
      <input type="email" email="" id="" placeholder="Phone number, username or email" />
      <input type="password" name="" id="" placeholder="password" />
      <button>{login?"Sign In" : "Sign Up"}</button>
      <div id="footer">
          {login?"Don't have account?" : "have an account?"}
          <span onClick={switchLogin}>{login?"Sign up": "Log In"}</span>
      </div>

    </div>
    </div>
  
  );
}

export default App;
