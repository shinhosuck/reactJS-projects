import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import img from '../../logo192.png'





export function Navbar() {
    const [showNavLinks, setShownavLinks] = useState(false)

    return (
        <div className="e-commerce-navbar-container">
            <nav className='e-commerce-navbar-wrapper'>
                <Link to='.' className='e-commerce-brand'>
                    <img src={img} alt="" />
                    <h2>e-store</h2>
                </Link>
                <div className='cart-toggle-bns'>
                    <NavLink to='/cart' className='cart'>
                        <i className='fa fa-shopping-cart'></i>
                        <h4>My Cart</h4>
                    </NavLink>
                    <div className='e-commerce-toggle-btns'>
                        {!showNavLinks?
                             <button onClick={()=>setShownavLinks(true)} className='open-navbar-btn'>
                                <i className="fa fa-bars"></i>
                            </button>
                        :
                            <button onClick={()=>setShownavLinks(false)} className='close-navbar-btn'>
                                <i className="fa fa-times"></i>
                            </button>
                        }
                    </div>
                </div>
                <div className={showNavLinks?'e-commerce-nav-links show-nav-links':'e-commerce-nav-links'}>
                     <NavLink onClick={()=>setShownavLinks(false)} to='.' className={({isActive})=>isActive?'active-e-commerce-nav-link e-commerce-nav-link':'e-commerce-nav-link'}>Products</NavLink>
                     <NavLink onClick={()=>setShownavLinks(false)} to='contact' className={({isActive})=>isActive?'active-e-commerce-nav-link e-commerce-nav-link':'e-commerce-nav-link'}>Contact</NavLink>
                     <NavLink onClick={()=>setShownavLinks(false)} to='about' className={({isActive})=>isActive?'active-e-commerce-nav-link e-commerce-nav-link':'e-commerce-nav-link'}>About</NavLink>
                     <NavLink onClick={()=>setShownavLinks(false)} to='logout' className={({isActive})=>isActive?'active-e-commerce-nav-link e-commerce-nav-link':'e-commerce-nav-link'}>Logout</NavLink>
                </div>
            </nav>
        </div>
    )
}