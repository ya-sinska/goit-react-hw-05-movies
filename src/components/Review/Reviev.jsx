import { List, Item,Autor, Icon} from "./Reviev.styled"
import * as Scroll from 'react-scroll';
import { NoFetchResults } from "components/NoFetchResults/NoFetchResults";
export const Review = ({ reviews }) => {
    Scroll.animateScroll.scrollMore(500);
    return (<>
        {reviews.length === 0 ? (<NoFetchResults text={'No reviews'}/>) : (<List>
            {reviews.map(({ author, content }) =>
            <Item key={author}>
                    <Autor>
                        <Icon/>
                        Autor: {author}</Autor>
                <p>{content }</p>
            </Item>)}
    </List>)}
    </>
    )
}