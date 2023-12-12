import { Link } from 'react-router-dom'







export default function ProductList() {

    return (
        <div className="e-commerce-container">
            <h1>Product List</h1>
            <Link to='product/detail'>Product Detail</Link>
        </div>
    )
}