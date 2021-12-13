import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import * as React from 'react';

export const FilterWrapper = styled('div')(({theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: '24px 32px',
  border: `2px solid ${theme.palette.primary.dark}`,
  alignSelf: 'center',
  marginTop: 24,
  borderRadius: 15,
}));


const TitleHeader = styled('h3')(({theme}) => ({
  margin: 0,
  marginBottom: 8,
  color: theme.palette.primary.main,
  fontWeight: 'normal',
  textAlign: 'center',
}));

const StyledLabel =styled('span')({
  margin: '0 10px',
  lineHeight: '29px',
})

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
        <Select
          id="demo-simple-select"
          value={values.from}
          label="From"
          onChange={onFilterChange('from')}
        >
          {dateSelectItems}
        </Select>
      </FormControl>
      <StyledLabel> and </StyledLabel>
      <FormControl>
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