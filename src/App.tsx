import './App.css';

import { Data } from './types';

import BarChart from './components/BarChart';
import ScatterPlotChart from './components/ScatterPlotChart';

import data from './data/Wine-Data.json';

function App() {
  return (
    <div id='app'>
      <ScatterPlotChart data={data as Array<Data>} />
      <BarChart data={data as Array<Data>} />
    </div>
  );
}

export default App;
