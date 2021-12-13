import { createReducer } from "@reduxjs/toolkit"
import { add, assoc, assocPath, evolve, keys, path, pathOr, pipe, reduce, toPairs } from "ramda";
import { metricsActions } from '../actions/metricsActions';
import { metricsState, months } from "../state/metricsState";

function getMonth(date) {
  return months[(new Date(date).getMonth())];
}

const defaultTurbine = name => ({
  produced: 0,
  lost: 0,
  availability: 0,
  name,
})

const calculateAvailability = (prod, lost) => prod / (prod + lost)

const processTurbineData = (acc, {bucket, turbine, energyProduced, energyLost}) => {
  const path = [getMonth(bucket), 'turbines', turbine];
  const processedTurbine = pathOr(defaultTurbine(turbine), path, acc);
  const updateTurbine = evolve({
    produced: add(energyProduced),
    lost: add(energyLost),
  })
  const updateAvailability = t => assoc('availability', t.produced/(t.produced + t.lost), t)
  const buildTurbine = pipe(updateTurbine, updateAvailability)

  return assocPath(path, buildTurbine(processedTurbine), acc);
}

const grupTurbineData = reduce(processTurbineData, {});
const calculateTurbineMonths = turbineData => {
  return reduce((acc, month) => {
    const [produced, lost, worst] = reduce((turbineAcc, [_, {produced, lost, availability, name}]) => {
      return [
        add(turbineAcc[0], produced),
        add(turbineAcc[1], lost),
        turbineAcc[2].value < availability && turbineAcc[2].name ? turbineAcc[2] : {name, value: availability},
      ];
    }, [0, 0, {name: '', value: 0}], toPairs(path([month, 'turbines'], turbineData)));

    return acc.concat({
      ...turbineData[month],
      produced,
      lost,
      availability: calculateAvailability(produced, lost),
      worst,
      month,
    });
  }, [], keys(turbineData));
}

const parseTurbineData = pipe(grupTurbineData, calculateTurbineMonths);

export const metricsReducer = createReducer(metricsState(), (builder) => {
  return builder
    .addCase(metricsActions.fetchData.request, (state) => {
      state.isLoading = true;
    })
    .addCase(metricsActions.fetchData.success, (state, action) => {
      state.data = parseTurbineData(action.payload);
      state.isLoading = false;
    })
    .addCase(metricsActions.changeFilter, (state, action) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    })
    .addCase(metricsActions.fetchData.failed, (state) => {
      state.data = [];
      state.isLoading = false;
    })
    .addDefaultCase((state, action) => {})
})