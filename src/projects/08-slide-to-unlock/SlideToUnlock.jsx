import React, { useEffect, useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import LockScreenImage from './img/moon.jpg'
import HomeScreenImage from './img/desktop.jpg'

export default function SlidetoUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: 'Unlock Screen',
    uiColor: '#eee',
    uiBg: `url(${LockScreenImage}) center/cover, no-repeat`
  })
  const [showLockSlider, setShowLockSlider] = useState(true);

  const [lockSliderValue, setLockSliderValue] = useState(50);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    if(lockSliderValue <= 10 || lockSliderValue >= 90) {
      setShowLockSlider(false);
      setUiProps({
        uiText: 'Unlock Screen',
        uiColor: '#eee',
        uiBg: `url(${HomeScreenImage}) center/cover, no-repeat`
      })
    } else {
      setShowLockSlider(true);
      setUiProps({
        uiText: 'Lock Screen',
        uiColor: '#fff',
        uiBg: `url(${LockScreenImage}) center/cover, no-repeat`
      })
    }
  }

  return (
    <div className='container text-center d-flex flex-column border-20 shadow-md'
      style={{
        height: '70vh',
        marginTop: '15vh',
        width: 340,
        border: '4px solid #000',
        background: uiProps.uiBg
      }}>
      <h1 className='title' style={{ color: uiProps.uiColor }}> {uiProps.uiText}</h1>
      {showLockSlider ?
        (<LockSlider width={'250px'} handleInput={handleLockSliderInput} value={lockSliderValue}/>) :
        (<AiFillUnlock className='unlockIcon' onClick={setShowLockSlider(true)}/>)
      }
    </div>
  )
}
