import React, { useState } from 'react';
import { Grid } from '@mantine/core';


const Intro = () => {
  
  return (
    <Grid>
      <Grid.Col span={6} style={{ minHeight: 780 }}>column 1</Grid.Col>
      <Grid.Col span={6} style={{ minHeight: 780 }}>column 2</Grid.Col>
    </Grid>
 
  );
};

export default Intro;