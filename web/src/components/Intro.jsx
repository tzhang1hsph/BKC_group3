import React, { useState } from 'react';
import { Grid } from '@mantine/core';


const Intro = () => {
  
  return (
    <Grid>
      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>
      <Grid.Col span={4} style={{ minHeight: 780 }}>
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>
      <Grid.Col span={5} style={{ minHeight: 780, textAlign: "left"}}>
      Boston, a city steeped in history and diversity, boasts a myriad of open spaces that serve as the beating heart of its communities. 
      From the lush greenery of the Public Garden to the bustling energy of Quincy Market, each space tells a story of its own. 
      As citizens of this beautiful city, we invite you to explore what qualities help bring you all together.

      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

    </Grid>
 
  );
};

export default Intro;