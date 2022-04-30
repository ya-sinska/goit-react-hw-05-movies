import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid #fcba03;
  border-radius: 5px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  color: #fcba03;
  font-size: 30px;
  background-color: #fff9e8;
  box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
  &:not(:last-child){
    margin-right:30px;
  }
  &.active {
    font-size: 32px;
    color: #fc7b03;
    border: 2px solid #fc7b03;
    background-color: #fff5db;
    box-shadow: 0px 0px 17px 0px rgba(255,124,36,0.66);
  }
`;