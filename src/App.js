import './App.css';
import { Provider } from 'react-redux'
import { rootStore } from './store/rootStore';
import { MetricsContainer } from './metrics/components/MetricsContainer';
import { ThemeProvider } from '@material-ui/core';
import { taskTheme } from './core/theme/taskTheme';

function App() {
  return (
    <ThemeProvider theme={taskTheme}>
      <Provider store={rootStore}>
        <div className="App">
          <MetricsContainer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
