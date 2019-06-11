
import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, AreaSeries, Borders, XAxis, YAxis} from 'react-vis';

class Charts extends Component {
    render() {
      const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
      return (
        <div>
            <XYPlot height={300} width={300}>
                <LineSeries data={data} />
            </XYPlot>
            <XYPlot xDomain={[1.2, 3]} yDomain={[11, 26]} width={300} height={300}>
                <AreaSeries
                    data={[
                    {x: 1, y: 10, y0: 1},
                    {x: 2, y: 25, y0: 5},
                    {x: 3, y: 15, y0: 3}
                    ]}/>
                <Borders style={{
                    bottom: {fill: '#fff'},
                    left: {fill: '#fff'},
                    right: {fill: '#fff'},
                    top: {fill: '#fff'}
                }}/>
                <XAxis />
                <YAxis />
                <AreaSeries
                    data={[
                    {x: 1, y: 5, y0: 6},
                    {x: 2, y: 20, y0: 11},
                    {x: 3, y: 10, y0: 9}
                    ]}/>
            </XYPlot>
        </div>
      );
    }
  }
  
  export default Charts;