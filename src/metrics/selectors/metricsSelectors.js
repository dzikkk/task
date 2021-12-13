import { pathOr } from "ramda";
import { createSelector } from "reselect";

const metricsState = state => state.metrics;

export const selectMetricsData = createSelector([metricsState], pathOr({}, ['data']));
export const selectFromFilter = createSelector([metricsState], pathOr(1, ['from']));
export const selectToFilter = createSelector([metricsState], pathOr(12, ['to']));