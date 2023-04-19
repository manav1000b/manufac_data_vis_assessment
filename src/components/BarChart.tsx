import { memo, useMemo } from 'react';
import ReactECharts from 'echarts-for-react';

import { Data } from '../types';
import { EChartsOption } from 'echarts';

import { echarts } from '../config/echarts'; // echarts configuration

export default memo(function BarChart(props: { data: Array<Data> }): JSX.Element {
  const chartOptions: EChartsOption = useMemo(() => {
    // caches the options if props.data is same on re-rendering
    const xAxisLabels = [...new Set(props.data.map((value: Data) => value.Alcohol))]; // unique X-axis labels
    return {
      xAxis: {
        type: 'category',
        data: xAxisLabels,

        // X-axis name and positioning
        name: 'Alchohol',
        nameLocation: 'end',
        nameGap: 0,
        nameTextStyle: {
          align: 'right',
          verticalAlign: 'top',
          padding: [30, 0, 0, 0]
        }
      },
      yAxis: {
        name: 'Min. Magnesium',
        type: 'value'
      },
      series: [
        {
          // Y-axis data: finding the minimum value for each X-axis label
          data: xAxisLabels.map((value: number) => Math.min(...props.data.filter((data: Data) => data.Alcohol === value).map((data: Data) => data.Magnesium))),
          type: 'bar'
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
                      <span>Alchohol: ${series.name}</span>
                      <span>Min. Magnesium: ${series.value}</span>
                    </div>`;
          return ``;
        }
      }
    };
  }, [props.data]);

  return (
    <div id='bar-chart-container'>
      <ReactECharts echarts={echarts} option={chartOptions} />
    </div>
  );
});
