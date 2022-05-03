import { useLocation } from "react-router-dom";
import { TrendingFilms } from "components/TrendingFilms/FilmsList"
import { useFetchMovies } from "hooks/useFetchMovies";
import { Loader } from "components/Loader/Loader";
import { NoFetchResults } from "components/NoFetchResults/NoFetchResults";
export const HomePage = () => {
    const { movies, status } = useFetchMovies();
    const location = useLocation();
   
    return (<>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <TrendingFilms location={location} movies={movies} title='Trendind today' to='movies/'/>}
        {status === 'rejected' && <NoFetchResults text={"Sorry can't find this page:("}/>}
        </>  
    );
}

