import { Searchbar } from "components/SearchBar/SearchBar"
import { useParams, Outlet  } from "react-router-dom"
import { useState, useEffect} from "react"
import { fetchMoviesByQuery } from "servises/moviesApi"
import { TrendingFilms } from "components/TrendingFilms/TrendingFilms"
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const MoviesPage = () => {
    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        if (!query) {
            return
        }
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const movies = await fetchMoviesByQuery(query);
                setMovies(movies);
                setStatus(Status.RESOLVED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);
            }
        }
        fetch();
    }, [query]);
    const { movieId } = useParams();
    const onInputChange = (value) => {
        setQuery(value);
    }

    return (
        <>
            {!movieId &&
                <>
                <Searchbar onSubmit={onInputChange} />
                {movies &&<TrendingFilms movies={movies} />}
                </>

                
                
            }
            <Outlet/>
            
        </>
        
    )
}