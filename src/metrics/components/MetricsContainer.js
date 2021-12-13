import {default as React, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { metricsActions } from '../actions/metricsActions';
import { Metrics } from "./Metrics"

const useActions = () => {
  const dispatch = useDispatch();

  return {
    clearMetrics: () => { dispatch(metricsActions.clear()) },
    fetchMetricsData: (from = 1, to = 12) => { dispatch(metricsActions.fetchData.request({from, to})) }
  }
}

export const MetricsContainer = () => {
  const {clearMetrics, fetchMetricsData} = useActions();
  useEffect(() => {
    fetchMetricsData();
    return () => {
      clearMetrics()
    }
  }, [])

  return <Metrics />
}