
import { Container, List } from "./TrendingFilms.styled";
export const TrendingFilms = ({ movies, title }) => {
    return (
        <Container >
            <h2>{title}</h2>
            <ul>
                {movies.map(movie => <li key={movie.id}>
                    <img src={movie} alt="" />
                    <List to={`movies/${movie.id}`}>{movie.title}</List>
                </li> )}
            </ul>
            
        </Container >
    )
}