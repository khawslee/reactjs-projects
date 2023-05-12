import React from 'react';
import Button from './Button';

export default function Popup({ type, title, text }) {
  const popupContainer = {
    position: 'absolute',
    top: '0',
    height: '100vh',
    width: '100vw',
    background: 'rgba(0,0,0,0.1)',
    zIndex: '-1',
  };

  const popupStyle = {
    position: 'relative',
    margin: '40vh auto',
    zIndex: '1',
  };

  return (
    <div style={popupContainer}>
      <div
        className={`${type}`}
        style={popupStyle}
      >
        <div className='alert-close'>
          <div className='d-flex flex-column'>
            <h4 className='mb-1'>
              {title ? title : 'popup title'}
            </h4>
            <p>{text && text}</p>
          </div>
          <Button btnClass={'btn-close'} text={'X'} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}