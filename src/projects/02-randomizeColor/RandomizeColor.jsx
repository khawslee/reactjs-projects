import React from 'react'
import Title from '../components/Title'

export default function RandomizeColor() {
  const handleClick = (e) => {
    document.body.style.backgroundColor = getRandomcolor();
    e.target.style.backgroundColor = getRandomcolor();
  }

  function getRandomcolor() {
    let color = '#';
    color += Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  return (
    <div className='container'>
       <Title classes={'mb-4'} text={'Randomize color'}/>
       <button className='btn btn-primary' onClick={handleClick}>Click me</button>
       <button className='btn btn-danger' onClick={handleClick}>Click me</button>
       <button className='btn btn-success' onClick={handleClick}>Click me</button>
       <button className='btn btn-warning' onClick={handleClick}>Click me</button>
    </div>
  )
}
