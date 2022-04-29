import { Outlet, Link } from "react-router-dom"

export const MovieDetailsPage = () => {
    return (
        <div>
            <h1>Bce про фільм</h1>
            <Link to={"cast"}>Actors</Link>
            <Link to={"reviews"}>reviews</Link>
            <Outlet/>
        </div>

    )
}