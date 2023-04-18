import { Suspense, lazy, memo, useEffect } from 'react';

import './App.css';
import data from './data/Wine-Data.json';

import { Data } from './types';

import Loading from './components/shared/Loading';

const ScatterPlotChart = lazy(() => import(`./components/ScatterPlotChart`));
const BarChart = lazy(() => import(`./components/BarChart`));

function App() {
  return (
    <div id='app'>
      <Suspense fallback={<Loading id='scatter-loader' />}>
        <ScatterPlotChart data={data as Array<Data>} />
      </Suspense>
      <Suspense fallback={<Loading id='bar-chart-loader' />}>
        <BarChart data={data as Array<Data>} />
      </Suspense>
    </div>
  );
}

export default memo(App);
