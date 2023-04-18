import { memo } from 'react';

import { Data } from '../types';

export default memo(function BarChart(props: { data: Array<Data> }): JSX.Element {
  return <div id='bar-chart-container'></div>;
});
