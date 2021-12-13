import { all } from 'redux-saga/effects';
import { metricsSaga } from "../metrics/sagas/metricsSaga";

export function* rootSaga() {
  yield all([
    metricsSaga(),
  ]);
}