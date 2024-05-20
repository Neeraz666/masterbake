import React, { useState } from 'react';
import '../css/login.css';
import axios from "axios";

export const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [showPassword, setShowPassword] = useState(false);


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [profilephoto, setProfilephoto] = useState(null);
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilephoto(file);
    }

    const submitlogin = async e => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        const {data} = await axios.post('http://localhost:8000/api/token/', user, {
            headers: {
                'Content-Type': 'application/json'
            },
                withCredentials: true
        });

        localStorage.clear();

        localStorage.setItem('access_token', data.access);

        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

        window.location.href = '/'
    }

    const submitsignup = async e => {
        e.preventDefault();

        if (password !== password1) {
            alert('Passwords do not match!');
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('profilephoto', profilephoto);
        formData.append('password', password);
        formData.append('password1', password1);

        try{
            const {data} = await axios.post('http://localhost:8000/api/users/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href = '/login'
        }

        catch (error) {
            if(error.response && error.response.data){
                alert (error.response.data.error || error.response.data);
            }
            else {
                console.error('Error signing up: ', error);
                alert('An error occured while signing up. Please try again.');
            }
        }
    }


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
                        <form action="/" onSubmit={submitlogin}>
                            <h2>Login</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" value={email}  required onChange={(e) => setEmail(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter your password" 
                                    value={password} required onChange={(e) => setPassword(e.target.value)}  
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
                        <form action="#" onSubmit={submitsignup}>
                            <h2>Signup</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Enter your username" value={username} required onChange={(e) => setUsername(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Enter your First Name" value={firstname} required onChange={(e) => setFirstname(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Enter your Last Name" value={lastname} required onChange={(e) => setLastname(e.target.value)} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="file" accept='image/*' required onChange={handleFileChange} />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Create password" value={password} required onChange={(e) => setPassword(e.target.value)} 
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
                                    placeholder="Confirm password" value={password1} 
                                    required onChange={(e) => setPassword1(e.target.value)}
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
