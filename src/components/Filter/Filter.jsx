import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from '../../redux/selectors';
import {
  StyledFilter,
  StyledText, InputForm,
  ButtonFilter,
} from './Filter.styled';

const Filter = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = event => {
    const value = event.target.value.trim();

    dispatch(setFilter(value));
  };

  const onClear = () => {
    ref.current.value = '';
  };

  return (
    <StyledFilter>
      <StyledText>Find a contact</StyledText>
      <InputForm
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterInput}
        ref={ref}
      />
      <ButtonFilter type="button" onClick={onClear}>
        Clear
      </ButtonFilter>
    </StyledFilter>
  );
};

export default Filter;
