import React, { useState } from 'react';
import { Grid, Button } from '@mantine/core';


const Poll = () => {

  
  
  return (
    <Grid>
    <Grid.Col span={2} style={{ minHeight: 230 }} />

      <Grid.Col span={8} style={{ minHeight: 230 }}>


        <h1>Why do you gather?</h1>

        We invite you to pause and reflect on your own experiences of gathering spaces. 
        What aspect resonated the most with you today? Is it the sense of play found in the public 
        parks that are scattered across Central? Is it the culinary delights found in the vibrant 
        cultural food scene? Or is it some other, collective spirit of the congregation?

      </Grid.Col>

      <Grid.Col span={2} style={{ minHeight: 100 }} />


      <Grid.Col span={2} ></Grid.Col>
      <Grid.Col span={4} style={{ minHeight: 100 }}>
        <Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
      <Grid.Col span={4}><Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
      <Grid.Col span={2}></Grid.Col>

      <Grid.Col span={2}></Grid.Col>
      <Grid.Col span={4} style={{ minHeight: 100 }}><Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
      <Grid.Col span={4}><Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
      <Grid.Col span={2}></Grid.Col>



    </Grid>
 
  );
};

export default Poll;