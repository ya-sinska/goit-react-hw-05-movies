import { List, Item,Autor, Icon, NoReviev } from "./Reviev.styled"
import * as Scroll from 'react-scroll';

export const Review = ({ reviews }) => {
    Scroll.animateScroll.scrollMore(300);
    return (<>
        {reviews.length === 0 ? (<NoReviev>No review</NoReviev>) : (<List>
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