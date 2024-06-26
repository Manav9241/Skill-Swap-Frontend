// import React, { useState } from 'react';
// import './login.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import Navbar from '../Navbar/Navbar';

// const Login = (props) => {

// 	const [loginForm, setLoginForm] = useState({
// 		'email': '',
// 		'password': ''
// 	});
// 	const [registerForm, setRegisterForm] = useState({
// 		'name': '',
// 		'email': '',
// 		'password': ''
// 	});

// 	const handleLoginFormChange = (event)=>{
// 		// console.log(typeof event.target.name);
//         const { name, value } = event.target;
//         setLoginForm({ ...loginForm, [name]: value });
// 	}

// 	const handleLoginSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(loginForm);
// 	}

// 	const handleRegisterFormChange = (event)=>{
// 		// console.log(event.target);
//         const { name, value } = event.target;
//         setRegisterForm({ ...registerForm, [name]: value });
// 	}

// 	const handleRegisterSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(registerForm);
// 	}

// 	const handleSlideClick = (event) =>{
// 		const element = event.target.id;
// 		const container = document.getElementById('login-container');
// 		if (element === 'signUp') {
// 			container.classList.add('right-panel-active')
// 		} else if (element === 'signIn') {
// 			container.classList.remove('right-panel-active')
// 		}
// 	}

//   return (
//     <div>
// 		<Navbar />
// <div className={`container_loginpage ${props.type==='login'?'':"right-panel-active"}`} id="login-container" style={{marginTop: "3%"}}>
// 	<div className="form-container sign-up-container">
// 		<form className='login_page_forms' action="#">
// 			<h1 className='login_h1'>Create Account</h1>
// 			<div className="social-container">
// 			<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faFacebookF} />
// 				</a>
// 				<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faGooglePlusG} />
// 				</a>
// 				<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faLinkedinIn} />
// 				</a>
// 			</div>
// 			<span className='login_span_element'>or use your email for registration</span>
// 			<input className='login_input_element' type="text" placeholder="Name" name="name" value={registerForm.name} onChange={handleRegisterFormChange} />
// 			<input className='login_input_element' type="email" placeholder="Email" name="email" value={registerForm.email} onChange={handleRegisterFormChange} />
// 			<input className='login_input_element' type="password" placeholder="Password" name="password" value={registerForm.password} onChange={handleRegisterFormChange} />
// 			<button className=' login_page_button' type='submit' onClick={handleRegisterSubmit} >Sign Up</button>
// 		</form>
// 	</div>
// 	<div className="form-container sign-in-container">
// 		<form className='login_page_forms' action="#">
// 			<h1 className='login_h1'>Sign in</h1>
// 			<div className="social-container">
// 			<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faFacebookF} />
// 				</a>
// 				<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faGooglePlusG} />
// 				</a>
// 				<a href="#" className="social login_anchor">
// 				<FontAwesomeIcon icon={faLinkedinIn} />
// 				</a>
// 			</div>
// 			<span className='login_span_element'>or use your account</span>
// 			<input className='login_input_element' type="email" placeholder="Email" name='email' value={loginForm.email} onChange={handleLoginFormChange} />
// 			<input className='login_input_element' type="password" placeholder="Password" name='password' value={loginForm.password} onChange={handleLoginFormChange} />
// 			<a className=' login_anchor' href="#">Forgot your password?</a>
// 			<button className=' login_page_button' type='submit' onClick={handleLoginSubmit} >Sign In</button>
// 		</form>
// 	</div>
// 	<div className="overlay-container">
// 		<div className="overlay">
// 			<div className="overlay-panel overlay-left">
// 				<h1 className='login_h1'>Welcome Back!</h1>
// 				<p className='login_paragraph'>To keep connected with us please login with your personal info</p>
// 				<button className="ghost login_page_button" id="signIn" onClick={handleSlideClick}>Sign In</button>
// 			</div>
// 			<div className="overlay-panel overlay-right">
// 				<h1 className='login_h1'>Hello, Friend!</h1>
// 				<p className='login_paragraph'>Enter your personal details and start journey with us</p>
// 				<button className="ghost login_page_button" id="signUp" onClick={handleSlideClick}>Sign Up</button>
// 			</div>
// 		</div>
// 	</div>
// </div>

// <footer className='login_footer_element'>
// 	<p className='login_paragraph footer_p_element'>
// 		Created with <i className="fa fa-heart footer_i_element"></i> by
// 		<a className='login_anchor footer_a_element' target="_blank" href="/">  Manav, Ritik & Baijnath</a>
// 	</p>
// </footer>
//     </div>
//   )
// }

// export default Login;

