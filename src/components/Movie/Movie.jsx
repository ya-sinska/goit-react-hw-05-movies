import { Outlet, Link} from "react-router-dom"
import { FilmContainer,GoBack , FilmDescription, Poster, Title,SubTitle, Text,GenresList, AdittionalInfo ,Detail } from "./Movie.styled";

const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const Movie = ({ movie }) => {
    const { title, poster_path, genres, overview, vote_average} = movie;
    
    
    return (
        <div>
            <Link to={``}><GoBack  /></Link>
            <FilmContainer >
                <Poster  src={`${imgBaseUrl}${poster_path}`} alt={title} /> 
                    <FilmDescription>
                        <Title>{title}</Title>
                        <Text>User score: <b>{vote_average}</b></Text>
                        <SubTitle>Overview</SubTitle>
                        <Text>{overview }</Text>
                        <SubTitle>Genres</SubTitle>
                        {genres && genres.map(genre => <GenresList key={genre.id}>{genre.name}</GenresList>)}
                    </FilmDescription>
            </FilmContainer >
            <AdittionalInfo>
                <Title>Adittional information</Title>
                <Detail to={"cast"}>Actors</Detail>
                <Detail to={"reviews"}>Reviews</Detail>
                <Outlet/>
            </AdittionalInfo>
        </div>
    )
}