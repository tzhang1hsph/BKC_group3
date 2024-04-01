import React, { useState } from 'react';
import { Grid, Button } from '@mantine/core';
import { PieChart, Pie, ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label } from 'recharts';



const data01 = [
    {
      "name": "Group A",
      "value": 400,
      "fill": "#8884d8"
    },
    {
      "name": "Group B",
      "value": 300,
      "fill": "#FFFFFF"

    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

const PollResults = () => {
  
  return (
    <Grid>
    <Grid.Col span={2} style={{ minHeight: 230 }} />

      <Grid.Col span={8} style={{ minHeight: 230 }}>

      <ResponsiveContainer width='100%' height={400}>


      <PieChart width={780} height={780}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" label />
  {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
</PieChart>


</ResponsiveContainer>

        

      </Grid.Col>

      <Grid.Col span={2} style={{ minHeight: 100 }} />




    </Grid>
 
  );
};

export default PollResults;