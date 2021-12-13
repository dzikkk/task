import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import * as React from 'react';

export const FilterWrapper = styled('div')(({theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: 24,
}));


const TitleHeader = styled('h3')(({theme}) => ({
  marginBottom: 40,
}));

function generateMenuItems(option, idx) {
  return (<MenuItem value={idx+1}>{option}</MenuItem>);
}

export const MonthFilters = ({
  values,
  onFilterChange,
  options,
}) => {
  const dateSelectItems = options.map(generateMenuItems);

  return (
    <FilterWrapper>
      <TitleHeader>Show data between</TitleHeader>
      <FormControl>
        <InputLabel>From</InputLabel>
        <Select
          id="demo-simple-select"
          value={values.from}
          label="From"
          onChange={onFilterChange('from')}
        >
          {dateSelectItems}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>To</InputLabel>
        <Select
          id="demo-simple-select"
          value={values.to}
          label="To"
          onChange={onFilterChange('to')}
        >
          {dateSelectItems}
        </Select>
      </FormControl>
    </FilterWrapper>
  )
}