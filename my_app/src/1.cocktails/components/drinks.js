import { useOutletContext } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { DrinksContext } from "../layouts/cocktailLayout"






export default function Drinks() {
    const [drinks, setDrinks] = useState([])
    // const data = useContext(DrinksContext)
    const data = useOutletContext()
    
    const objs = data && data.drinks && data.drinks.map((drink)=>{
        return (
            <h4 key={drink.idDrink}>{drink.idDrink}</h4>
        )
    })

    return (
    <div>
        {objs && objs.length !== 0 && objs}
    </div>
    )
}