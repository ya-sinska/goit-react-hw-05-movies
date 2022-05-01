import { Searchbar } from "components/SearchBar/SearchBar"
import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
export const MoviesPage = () => {
    const {movieId} = useParams();
    
    return (
        <>
            {!movieId && <Searchbar />}
            <Outlet/>
            
        </>
        
    )
}