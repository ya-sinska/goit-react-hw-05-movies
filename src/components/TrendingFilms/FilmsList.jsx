import PropTypes from 'prop-types';
import { Container, List, Title, Poster, Item, Links, MoviesTitle } from "./FilmsList.styled";
import image from "../../Images/noPoster.jpg"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const TrendingFilms = ({ movies, title, location, to }) => {
    return (
        <Container >
            {title&&<Title>{title}</Title>}
            <List>
                {movies.map(movie => <Item key={movie.id}>
                    <Links to={`${to}${movie.id}`} state={{from:location} }>
                        <Poster>
                            {movie.poster_path ? (<img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />) :
                            <img src={`${image}`} alt='no poster'/>} 
                        </Poster>
                        <MoviesTitle>{movie.title}</MoviesTitle>
                    </Links>
                </Item> )}
            </List>       
        </Container >
    )
}

TrendingFilms.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string,
    location:PropTypes.string.isRequired,
    to:PropTypes.string,
}