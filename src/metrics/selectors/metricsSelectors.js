import { pathOr } from "ramda";
import { createSelector } from "reselect";

const metricsState = state => state.metrics;

export const selectMetricsData = createSelector([metricsState], pathOr({}, ['data']));