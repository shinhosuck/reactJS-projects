import { Link } from 'react-router-dom'







export default function ProductList() {

    return (
        <div className="e-commerce-container">
            <h1>Product List</h1>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}


function Product() {

    return (
        <div className="product">
            <h2>hello world</h2>
        </div>
    )
}