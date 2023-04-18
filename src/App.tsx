import { lazy, memo } from 'react';

import './App.css';

// this import is not correct. Actual data would be fetched from the server
import data from './data/Wine-Data.json';

import { Data } from './types';

const ScatterPlotChartComponent = lazy(() => import(`./components/ScatterPlotChart`));
const BarChartComponent = lazy(() => import(`./components/BarChart`));

function App() {
  return (
    <div id='app'>
      {/* Suspense can be added for a fallback UI while loading dynamically */}
      <ScatterPlotChartComponent data={data as Array<Data>} />
      <BarChartComponent data={data as Array<Data>} />
    </div>
  );
}

export default memo(App);
