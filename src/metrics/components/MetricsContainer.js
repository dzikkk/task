import {default as React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metricsActions } from '../actions/metricsActions';
import { selectMetricsData } from '../selectors/metricsSelectors';
import { Metrics } from "./Metrics"

const useActions = () => {
  const dispatch = useDispatch();

  return {
    clearMetrics: () => { dispatch(metricsActions.clear()) },
    fetchMetricsData: (from = 1, to = 12) => { dispatch(metricsActions.fetchData.request({from, to})) }
  }
}

const useSelectors = () => ({
  metrics: useSelector(selectMetricsData),
})

export const MetricsContainer = () => {
  const {clearMetrics, fetchMetricsData} = useActions();
  const {metrics} = useSelectors();
  useEffect(() => {
    fetchMetricsData();
    return () => {
      clearMetrics()
    }
  }, []);

  return <Metrics metrics={metrics} />
}