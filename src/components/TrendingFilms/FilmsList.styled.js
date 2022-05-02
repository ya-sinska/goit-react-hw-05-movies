import styled from "@emotion/styled";
import { Link} from "react-router-dom";
export const Container = styled.main`
text-align:center;
`
export const Title = styled.h2`
font-size:35px;
font-family: 'Permanent Marker', cursive;
font-weight:400;
color: #fc7b03;

`
export const List = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 1em;

`
export const Links = styled(Link)`
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
color: #e170a9;
font-size:24px;
text-decoration-line:none;
font-weight:600;
box-shadow: 0px 0px 23px 0px #FFA322;
&:not(:last-child){
    margin-bottom:15px;
}
&:hover{
    text-decoration-line: underline;
    color: #df1d7f;
}
`
export const Item = styled.li`
display: flex;
flex-direction: column;
font-size:35px;
font-family: 'Dancing Script', cursive;
font-weight:400;
list-style:none;
`
export const Poster = styled.div`
width: 300px;
margin-bottom:10px;
padding-top: 10px;
`
export const MoviesTitle = styled.p`
height: 60px;
padding: 5px;
`