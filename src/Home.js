import React, { useState } from 'react'
import { Email } from 'https://smtpjs.com/v3/smtp.js';


const Home = () => {
  const [email, setEmail] = useState('');
  // const [otp,setOpt] = useState('')

  let otp_val = Math.floor(Math.random()*10000);

  let emailbody = `<h2>Your OTP is</h2>${otp_val}`;

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // SMTPJS email sending function
    Email.send({
      SecureToken : "e69dabb6-4633-4582-b724-c948690f3bb7",
      To : email,
      From : 'balajipicchika02@gmail.com',
      Subject : "This is the subject",
      Body : emailbody
    }).then((message) => {
      if (message === "OK") {
        alert(`OTP sent to your email ${email}`);
        // setIsOtpSent(true); // Show OTP input
      } else {
        alert("Failed to send OTP");
      }
    });
  };

  return (
    <div className='form' onSubmit={handleSubmit}>
      <h1>Email Verification</h1>
      <input type='email' id='email' value={email} onChange={handleEmailChange} placeholder='Enter your email...'></input>
      <div className='otpverify'>
        <input type='text' id='otp_inp' placeholder='Enter OTP sent to your mail...'></input>
        <button className='btn' id='otp_btn'>Verify</button>
      </div>
      <button className='btn' onClick={ ()=>{console.log(email)}}>Send OTP</button>
    </div>
  )
}

export default Home;