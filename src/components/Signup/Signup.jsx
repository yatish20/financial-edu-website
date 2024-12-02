import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [formType, setFormType] = useState('login'); // 'login', 'register', 'forgotPassword', 'resetPassword'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpValid, setIsOtpValid] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here (e.g., API call)
        console.log('Logging in with:', { email, password });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add registration logic here (e.g., API call)
        console.log('Registering with:', { email, password });
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Logic to send OTP to email
        console.log('Sending OTP to:', email);
        setIsOtpSent(true); // OTP has been sent
    };

    const handleValidateOtp = (e) => {
        e.preventDefault();
        // Logic to validate OTP
        if (otp === '123456') { // Example: hardcoded OTP for testing
            console.log('OTP validated');
            setIsOtpValid(true); // OTP is valid
        } else {
            setError('Invalid OTP');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Logic to reset password
        if (newPassword === confirmPassword) {
            console.log('Password reset successfully:', newPassword);
            // Reset the form state and go back to login
            setFormType('login');
            setEmail('');
            setOtp('');
            setIsOtpSent(false); `
            setIsOtpValid(false);`
            setNewPassword('');
            setConfirmPassword('');
            setError('');
        } else {
            setError('Passwords do not match!');
        }
    };

    return (
        <>

            <div className="login-container">
                <div className="login-form">
                    {formType === 'login' && (
                        <>
                            <h2>Welcome Back!</h2>
                            <p>We're so excited to see you again!</p>
                            <form onSubmit={handleLogin}>
                                <div className="input-group">
                                    <label htmlFor="email">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Login</button>
                            </form>
                            <a href="#" className="forgot-password" onClick={() => setFormType('forgotPassword')}>Forgot your password?</a>
                            <div className="divider"></div>
                            <button onClick={() => setFormType('register')} className="register-button">Need an account? Register</button>
                        </>
                    )}

                    {formType === 'register' && (
                        <>
                            <h2>Create an account</h2>
                            <form onSubmit={handleRegister}>
                                <div className="input-group">
                                    <label htmlFor="email">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Register</button>
                            </form>
                            <div className="divider"></div>
                            <button onClick={() => setFormType('login')} className="register-button">Already have an account? Login</button>
                        </>
                    )}

                    {formType === 'forgotPassword' && (
                        <>
                            <h2>Reset your password</h2>
                            {!isOtpSent && (
                                <form onSubmit={handleForgotPassword}>
                                    <div className="input-group">
                                        <label htmlFor="email">EMAIL</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="login-button" onClick={() => alert('Please Check your entered email!')}>Send OTP</button>

                                </form>
                            )}
                            {isOtpSent && !isOtpValid && (
                                <form onSubmit={handleValidateOtp}>
                                    <div className="input-group">
                                        <label htmlFor="otp">Enter OTP</label>
                                        <input
                                            type="text"
                                            id="otp"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="login-button">Validate OTP</button>
                                </form>
                            )}
                            {isOtpValid && (
                                <>
                                    <form onSubmit={handleResetPassword}>
                                        <div className="input-group">
                                            <label htmlFor="newPassword">NEW PASSWORD</label>
                                            <input
                                                type="password"
                                                id="newPassword"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {error && <p className="error">{error}</p>}
                                        <button type="submit" className="login-button">Reset Password</button>
                                    </form>
                                </>
                            )}
                            <div className="divider"></div>
                            <button onClick={() => setFormType('login')} className="register-button">Back to Login</button>
                        </>
                    )}
                </div>
            </div>
            <div>

            </div>
        </>
    );

};


export default Signup