import './App.css';

import BarChart from './components/BarChart';
import ScatterPlotChart from './components/ScatterPlotChart';

function App() {
  return (
    <div id='app'>
      <ScatterPlotChart />
      <BarChart />
    </div>
  );
}

export default App;
