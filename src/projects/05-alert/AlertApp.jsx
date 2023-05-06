import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className='container'>
      <Alert type={'success'} msg={'This is a success alert'}/>
      <Alert type={'info'} 
        msg={'Time trigger'} 
        delay={true} 
        delayTime={5000}/>
    </div>
  )
}
