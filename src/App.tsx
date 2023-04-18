import { Suspense, lazy } from 'react';

import './App.css';
import data from './data/Wine-Data.json';

import { Data } from './types';

import Loading from './components/shared/Loading';

const BarChart = lazy(() => import(`./components/BarChart`));
const ScatterPlotChart = lazy(() => import(`./components/ScatterPlotChart`));

function App() {
  return (
    <div id='app'>
      <Suspense fallback={<Loading id='scatter-loader' style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }} />}>
        <ScatterPlotChart data={data as Array<Data>} />
      </Suspense>
      <Suspense fallback={<Loading id='bar-chart-loader' style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }} />}>
        <BarChart data={data as Array<Data>} />
      </Suspense>
    </div>
  );
}

export default App;
