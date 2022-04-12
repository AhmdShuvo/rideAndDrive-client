import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css'
const SignUp = () => {

    const {register,error,setError,saveUsertoDb}=useAuth()

    const [logInData,setData]=useState({})
       
   
     const handleChange=e=>{
      const field= e.target.name
      const value=e.target.value
   const newLogindata={...logInData}
   newLogindata[ field ]=value;
   setData(newLogindata)
   console.log(newLogindata);
   

   
     }
       const handleSignup=e=>{
         if(logInData.password.length<6)
         {
           setError("password must be 6 digits")
     
         }
                      
        else{
           register(logInData.email,logInData.password,logInData.username)
   
   
        }
   
        saveUsertoDb(logInData.email,logInData.name)
   
        alert("user Created ")
           e.preventDefault()
       }
    return (
        <div className="body">
            <div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    
    <input className="input" onChange={handleChange} type="text" name="username" placeholder="Username" />
    <input className="input" onChange={handleChange} type="text" name="email" placeholder="E-mail" />
    <input className="input" onChange={handleChange} type="password" name="password" placeholder="Password" />
    <input className="input" onChange={handleChange} type="password" name="password2" placeholder="Retype password" />
    
    <input className="input" type="submit" name="signup_submit" value="Sign me up" />
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
   
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
        </div>
    );
};

export default SignUp;