import React, { useState } from 'react';
import axios from 'axios';
import '../css/resetpass.css';

export const Resetpass = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState('request'); // 'request' or 'reset'

    const handleRequestSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/password-reset/', { email })
            .then(response => {
                alert(response.data.message);
                setStep('reset');
            })
            .catch(error => {
                const errormsg = error.response?.data?.error
                alert(errormsg)
                console.error('There was an error!', error);
            });
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/password-reset-confirm/', { email, otp, new_password: newPassword })
            .then(response => {
                alert(response.data.message);
                setStep('request'); // Reset to initial state after successful password reset
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='resetdiv'>
            <div className='resetform_container'>
                {step === 'request' ? (
                    <form onSubmit={handleRequestSubmit}>
                        <h2>Password Reset</h2>
                        <div className="reset_input_box">
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="email"></i>
                        </div>
                        <button type="submit" className="button">Send OTP</button>
                    </form>
                ) : (
                    <form onSubmit={handleResetSubmit}>
                        <h2>Reset Password</h2>
                        <div className="reset_input_box">
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="email"></i>
                        </div>
                        <div className="reset_input_box">
                            <input
                                type="text"
                                value={otp}
                                placeholder="OTP"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <i className="otp"></i>
                        </div>
                        <div className="reset_input_box">
                            <input
                                type="password"
                                value={newPassword}
                                placeholder="New Password"
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <i className="password"></i>
                        </div>
                        <button type="submit" className="button">Reset Password</button>
                    </form>
                )}
            </div>
        </div>
    );
};
