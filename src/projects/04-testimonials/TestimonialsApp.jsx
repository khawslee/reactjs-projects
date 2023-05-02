import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

export default function TestimonialsApp() {

  const [testimonial, setTestimonial] = useState('posts');
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonial}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [testimonial]); 

  return (
    <div className='container m-auto'>
      <Title text='Testimonials App' />
      <Button text={'Posts'}
        btnClass='btn-primary'
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonial('Posts')} />
      <Button text={'Users'}
        btnClass='btn-primary'
        icon={<FaUserAlt />}
        onClick={() => setTestimonial('Users')} />
      <Button text={'Comments'}
        btnClass='btn-primary'
        icon={<BiCommentDetail />}
        onClick={() => setTestimonial('Comments')} />

      <Title
        classes={'text-primary'}
        text={!testimonial ? 'Select from above!' : testimonial}
      />

      {!items 
        ? null 
        : items.map((item) => {
          return ( 
          <div className='card card-primary mb-2' key={item.id}>
            {item.name && <h2 className='card-header'>{item.name}</h2>}
            <div className='card-body'>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
            {item.email && <h2 className='card-footer'>{item.email}</h2>}
          </div>
          );
      })}

    </div>
  )
}