import React from "react";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { googleAuth } from "../../apis/auth";
import { useState } from "react";
import { loginUser } from "../../apis/auth";
import { Link, useNavigate } from "react-router-dom";
import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs";
import { toast } from "react-toastify";
import { validUser } from "../../apis/auth";
import { postAPIcalls } from "../../utils/apiCalls";
const defaultData = {
  email: "",
  password: "",
};
function Login() {
  const [formData, setFormData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const pageRoute = useNavigate();
  const googleSuccess = async (res) => {
    if (res?.profileObj) {
      console.log(res.profileObj);
      setIsLoading(true);
      const response = await googleAuth({ tokenId: res.tokenId });
      setIsLoading(false);

      console.log("response :" + res);
      if (response.data.token) {
        localStorage.setItem("userToken", response.data.token);
        pageRoute("/chats");
      }
    }
  };
  const googleFailure = (error) => {
    // toast.error("Something went Wrong.Try Again!")
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (formData.email.includes("@") && formData.password.length >= 6) {
      setIsLoading(true);
      //api calls
      try {
        const mid = "auth/user/login";
        const id = "";
        const response = await postAPIcalls(mid, id, formData);
        if (response.status === 200) {
          console.log(response.data);
          localStorage.setItem("User", JSON.stringify(response.data));
          toast.success("Succesfully Login!");
          setIsLoading(false);
          pageRoute("/");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Invalid Credentials!");
        setFormData({ ...formData, password: "" });
      }
    } else {
      setIsLoading(false);
      toast.warning("Provide valid Credentials!");
      setFormData(defaultData);
    }
  };
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: import.meta.env.VITE_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
    const isValid = async () => {
      const data = await validUser();
      if (data?.user) {
        window.location.href = "/chats";
      }
    };
    isValid();
  }, []);
  return (
    <>
      <div className="bg-[#121418] w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[90%] sm:w-[400px] pl-0 ml-0 h-[400px] sm:pl-0 sm:ml-9 mt-20 relative">
          {/* <img className='w-[100px] absolute -top-16 left-28' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/78c4af118001599.608076cf95739.jpg" alt="" /> */}
          <div className="absolute -top-5 left-0">
            <h3 className=" text-[25px] font-bold tracking-wider text-[#fff]">
              Login
            </h3>
            <p className="text-[#fff] text-[12px] tracking-wider font-medium">
              No Account ?{" "}
              <Link
                className="text-[rgba(0,195,154,1)] underline"
                to="/register"
              >
                Sign up
              </Link>
            </p>
          </div>
          {/* <h2 className='text-2xl text-[#fff] font-bold tracking-wide my-6 text-center'>Login to your Account</h2> */}
          <form
            className="flex flex-col gap-y-3 mt-[12%]"
            onSubmit={formSubmit}
          >
            <div>
              <input
                className="w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]"
                onChange={handleOnChange}
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]"
                onChange={handleOnChange}
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                required
              />
              {!showPass ? (
                <button type="button">
                  <BsEmojiLaughing
                    onClick={() => setShowPass(!showPass)}
                    className="text-[#fff] absolute top-3 right-5 sm:right-24 w-[30px] h-[25px]"
                  />
                </button>
              ) : (
                <button type="button">
                  {" "}
                  <BsEmojiExpressionless
                    onClick={() => setShowPass(!showPass)}
                    className="text-[#fff] absolute top-3 right-5 sm:right-24 w-[30px] h-[25px]"
                  />
                </button>
              )}
            </div>

            <button
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,195,154,1) 0%, rgba(224,205,115,1) 100%)",
              }}
              className="w-[100%]  sm:w-[80%] h-[50px] font-bold text-[#121418] tracking-wide text-[17px] relative"
              type="submit"
            >
              <div
                style={{ display: isLoading ? "" : "none" }}
                className="absolute -top-[53px] left-[27%] sm:-top-[53px] sm:left-[56px]"
              >
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_h9kds1my.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "200px", height: "160px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p
                style={{ display: isLoading ? "none" : "block" }}
                className="test-[#fff]"
              >
                Login
              </p>
            </button>
            {/* <div className='border-t-[1px] w-[100%] sm:w-[80%] my-3' ></div> */}
            <p className="text-[#fff] text-center sm:-ml-20">/</p>
            {/* <GoogleLogin
              clientId={import.meta.env.VITE_APP_SERVER_URL}
              render={ */}
            {/* (renderProps) => (
                <button style={{ borderImage: "linear-gradient(to right, rgba(0,195,154,1) 50%, rgba(224,205,115,1) 80%)", borderImageSlice: "1" }} onClick={renderProps.onClick} disabled={renderProps.disabled} aria-label="Continue with google" className="focus:ring-2 focus:ring-offset-1  py-3.5 px-4 border rounded-lg  flex items-center w-[100%]  sm:w-[80%]" > */}
            {/* disableElevation={true} disablefocusRipple={true} */}
            {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                  <p className="text-[base] font-medium ml-4 text-[#fff]">Continue with Google</p>
                </button> */}
            {/* )
							} */}
            {/* onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
              scope="profile email https://www.googleapis.com/auth/user.birthday.read"
            /> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
