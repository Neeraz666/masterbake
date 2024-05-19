import React, { useState } from 'react';
import '../css/login.css';

export const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page">
            <div className="form_container">
                {isLoginForm ? (
                    <div className="form login_form">
                        <form action="#">
                            <h2>Login</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" required />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter your password" 
                                    required 
                                />
                                <i className="uil uil-lock password"></i>
                                <i 
                                    className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} pw_hide`} 
                                    onClick={togglePasswordVisibility}
                                ></i>
                            </div>
                            <div className="option_field">
                                <span className="checkbox">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">Remember me</label>
                                </span>
                                <a href="#" className="forgot_pw">Forgot password?</a>
                            </div>
                            <button className="button">Login Now</button>
                            <div className="login_signup">Don't have an account? <a href="#" id="signup" onClick={toggleForm}>Signup</a></div>
                        </form>
                    </div>
                ) : (
                    <div className="form signup_form">
                        <form action="#">
                            <h2>Signup</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" required />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Create password" 
                                    required 
                                />
                                <i className="uil uil-lock password"></i>
                                <i 
                                    className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} pw_hide`} 
                                    onClick={togglePasswordVisibility}
                                ></i>
                            </div>
                            <div className="input_box">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Confirm password" 
                                    required 
                                />
                                <i className="uil uil-lock password"></i>
                                <i 
                                    className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} pw_hide`} 
                                    onClick={togglePasswordVisibility}
                                ></i>
                            </div>
                            <button className="button">Signup Now</button>
                            <div className="login_signup">Already have an account? <a href="#" id="login" onClick={toggleForm}>Login</a></div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
