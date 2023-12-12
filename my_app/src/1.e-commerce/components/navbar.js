import { Link, NavLink } from 'react-router-dom'







export function Navbar() {


    return (
        <div className="e-commerce-navbar-container">
            <nav className='e-commerce-navbar-wrapper'>
                <Link to='/' className='e-commerce-brand'>
                    <h2>e-commerce</h2>
                </Link>
                <div>
                    <NavLink to='/cart' className='cart'>
                        <i className='fa fa-shopping-cart'></i>
                    </NavLink>
                    <div className='e-commerce-toggle-btns'>
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-times"></i>
                    </div>
                </div>
                <div className="e-commerce-nav-links">
                    <NavLink to='/' className={({isActive})=>isActive?'active-e-commerce-nav-link e-commerce-nav-link':'e-commerce-nav-link'}>Products</NavLink>
                </div>
            </nav>
        </div>
    )
}