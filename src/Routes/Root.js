import "../index.css"
import { Link, Outlet } from "react-router-dom"

export default function Root() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
           
            </nav>
            <Outlet />
        </>
    )
}
