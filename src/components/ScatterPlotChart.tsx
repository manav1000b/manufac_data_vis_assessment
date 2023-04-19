import { memo, useMemo } from 'react';
import ReactECharts from 'echarts-for-react';

import { Data } from '../types';
import { EChartsOption } from 'echarts';

import { echarts } from '../config/echarts'; // echarts configuration

export default memo(function ScatterPlotChart(props: { data: Array<Data> }): JSX.Element {
  const chartOptions: EChartsOption = useMemo(() => {
    // caches the options if props.data is same on re-rendering
    return {
      xAxis: {
        name: 'Flavanoids',
        nameLocation: 'end',
        nameGap: 0,
        nameTextStyle: {
          align: 'right',
          verticalAlign: 'top',
          padding: [30, 0, 0, 0]
        }
      },
      yAxis: {
        name: 'Ash'
      },
      series: [
        {
          symbolSize: 7, // size of the scatter point
          data: props.data.map((value: Data) => [value.Flavanoids, value.Ash]), // Array<[x,y]>
          type: 'scatter'
        }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params: any): string => {
          // return HTML strings
          const series = params[0]; // 1 series only, so first element
          if (series)
            return `<div class='chart-tooltip-container'>
                      <span>Flavanoids: ${series.value[0]}</span>
                      <span>Ash: ${series.value[1]}</span>
                    </div>`;
          return ``;
        }
      }
    };
  }, [props.data]);

  return (
    <div id='scatter-plot-chart-container'>
      <ReactECharts echarts={echarts} option={chartOptions} />
    </div>
  );
});
