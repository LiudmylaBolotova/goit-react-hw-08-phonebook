import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from '../../redux/selectors';
import { InputForm, ButtonFilter } from './Filter.styled';

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
    <div>
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
    </div>
  );
};

export default Filter;
