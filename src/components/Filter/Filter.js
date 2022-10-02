import { Formik } from 'formik';
import { FilterInput, Title, FilterWrap } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <Title>Find contact by name</Title>
      <Formik>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        ></FilterInput>
      </Formik>
    </FilterWrap>
  );
};
