import { List, Item,Autor, Icon, NoReviev } from "./Reviev.styled"

export const Review = ({ reviews }) => {
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