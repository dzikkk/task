import { createReducer } from "@reduxjs/toolkit"
import { sum } from "ramda";
import { metricsActions } from '../actions/metricsActions';
import { metricsState } from "../state/metricsState";

export const metricsReducer = createReducer(metricsState(), (builder) => {
  return builder
    .addCase(metricsActions.fetchData.request, (state) => {
      state.isLoading = true;
    })
    .addCase(metricsActions.fetchData.success, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(metricsActions.fetchData.failed, (state) => {
      state.data = [];
      state.isLoading = false;
    })
    .addDefaultCase((state, action) => {})
})