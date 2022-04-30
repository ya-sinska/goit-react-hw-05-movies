import { Formik} from 'formik';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Searchfield, SearchForm, InputField, BtnSubmitForm, Icon} from './SearchBar.styled'


const initialValues = {
    name: '',
};
export const Searchbar = () => {
    const handleSubmit = (values, { resetForm }) => {
    // const query = values.name;
        resetForm();
    //    return query 
  };
    return (
        <Searchfield>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
            <SearchForm autoComplete='off'>            
                <Link to={`?query=`}>
                    <BtnSubmitForm type="submit">
                        <Icon size="2em"/>    
                    </BtnSubmitForm>
                </Link>
                <InputField
                    type="text"
                    name="name"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films"
                    />              
            </SearchForm >
            </Formik>
        </Searchfield>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}