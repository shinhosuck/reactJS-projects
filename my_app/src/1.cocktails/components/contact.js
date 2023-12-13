import React from 'react'
import { DrinksContext } from '../layouts/cocktailLayout'
import { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'





function Contact() {
    // const data = useContext(DrinksContext)
    const data = useOutletContext()

    const drinks = data && data.drinks && data.drinks.map((drink)=>{
        return (
            <h4 key={drink.idDrink}>{drink.idDrink}</h4>
        )
    })
  return (
    <div>
        {drinks && drinks}
    </div>
  )
}

export default Contact