import styled from "@emotion/styled";
import { MdKeyboardReturn } from 'react-icons/md';
export const Btn = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
`
export const GoBack = styled(MdKeyboardReturn)`
width: 60px;
height: 30px;
color: #fc7b03;
`
export const FilmContainer = styled.div`
display:flex;
justify-content: space-between;
`
export const FilmDescription = styled.div`
margin-left:30px;
padding: 15px;
box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
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
`
export const GenresList = styled.span`
display: block;
font-size:16px;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #ca7628;
font-weight: 700;
`
