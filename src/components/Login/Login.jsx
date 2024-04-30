import React, { useState } from 'react';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar/Navbar';

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
		const container = document.getElementById('login-container');
		if (element === 'signUp') {
			container.classList.add('right-panel-active')
		} else if (element === 'signIn') {
			container.classList.remove('right-panel-active')
		}
	}

  return (
    <div>
		<Navbar />
<div className={`container_loginpage ${props.type==='login'?'':"right-panel-active"}`} id="login-container" style={{marginTop: "3%"}}>
	<div className="form-container sign-up-container">
		<form className='login_page_forms' action="#">
			<h1 className='login_h1'>Create Account</h1>
			<div className="social-container">
			<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faGooglePlusG} />
				</a>
				<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</div>
			<span className='login_span_element'>or use your email for registration</span>
			<input className='login_input_element' type="text" placeholder="Name" name="name" value={registerForm.name} onChange={handleRegisterFormChange} />
			<input className='login_input_element' type="email" placeholder="Email" name="email" value={registerForm.email} onChange={handleRegisterFormChange} />
			<input className='login_input_element' type="password" placeholder="Password" name="password" value={registerForm.password} onChange={handleRegisterFormChange} />
			<button className=' login_page_button' type='submit' onClick={handleRegisterSubmit} >Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className='login_page_forms' action="#">
			<h1 className='login_h1'>Sign in</h1>
			<div className="social-container">
			<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faGooglePlusG} />
				</a>
				<a href="#" className="social login_anchor">
				<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</div>
			<span className='login_span_element'>or use your account</span>
			<input className='login_input_element' type="email" placeholder="Email" name='email' value={loginForm.email} onChange={handleLoginFormChange} />
			<input className='login_input_element' type="password" placeholder="Password" name='password' value={loginForm.password} onChange={handleLoginFormChange} />
			<a className=' login_anchor' href="#">Forgot your password?</a>
			<button className=' login_page_button' type='submit' onClick={handleLoginSubmit} >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className='login_h1'>Welcome Back!</h1>
				<p className='login_paragraph'>To keep connected with us please login with your personal info</p>
				<button className="ghost login_page_button" id="signIn" onClick={handleSlideClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className='login_h1'>Hello, Friend!</h1>
				<p className='login_paragraph'>Enter your personal details and start journey with us</p>
				<button className="ghost login_page_button" id="signUp" onClick={handleSlideClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer className='login_footer_element'>
	<p className='login_paragraph footer_p_element'>
		Created with <i className="fa fa-heart footer_i_element"></i> by
		<a className='login_anchor footer_a_element' target="_blank" href="/">  Manav, Ritik & Baijnath</a>
	</p>
</footer>
    </div>
  )
}

export default Login;