import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {

	const { Login, setIsLoadng, GoogleLogin, saveGoogleUsertoDb } = useAuth()

	const [logInData, setData] = useState({})
	const [error,setError]=useState('')

	const location = useLocation()
	const history = useNavigate()
	const url = location.state?.from.location.pathname || "/"


	const handleGoogle = () => {
		GoogleLogin().then(result => {
			saveGoogleUsertoDb(result.user.email, result.user.displayName)
history(url)
		});
	}


	const handleChange = e => {
		const field = e.target.name
		const value = e.target.value
		const newLogindata = { ...logInData }
		newLogindata[field] = value;
		setData(newLogindata)
		

	}

	const handleLogin = e => {
		e.preventDefault()

		Login(logInData.email, logInData.password).then((userCredential) => {
			// Signed in 
			setIsLoadng(false);
			const user = userCredential.user;
			history(url)

			// ...
		})
			.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
setError(errorMessage)
			}).finally(() => {


			});
	}
	return (
		<section className="body">
			<div className="containers">
<div className="screen">
	<div className="screen__content">
		
		<form onSubmit={handleLogin} className="login">
		{error && <h1 style={{color:"red",fontsize:"26px"}}>{error}</h1>}
			<div className="login__field">
<i className="login__icon fas fa-user"></i>
<input required onChange={handleChange} name="email" type="text" className="login__input" placeholder="Email" />
			</div>
			<div className="login__field">
<i className="login__icon fas fa-lock"></i>
<input required onChange={handleChange} name="password" type="password" className="login__input" placeholder="Password" />
			</div>
			<button className="button login__submit">
<span className="button__text">Log In Now</span>
<i className="button__icon fas fa-chevron-right"></i>
			</button>
			<Link to="/signup" className="button login__submit">
<span className="button__text">New User?</span>
<i className="button__icon fas fa-chevron-right"></i>
			</Link>
			<br /><br />
			
		</form>
		<div className="social-login">
			<h3>log in via</h3>
			<div className="social-icons">
<button onClick={handleGoogle} className="social-login__icon fab fa-google"> </button>

			</div>
		</div>
	</div>
	<div className="screen__background">
		<span className="screen__background__shape screen__background__shape4"></span>
		<span className="screen__background__shape screen__background__shape3"></span>
		<span className="screen__background__shape screen__background__shape2"></span>
		<span className="screen__background__shape screen__background__shape1"></span>
	</div>
</div>
			</div>
		</section>
	);
};

export default Login;