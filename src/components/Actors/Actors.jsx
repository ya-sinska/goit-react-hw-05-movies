import * as Scroll from 'react-scroll';
import { List, Item, Name, Image } from "./Actors.styled";
import { NoFetchResults } from "components/NoFetchResults/NoFetchResults";
import image from "../../Images/noPoster.jpg"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const Actors = ({ cast}) => {
    Scroll.animateScroll.scrollMore(500);
    return (
        <>
        {
            cast.cast.length === 0 ? (<NoFetchResults text={'Sorry, no actors to show'}/>) :
                (<List >
                    {cast.cast.map(({ name, character, profile_path }) => <Item key={name}>
                        {profile_path ? (<Image src={`${imgBaseUrl}${profile_path}`} alt={name} />) : (<Image src={`${image}`} alt='no poster' />)}
                        <Name>{name}</Name>
                        <p>{character}</p>
                    </Item >)}
                </List >)
        }
        </>

  
    )
}