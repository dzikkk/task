import {default as React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFromFilter, selectToFilter } from '../../selectors/metricsSelectors';
import { months } from '../../state/metricsState';
import { metricsActions } from '../../actions/metricsActions';
import { MonthFilters } from "./MonthFilters"

const useActions = () => {
  const dispatch = useDispatch();

  return {
    changeFilterValue: (filterValues) => { dispatch(metricsActions.changeFilter(filterValues)) }
  }
}

const useSelectors = () => ({
  from: useSelector(selectFromFilter),
  to: useSelector(selectToFilter),
})

export const MonthFiltersContainer = () => {
  const {changeFilterValue} = useActions();
  const filterValues = useSelectors();

  const handleFilterChange = filter => event => {
    const updatedValue = event.target.value;
    if (filter === 'from') {
      const { to } = filterValues;
      changeFilterValue({
        [filter]: updatedValue,
        to: updatedValue > to ? updatedValue : to,
      })
    } else if (filter === 'to') {
      const { from } = filterValues;
      changeFilterValue({
        [filter]: updatedValue,
        from: updatedValue < from ? updatedValue : from,
      })
    }
    // changeFilterValue
  }  

  return <MonthFilters onFilterChange={handleFilterChange} values={filterValues} options={months} />
}