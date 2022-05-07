import PropTypes from 'prop-types';
import { FilmContainer, GoBack, Btn, FilmDescription, Poster, Title, SubTitle, Text, GenresList, YouTybeImg, Container } from "./Movie.styled";
import image from "../../Images/noPoster.jpg"
import youTube from "../../Images/yout.png"
import { useState } from 'react';
import { useFetchVideo } from 'hooks/useFetchVideo';
import { Modal } from 'components/Modal/Modal';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

export const Movie = ({ movie, label, onBackClick }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { video, status } = useFetchVideo(movie.id);

    const openModal = (data) => {
    setModalOpen(prevState => !prevState);
    } 

    const { title, poster_path, genres, overview, vote_average} = movie;
    return (
        <div>
            <Btn type='button' onClick={onBackClick} >{label? label:"Go Back"}<GoBack  /></Btn>
            <FilmContainer >
                <Container onClick={openModal}>
                    {poster_path ? (<Poster  src={`${imgBaseUrl}${poster_path}`} alt={title} />) : (<Poster src={`${image}`} alt='no poster' />)}
                    {status === "resolved" && <YouTybeImg src={youTube} alt="you tube" />}
                </Container>
               
                    <FilmDescription>
                        <Title>{title}</Title>
                        <Text>User score: <b>{vote_average}</b></Text>
                        <SubTitle>Overview</SubTitle>
                        {overview!==''?(<Text>{overview}</Text>):(<Text>No overview</Text>)}
                        <SubTitle>Genres</SubTitle>
                    {genres ? (genres.map(genre => <GenresList key={genre.id}>{genre.name}</GenresList>)) : (<Text>No genre</Text>)}
                    </FilmDescription>
            </FilmContainer >
            <Modal onClose={openModal} isModalOpen={modalOpen} trailer={video} status={ status}/>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        genres: PropTypes.array,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired,
    onBackClick:PropTypes.func.isRequired,
}
