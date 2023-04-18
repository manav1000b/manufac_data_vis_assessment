import { memo } from 'react';

import { Data } from '../types';

export default memo(function ScatterPlotChart(props: { data: Array<Data> }): JSX.Element {
  return <div id='scatter-plot-chart-container'></div>;
});
