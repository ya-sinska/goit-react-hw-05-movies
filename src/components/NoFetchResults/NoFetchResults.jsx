import PropTypes from 'prop-types';
import { Notification } from "./NoTetchResults.styled"
export const NoFetchResults = ({ text }) => {
    return (
        <Notification>
            {text}
        </Notification>
    )
}
NoFetchResults.propTypes = {
    text: PropTypes.string,
}