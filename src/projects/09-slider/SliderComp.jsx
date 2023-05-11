import React from 'react'

export default function SliderComp({ setValue, handleInput, bgColor, textColor }) {

    const sliderStyle = {
        appearance: 'none',
        width: '50%',
        height: 25,
        backgroundColor: 'lightgrey',
        courser: 'pointer',
        opacity: 0.7,
        borderRadius: 5,
    }
    return (
        <div className='container'>
        <div className='row justify-content-center'>
            <input type='range'
                min='1'
                max={100}
                value={setValue}
                onInput={handleInput}
                style={sliderStyle}
            />
        </div>

        <div className='row justify-content-center'>
            <div style={{
                color: !textColor ? 'black' : textColor,
                backgroundColor: !bgColor ? 'lightgrey' : bgColor,
                height: `${setValue * 3}px`,
                width: `${setValue * 3}px`,
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                marginTop: '10px',
            }}>
                <span>{setValue}</span>
            </div>
        </div>
        </div>
    )
}
