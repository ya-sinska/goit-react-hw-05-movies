
import { Container,List, Title, Poster, Item, Links, MoviesTitle } from "./TrendingFilms.styled";
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const TrendingFilms = ({ movies, title, location }) => {

    return (
        <Container >
            <Title>{title}</Title>
            <List>
                {movies.map(movie => <Item key={movie.id}>
                    <Links to={`movies/${movie.id}`} state={{from:location} }>
                        <Poster>
                        <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} /> 
                        </Poster>
                        <MoviesTitle>{movie.title}</MoviesTitle>
                    </Links>
                </Item> )}
            </List>
            
        </Container >
    )
}