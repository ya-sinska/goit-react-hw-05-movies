import { useState, useEffect } from "react";
import { FilmContainer,GoBack,Btn, FilmDescription, Poster, Title,SubTitle, Text,GenresList} from "./Movie.styled";
import { useNavigate } from "react-router-dom";
import image from "../../Images/noPoster.jpg"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const Movie = ({ movie, location }) => {
    const { title, poster_path, genres, overview, vote_average} = movie;
    const [movieLocation, setMovieLocation] = useState({});
    const navigate = useNavigate();
    
    const onBackHandle = () => {
    navigate(movieLocation)
    }

    useEffect(() => {
    if(location.state) setMovieLocation(location.state.from)
    }, [location.state])

    return (
        <div>
            <Btn type='button'onClick={onBackHandle} ><GoBack  /></Btn>
            <FilmContainer >
               {poster_path? (<Poster  src={`${imgBaseUrl}${poster_path}`} alt={title} />):(<Poster src={`${image}`} alt='no poster'/>) }
                    <FilmDescription>
                        <Title>{title}</Title>
                        <Text>User score: <b>{vote_average}</b></Text>
                        <SubTitle>Overview</SubTitle>
                        <Text>{overview }</Text>
                        <SubTitle>Genres</SubTitle>
                        {genres && genres.map(genre => <GenresList key={genre.id}>{genre.name}</GenresList>)}
                    </FilmDescription>
            </FilmContainer >
        </div>
    )
}