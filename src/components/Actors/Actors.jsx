import { List, Item, Name  } from "./Actors.styled";
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const Actors = ({ cast}) => {
    return (
        <List >
            {cast.cast.map(({ name, character, profile_path }) => <Item  key={name}>
                <img src={`${imgBaseUrl}${profile_path}`} alt={name} />
                <Name>{name}</Name>
                <p>{character}</p>
            </Item >)}
        </List >
  
    )
}