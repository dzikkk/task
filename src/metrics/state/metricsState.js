const defaultMetricsState = {
  data: [],
  isLoading: false,
  from: 1,
  to: 12,
}

export const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export const metricsState = (initialState = {}) => ({
  ...defaultMetricsState, 
  ...initialState,
})