import './App.css';
import { Provider } from 'react-redux'
import { rootStore } from './store/rootStore';
import { MetricsContainer } from './metrics/components/MetricsContainer';
import { ThemeProvider } from '@material-ui/core';
import { taskTheme } from './core/theme/taskTheme';
import { FlexWrapper } from './layout/Wrappers/FlexWrapper';

function App() {
  return (
    <ThemeProvider theme={taskTheme}>
      <Provider store={rootStore}>
        <div className="App">
          <FlexWrapper direction={'column'}>
            <MetricsContainer />
          </FlexWrapper>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
