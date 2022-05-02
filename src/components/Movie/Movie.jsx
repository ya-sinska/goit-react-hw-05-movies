import { FilmContainer,GoBack,Btn, FilmDescription, Poster, Title,SubTitle, Text,GenresList} from "./Movie.styled";
import image from "../../Images/noPoster.jpg"

const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

export const Movie = ({ movie, onBackClick }) => {
    const { title, poster_path, genres, overview, vote_average} = movie;
    return (
        <div>
            <Btn type='button'onClick={onBackClick} ><GoBack  /></Btn>
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