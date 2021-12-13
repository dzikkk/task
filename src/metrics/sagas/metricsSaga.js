import { call, put, takeLatest } from "redux-saga/effects";
import { metricsActions } from "../actions/metricsActions";
import { metricsQuery } from "../api/metricsApi";

function* fetchMetrics({payload}) {
  if(payload.from && payload.to) {
    try{
      const {data} = yield call(metricsQuery, payload);
      yield put(metricsActions.fetchData.success(data));
    } catch (err) {
      yield put(metricsActions.fetchData.failed(err));
    }
  }
}

export function* metricsSaga() {
  yield takeLatest(metricsActions.fetchData.request, fetchMetrics);
};