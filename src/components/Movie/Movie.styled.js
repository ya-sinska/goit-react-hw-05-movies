import styled from "@emotion/styled";
import { MdKeyboardReturn } from 'react-icons/md';
export const Btn = styled.button`
background-color: transparent;
cursor: pointer;
font-size:14px;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #fc7b03;
display:flex;
flex-direction:column-reverse;
align-items:center;
padding:3px;
margin-bottom:15px;
border: 2px solid #fc7b03;
box-shadow: 0px 0px 17px 0px rgba(255,124,36,0.66);
border-radius: 4px;
&:hover,:focus{
    box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
    background-color: #fff9e8;
    border: 2px solid #fcba03;
}

`
export const GoBack = styled(MdKeyboardReturn)`
width: 30px;
height: 20px;
color: #fc7b03;
`
export const FilmContainer = styled.div`
display:flex;
`
export const FilmDescription = styled.div`
margin-left:30px;
padding: 15px;
box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
width: 85vw;
`
export const Poster = styled.img`
width: 18vw;
box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
`
export const Title = styled.h2`
font-size:35px;
font-family: 'Permanent Marker', cursive;
font-weight:400;
color: #fc7b03;
text-decoration:underline;
margin-top:0;
`
export const SubTitle = styled.h3`
font-size:21px;
font-family: 'Permanent Marker', cursive;
font-weight:400;
color: #fc7b03;
`
export const Text = styled.p`
font-size:16px;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #ca7628;
font-weight: 700;
width: 50vw;
`
export const GenresList = styled.span`
display: block;
font-size:16px;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #ca7628;
font-weight: 700;
`
