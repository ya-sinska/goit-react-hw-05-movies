import styled from "@emotion/styled";
import { NavLink } from "react-router-dom"
export const Info = styled.div`
margin-top: 30px;
padding: 15px;
box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
`
export const Detail = styled(NavLink )`
display: block;
font-size:21px;
font-family: 'Permanent Marker', cursive;
font-weight:400;
color: #fc7b03;
text-decoration:none;
&:not(:last-child){
    margin-bottom:10px;
}
  &.active {
    font-size: 25px;
    color: #ca7628;
  }
`
export const Title = styled.h2`
font-size:35px;
font-family: 'Permanent Marker', cursive;
font-weight:400;
color: #fc7b03;
text-decoration:underline;
margin-top:0;
`