// SendMail.js

import React from 'react';

const SendMail = () => {
  const handleForgotPasswordClick = () => {
    const emailSubject = 'Password Reset Request';
    const emailBody = 'Dear support team, I need assistance with resetting my password.';

    const mailtoLink = `mailto:prasadbhoite78@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <p>
        <center className='forgetpassword' onClick={handleForgotPasswordClick}>
          Forgot your password?
        </center>
      </p>
    </div>
  );
};

export default SendMail;
