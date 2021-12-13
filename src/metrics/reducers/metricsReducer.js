import { createReducer } from "@reduxjs/toolkit"
import { add, assoc, assocPath, evolve, forEach, keys, path, pathOr, pipe, reduce, toPairs } from "ramda";
import { metricsActions } from '../actions/metricsActions';
import { metricsState } from "../state/metricsState";

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
  forEach(month => {
    const [produced, lost, worst] = reduce((acc, [_, {produced, lost, availability, name}]) => {
      return [
        add(acc[0], produced),
        add(acc[1], lost),
        acc[2].value < availability && acc[2].name ? acc[2] : {name, value: availability},
      ];
    }, [0, 0, {name: '', value: 0}], toPairs(path([month, 'turbines'], turbineData)));

    turbineData = assoc(month, {
      produced,
      lost,
      availability: calculateAvailability(produced, lost),
      worst,
    }, turbineData)
  }, keys(turbineData));

  return turbineData;
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
    .addCase(metricsActions.fetchData.failed, (state) => {
      state.data = [];
      state.isLoading = false;
    })
    .addDefaultCase((state, action) => {})
})