import { Searchbar } from "components/SearchBar/SearchBar"
import { useParams, Outlet, useLocation  } from "react-router-dom"
import { TrendingFilms } from "components/TrendingFilms/FilmsList"
import { useFetchMoviesByQuery } from "hooks/useFetchMoviesByQuery"
import { Loader } from "components/Loader/Loader";
export const MoviesPage = () => {
    const { movies, status, onInputChange} = useFetchMoviesByQuery();
    const { movieId } = useParams();
    const location = useLocation();
    return (
        <>
            {!movieId &&
                <>
                <Searchbar onSubmit={onInputChange} />
                {status === 'pending' && <Loader />}
                {status === 'resolved' && <TrendingFilms movies={movies} location={location} to={ ''}/>}
                {status === 'rejected' && <h2>Sorry can't find this film</h2>}
                </>  
            }
            <Outlet/>
            
        </>
        
    )
}