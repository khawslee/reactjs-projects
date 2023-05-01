import React, { useState } from 'react'
import Title from '../components/Title'
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'

import Scence from './img/scence.jpg'

export default function LikePhotoApp() {
  //let like = false;
  const [like, likeState] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    likeState(!like);
    if(!like) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className='container text-center'>
      <Title text={'Like Photo App'} />
      <Title classes={'subtitle'} text={`Likes ${count}`} />
      <div className='card card-dark m-auto' 
        style={{ width: 300, cursor: 'pointer'}}
        onDoubleClick={toggleLike}
      >
        <div className='card-header fs-xl'>
            <AiFillSmile className='me-2'/>
            <small>DogyDog</small>
        </div>
        <img src={Scence} alt="img" style={{ height: 'fit-content'}}/>
        
        <div className='card-footer fs-xl d-flex' style={{justifyContent: 'space-between'}}>
            <AiOutlineComment />
            {like 
            ? <AiFillHeart className='text-danger' onClick={toggleLike}/> 
            : <AiOutlineHeart onClick={toggleLike}/>}
        </div>
      </div>
    </div>
  )
}
