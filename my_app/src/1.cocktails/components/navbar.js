import React from 'react'
import { Link, NavLink } from 'react-router-dom'








export function Navbar() {
    const [showNavLinks, setShowNavLinks] = React.useState(false)


  return (
    <div className="cocktail-nav-container">
        <nav className='cocktail-nav-wrapper'>
            <div className="cocktail-brand">
                <Link onClick={()=>setShowNavLinks(false)} className='brand-name'>
                    <h2>BrandName</h2>
                </Link>
            </div>
            <div className="cocktail-toggle-nav-links-btns">
                {showNavLinks?
                    <button onClick={()=>setShowNavLinks(false)} className='close-cocktail-nav-links'>
                        <i className="fa fa-times"></i>
                    </button>
                :
                    <button onClick={()=>setShowNavLinks(true)} className='open-cocktail-nav-links'>
                        <i className="fa fa-bars"></i>
                    </button>
                }
            </div>
            <div className={showNavLinks?'show-cocktail-nav-links cocktail-nav-links':'cocktail-nav-links'}>
                <NavLink onClick={()=>setShowNavLinks(false)} to='.' className={({isActive})=>isActive?'active-cocktail-nav-link cocktail-nav-link':'cocktail-nav-link'}>Drinks</NavLink>
                <NavLink onClick={()=>setShowNavLinks(false)} to='contact' className={({isActive})=>isActive?'active-cocktail-nav-link cocktail-nav-link':'cocktail-nav-link'}>Contact</NavLink>
                <NavLink onClick={()=>setShowNavLinks(false)} to='about' className={({isActive})=>isActive?'active-cocktail-nav-link cocktail-nav-link':'cocktail-nav-link'}>About</NavLink>
            </div>
        </nav>
    </div>
  )
}
