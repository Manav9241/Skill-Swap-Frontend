import React, { useState } from 'react';
import './login.css'

const Login = (props) => {

	const [loginForm, setLoginForm] = useState({
		'email': '',
		'password': ''
	});
	const [registerForm, setRegisterForm] = useState({
		'name': '',
		'email': '',
		'password': ''
	});

	const handleLoginFormChange = (event)=>{
		// console.log(typeof event.target.name);
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value });
	}

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log(loginForm);
	}

	const handleRegisterFormChange = (event)=>{
		// console.log(event.target);
        const { name, value } = event.target;
        setRegisterForm({ ...registerForm, [name]: value });
	}

	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		console.log(registerForm);
	}

	const handleSlideClick = (event) =>{
		const element = event.target.id;
		const container = document.getElementById('container');
		if (element === 'signUp') {
			container.classList.add('right-panel-active')
		} else if (element === 'signIn') {
			container.classList.remove('right-panel-active')
		}
	}

  return (
    <div>
<div className={`container ${props.type==='login'?'':"right-panel-active"}`} id="container" style={{marginTop: "3%"}}>
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" name="name" value={registerForm.name} onChange={handleRegisterFormChange} />
			<input type="email" placeholder="Email" name="email" value={registerForm.email} onChange={handleRegisterFormChange} />
			<input type="password" placeholder="Password" name="password" value={registerForm.password} onChange={handleRegisterFormChange} />
			<button type='submit' onClick={handleRegisterSubmit} >Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" name='email' value={loginForm.email} onChange={handleLoginFormChange} />
			<input type="password" placeholder="Password" name='password' value={loginForm.password} onChange={handleLoginFormChange} />
			<a href="#">Forgot your password?</a>
			<button type='submit' onClick={handleLoginSubmit} >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={handleSlideClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={handleSlideClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="/">  Manav, Ritik & Baijnath</a>
	</p>
</footer>
    </div>
  )
}

export default Login;
