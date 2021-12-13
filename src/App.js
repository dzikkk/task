import './App.css';
import { Provider } from 'react-redux'
import { rootStore } from './store/rootStore';
import { MetricsContainer } from './metrics/components/MetricsContainer';

function App() {
  return (
    <Provider store={rootStore}>
      <div className="App">
        <MetricsContainer />
      </div>
    </Provider>
  );
}

export default App;
