import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { fetchDrinks } from '../data/api'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export const DrinksContext = React.createContext()

export default function CocktailLayout() {
    const [drinks, setDrinks] = useState(null)

    const getDrinks = async() => {
        try {
            const data = await fetchDrinks(url)
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    const person = {name:'jack'}
    useEffect(()=>{
        getDrinks()
    }, [])
    return (
        <React.Fragment>
            <Navbar />
            <Outlet context={{drinks}}/>
        </React.Fragment>
        // <DrinksContext.Provider value={{drinks}}>
        //     <Navbar />
        //     <Outlet/>
        // </DrinksContext.Provider>
    )
}





