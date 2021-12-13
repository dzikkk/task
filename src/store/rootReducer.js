import { combineReducers } from "redux";
import { metricsReducer } from "../metrics/reducers/metricsReducer";

export const rootReducer = combineReducers({
  metrics: metricsReducer,
});
