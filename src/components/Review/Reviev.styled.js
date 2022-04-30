import styled from "@emotion/styled"
import{AiOutlineUser} from 'react-icons/ai'
export const List = styled.ul`
list-style-type: none;
padding: 10px;
`
export const Item = styled.li`
font-size:16px;
font-family: 'Work Sans', sans-serif;
font-weight:400;
color: #ca7628;
border: 1px solid rgba(255,185,43,0.66);;
border-radius: 10px;
padding: 20px;
&:not(:last-child){
    margin-bottom:15px;
}
`
export const Autor = styled.p`
font-size:18px;
font-weight:600;
margin-bottom:10px;
`
export const Icon  = styled(AiOutlineUser)`
margin-right:10px;
`
export const NoReviev  = styled.p`
font-size:18px;
font-weight:600;
margin-bottom:10px;
color: #ca7628;
`