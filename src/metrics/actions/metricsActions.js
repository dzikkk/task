import { createAction } from "@reduxjs/toolkit";

const fetchDataAction = {
  request: createAction('[METRICS ACTION] Metrics Request'),
  success: createAction('[METRICS ACTION] Metrics Success'),
  failed: createAction('[METRICS ACTION] Metrics Failed'),
}

const clearAction = createAction('[METRICS ACTION] Clear');

export const metricsActions = {
  fetchData: fetchDataAction,
  clear: clearAction,
}