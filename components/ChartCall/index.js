import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

const data = [
  {
    name: 'Whatsapp', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Telegram', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Fone1', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Fone2', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'ChatBot', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Email', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Messenger', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
      <React.Fragment>
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            right: 20, left: 20,
          }}
          barSize={15}
        >
          <XAxis dataKey="name" scale="point" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </React.Fragment>
    );
  }
}
