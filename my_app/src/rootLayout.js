import { Outlet } from 'react-router-dom'
import React from 'react'






export default function RootLayout() {

    return (
        <React.Fragment>
            <header>
                
            </header>
            <main> 
                <Outlet />
            </main>
            <footer>
            </footer>
        </React.Fragment>
    )
}