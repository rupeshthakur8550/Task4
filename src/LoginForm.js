import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SendMail from './SendMail';

function LoginForm() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    } else if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least 8 characters, including an uppercase letter and a number. Special characters other than @ are not allowed.'
      );
      return;
    } else if (password === 'SmartServTest@123') {
      // Redirect to the dashboard page using useNavigate
      navigate('/dashboard');
    } else {
      // Display an error message:
      alert('Invalid password');
    }
  };

  return (
    <div className='main d-flex justify-content-center align-items-center'>
      <div className='sub-main p-3 bg-black'>
        <img src={logo} alt='Logo' className='logo' />
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='email'
              placeholder='Username'
              className='form-control'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='mb-3'>
            <input
              type='password'
              placeholder='password'
              className='form-control'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='mb-3'>
            <button className='login btn-success w-100'>Login</button>
          </div>
          <SendMail />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
