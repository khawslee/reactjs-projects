import React, { useState } from 'react'
import './form.css'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navbar() {

  const [navStatus, setNavStatus] = useState(0);
  const [divWidth, setDivWidth] = useState('');

  function openNav() {
    if (navStatus === 0) {
      setNavStatus(1);
      setDivWidth('100%');
    } else {
      setNavStatus(0);
      setDivWidth('0%');
    }
  }

  return (
    <div>
      <div className='maindiv' style={{ width: divWidth }}>
        <button onClick={openNav}><RxHamburgerMenu /></button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  )
}
