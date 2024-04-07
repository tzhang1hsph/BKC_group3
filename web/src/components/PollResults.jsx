import React, { useState } from 'react';
import { Grid, Button, Image } from '@mantine/core';
import { PieChart, Pie, ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label } from 'recharts';


const renderLabel = (props) => {
    return (
      <g>
        <image href={require("https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png").default} width={60} height={60} x={40} y={40} />
      </g>
    );
};

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

      <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
    Donut
   </text>
   <Label content={renderLabel} position="center" />


  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>


</ResponsiveContainer>

        

      </Grid.Col>

      <Grid.Col span={2} style={{ minHeight: 100 }} />




    </Grid>
 
  );
};

export default PollResults;