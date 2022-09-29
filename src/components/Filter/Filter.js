import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValueFilter } from 'redux/filters/filtersSelectors';
import { setValueFilters } from 'redux/filters/filtersSlice';
import { nanoid } from 'nanoid';
import { Wrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getValueFilter);

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setValueFilters(value));
  };

  const findInputId = nanoid();
  return (
    <Wrapper>
      <Label htmlFor={findInputId}>Find contacts by name</Label>
      <Input
        id={findInputId}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Filter;
