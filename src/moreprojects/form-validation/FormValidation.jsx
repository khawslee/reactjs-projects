import React, { useState } from 'react'
import './form.css'

export default function FormValidation() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errusername, setErrUsername] = useState('');
  const [erremail, setErrEmail] = useState('');
  const [errpassword, setErrPassword] = useState('');
  const [errconfirmPassword, setErrConfirmPassword] = useState('');

  const [ucolor, setUcolor] = useState('');
  const [ecolor, setEcolor] = useState('');
  const [pcolor, setPcolor] = useState('');
  const [ccolor, setCcolor] = useState('');

  function validate() {
    if(username.length < 8) {
      setErrUsername('Username must be at least 8 characters long')
      setUcolor('red')
    } else {
      setErrUsername('')
      setUcolor('green')
    }

    if(email.includes('@')) {
      setErrEmail('')
      setEcolor('green')
    } else {
      setErrEmail('Email is invalid')
      setEcolor('red')
    }

    if(password.length > 8 && password.includes('.')) {
      setErrPassword('')
      setPcolor('green')
    } else {
      setErrPassword('Password must be at least 8 characters long and it should have .')
      setPcolor('red')
    }

    if(password !== "" && confirmPassword !== "" && password === confirmPassword) {
      setErrConfirmPassword('')
      setCcolor('green')
    } else {
      setErrConfirmPassword('Passwords do not match')
      setCcolor('red')
    }
  }

  return (
    <div>
      <div className="row justify-content-center">

        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

          <h1>Form Validation</h1>
          <input type="text" placeholder='username' className='form-control' style={{borderColor: ucolor}}
            value={username} onChange={(e) => setUsername(e.target.value)} />
          <p>{errusername}</p>

          <input type="text" placeholder='email' className='form-control' style={{borderColor: ecolor}}
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>{erremail}</p>
          
          <input type="text" placeholder='password' className='form-control' style={{borderColor: pcolor}}
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <p>{errpassword}</p>
          
          <input type="text" placeholder='confirm password' className='form-control' style={{borderColor: ccolor}}
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <p>{errconfirmPassword}</p>

          <button className='btn btn-success' onClick={validate}>SUBMIT</button>
        </div>

      </div>
    </div>
  )
}
