import { Formik} from 'formik';
import PropTypes from 'prop-types';
import { Searchfield, SearchForm, InputField, BtnSubmitForm, Icon} from './SearchBar.styled'


const initialValues = {
    name: '',
};
export const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values.name)
        resetForm();
    
  };
    return (
        <Searchfield>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
            <SearchForm autoComplete='off'>            
                
                    <BtnSubmitForm type="submit">
                        <Icon size="2em"/>    
                    </BtnSubmitForm>
                
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
    onSubmit: PropTypes.func.isRequired,
}