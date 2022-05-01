import { useLocation } from "react-router-dom";
import { TrendingFilms } from "components/TrendingFilms/TrendingFilms"
import { useFetchMovies } from "hooks/useFetchMovies";
import { Loader } from "components/Loader/Loader";
export const HomePage = () => {
    const { movies } = useFetchMovies();
    const { status } = useFetchMovies();
    const location = useLocation();
   
    return (<>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <TrendingFilms location={location} movies={movies} title='Trendind today' />}
        {status === 'rejected' && <h2>Sorry can't find this page</h2>}
        </>  
    );
}

