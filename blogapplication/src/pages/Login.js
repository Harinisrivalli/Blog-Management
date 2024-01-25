import React from "react";
import {auth,provider} from '../firebase-config';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}){
    let navigate=useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
        });
      };
    return(
         <div className="loginpage">
            <br></br>
            <div className="log">To Access the Features of the System Login!!!<br></br>
            <p>Sign In With Google to Continue :)</p>
            </div>
            
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign In With Google
            </button>&nbsp;click here to sign!!!
        </div>
        )
}
export default Login;