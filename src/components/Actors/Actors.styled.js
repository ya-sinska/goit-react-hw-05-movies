import styled from "@emotion/styled";
export const List = styled.ul`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: 10px;
grid-row-gap: 1em;
border-top: 4px solid rgba(255,185,43,0.66);
padding-top:10px;
`
export const Item = styled.li`
list-style-type: none;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #ca7628;
`
export const Name = styled.p`
font-weight:900;
margin:5px 0; 
font-size:18px;
`