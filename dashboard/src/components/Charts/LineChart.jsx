import React from 'react';
import { ChartComponent, SeriesCollectiveDirective, SeriesDirective, Inject, DateTime, LineSeries, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy';

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject 
      services={[ LineSeries, DateTime, Legend, Tooltip ]} />
    </ChartComponent>
  )
}

export default LineChart