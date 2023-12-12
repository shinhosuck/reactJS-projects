import { Link, useLocation  } from 'react-router-dom'







export default function PageNotFound() {

    return (
        <div className="page-not-found">
            <h2>Page Not Found</h2>
            <Link to='..' relative='path'>Back to Products</Link>
        </div>
    )
}