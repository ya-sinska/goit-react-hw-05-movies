import styled from "@emotion/styled";
import { Form, Field } from "formik";
import { BiSearch } from 'react-icons/bi';

export const Searchfield = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`
export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff9e8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 17px 0px rgba(255,185,43,0.66);
`
export const InputField = styled(Field)`
   display: inline-block;
   background-color: #fff9e8;
  width: 100%;
  font: inherit;
  font-size: 20px;
  color: #fc7b03;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
  font: inherit;
  font-size: 18px;
  color: #fc7b03;
}
   `
export const BtnSubmitForm = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 10px;
  background-color: #f1ddd4;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover{
      opacity: 1;
  }`

export const Icon = styled(BiSearch)`
  color: #fc7b03;
  `