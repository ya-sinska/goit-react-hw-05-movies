import { Outlet, Link } from "react-router-dom"
import { FilmContainer, FilmDescription, Poster, Title,SubTitle  } from "./Movie.styled";
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const Movie = ({ movie }) => {
    const { title, poster_path, genres, overview, popularity } = movie;
    return (
        <div>
            <Link to={''}>go back</Link>
            <FilmContainer >
                <Poster  src={`${imgBaseUrl}${poster_path}`} alt={title} /> 
                    <FilmDescription>
                        <Title>{title}</Title>
                        <p>User score:{popularity}</p>
                        <SubTitle>Overview</SubTitle>
                        <p>{overview }</p>
                        <SubTitle>Genres</SubTitle>
                        {genres && genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
                    </FilmDescription>
            </FilmContainer >
            <div>
                <p>Adittional information</p>
                <Link to={"cast"}>Actors</Link>
                <Link to={"reviews"}>reviews</Link>
                <Outlet/>
            </div>
        </div>
    )
}