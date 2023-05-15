import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Body() {

  const [meals, setMeals] = useState([])

  const mealsData = meals.map((data) => {
    return (
      <div className='col-md-4'>
        <span>{data.strMeal}</span>
        <br/>
        <img src={data.strMealThumb} className='img-fluid' />
      </div>
    )
  })

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res => {
      setMeals(res.data.meals)
    }).catch(err => {
      console.log(err)
    })

  }, [meals])

  return (
    <div>
      <div className="row">

        {mealsData}

      </div>
    </div>
  )
}
