const defaultMetricsState = {
  data: [],
  isLoading: false,
}

export const metricsState = (initialState = {}) => ({
  ...defaultMetricsState, 
  ...initialState,
})