import { createAction } from "@reduxjs/toolkit";

const fetchDataAction = {
  request: createAction('[METRICS ACTION] Metrics Request'),
  success: createAction('[METRICS ACTION] Metrics Success'),
  failed: createAction('[METRICS ACTION] Metrics Failed'),
}

const changeFilterAction = createAction('[METRICS ACTION] ChangeFilter');
const clearAction = createAction('[METRICS ACTION] Clear');

export const metricsActions = {
  fetchData: fetchDataAction,
  changeFilter: changeFilterAction,
  clear: clearAction,
}