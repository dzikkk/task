import './App.css';
import { Provider } from 'react-redux'
import { rootStore } from './store/rootStore';
import { ThemeProvider } from '@material-ui/core';
import { taskTheme } from './core/theme/taskTheme';
import { FlexWrapper } from './layout/Wrappers/FlexWrapper';
import { MetricsContainer } from './metrics/components/Metrics/MetricsContainer';
import { MonthFiltersContainer } from './metrics/components/MonthFilters/MonthFiltersContainer';

function App() {
  return (
    <ThemeProvider theme={taskTheme}>
      <Provider store={rootStore}>
        <div className="App">
          <FlexWrapper direction={'column'}>
            <MonthFiltersContainer />
            <MetricsContainer />
          </FlexWrapper>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
