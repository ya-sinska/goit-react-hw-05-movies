import { Searchbar } from "components/SearchBar/SearchBar"
import { useParams, Outlet, useLocation} from "react-router-dom"
import { TrendingFilms } from "components/TrendingFilms/FilmsList"
import { useFetchMoviesByQuery } from "hooks/useFetchMoviesByQuery"
import { Loader } from "components/Loader/Loader";
import { NoFetchResults } from "components/NoFetchResults/NoFetchResults";
export default function MoviesPage () {
    const { movies, status, onInputChange} = useFetchMoviesByQuery();
    const { movieId } = useParams();
    const location = useLocation();
    return (
        <>
            {!movieId &&
                <>
                <Searchbar onSubmit={onInputChange} />
                {status === 'pending' && <Loader />}
                {status === 'resolved' && <TrendingFilms movies={movies} location={location} to={''}/>}
                {status === 'rejected' && <NoFetchResults text={"Sorry can't find this page:("}/>}
                </>  
            }
            <Outlet/>
            
        </>
        
    )
}