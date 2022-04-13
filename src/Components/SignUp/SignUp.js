import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css'
const SignUp = () => {

    const {register,error,setError,saveUsertoDb,GoogleLogin,saveGoogleUsertoDb}=useAuth()
    const [logInData,setData]=useState({})
    const [passwordShown, setPasswordShown] = useState(false);
    const history = useNavigate()
    
  const location = useLocation()
    const url = location.state?.from.pathname || "dashboard"
    
    
    
    // Password toggle handler
    const togglePassword = () => {
     
      setPasswordShown(!passwordShown);
    }
   
     const handleChange=e=>{
      const field= e.target.name
      const value=e.target.value
   const newLogindata={...logInData}
   newLogindata[ field ]=value;
   setData(newLogindata)

   

   
     }
       const handleSignup=e=>{
        e.preventDefault()
         if(logInData.password.length<6)
         {
           setError("password must be 6 digits")
     
         }

                   
        else{
           register(logInData.email,logInData.password,logInData.username)
   
   
        }
        if(logInData.password2!==logInData.password) {
          alert("did not matched")
         return 
                    } 
        saveUsertoDb(logInData.email,logInData.name)
   
        alert("user Created ")
         history(url)
       }

     
  const handleGoogle = () => {
    GoogleLogin().then(result => {
      history(url)
    });
  }
        
    return (
        <div className="body">
            <div id="login-box">
  <div className="left">
    <h1>Sign up</h1>
    
   <form onSubmit={handleSignup} action="">
   <input className="input" onChange={handleChange} type="text" name="username" placeholder="Username" />
    <input className="input" onChange={handleChange} type="text" name="email" placeholder="E-mail" />
    <input className="input" onChange={handleChange}  type={passwordShown ? "text" : "password"} name="password" placeholder="Password" /> 
    <input className="input" onChange={handleChange}  type={passwordShown ? "text" : "password"} name="password2" placeholder="Retype password" />
    <input onChange={togglePassword} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
        Default checkbox
      </label>
    
    <button className="input" type="submit" name="signup_submit" value="Sign me up">Sign Me Up</button>
   </form>
  </div>
  
  <div className="right">
    <span className="loginwith">Sign in with<br />social network</span>
    
   
    <button onClick={handleGoogle} className="social-signin google">Log in with Google+</button>
  </div>
  <div className="or">OR</div>
</div>
        </div>
    );
};

export default SignUp;