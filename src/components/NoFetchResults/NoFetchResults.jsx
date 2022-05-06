import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Btn } from "components/Movie/Movie.styled";
import { Notification } from "./NoTetchResults.styled"
export const NoFetchResults = ({ text, showBtn }) => {
    const navigate = useNavigate();

    return (
        <>
        <Notification>{text}</Notification>
        {showBtn&&<Btn type='button' onClick={()=>{navigate('/')}}>Back home page</Btn>}
        </>
    )
}
NoFetchResults.propTypes = {
    showBtn:PropTypes.bool,
    text: PropTypes.string,
}