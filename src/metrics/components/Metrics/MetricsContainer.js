import {default as React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metricsActions } from '../../actions/metricsActions';
import { selectFromFilter, selectMetricsData, selectToFilter } from '../../selectors/metricsSelectors';
import { Metrics } from './Metrics';

const useActions = () => {
  const dispatch = useDispatch();

  return {
    clearMetrics: () => { dispatch(metricsActions.clear()) },
    fetchMetricsData: (from = 1, to = 12) => { dispatch(metricsActions.fetchData.request({from, to})) }
  }
}

const useSelectors = () => ({
  metrics: useSelector(selectMetricsData),
  from: useSelector(selectFromFilter),
  to: useSelector(selectToFilter),
})

export const MetricsContainer = () => {
  const {clearMetrics, fetchMetricsData} = useActions();
  const {metrics, from, to} = useSelectors();
  useEffect(() => {
    if(from && to) {
      fetchMetricsData(from, to);
    }
  }, [from, to]);

  useEffect(() => {
    return () => {
      clearMetrics();
    }
  }, []);

  return <Metrics metrics={metrics} />
}