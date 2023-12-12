import { Outlet } from "react-router-dom";
import React from 'react'
import { Navbar } from "./navbar";





export default function ECommerceLayout() {

    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}