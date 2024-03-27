import React, { useState } from 'react';
import { Grid } from '@mantine/core';


const Definition = () => {
  
  return (
    <Grid>
      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

      <Grid.Col span={4} style={{ minHeight: 780 }}>[viz 1]</Grid.Col>
      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

      <Grid.Col span={5} style={{ minHeight: 780, textAlign: "left"}}>

        <h2>What makes a space a gathering space?</h2>
        Now, let's delve deeper into the question: What transforms an open space into a vibrant gathering spot? Is it the serenity of a tranquil park, the lively ambiance of a bustling plaza, or the sense of belonging it instills in those who frequent it? 

From the inviting benches of the Common, the panoramic views from the Esplanade, or the cultural vibrancy of the Rose Kennedy Greenway, each green space offers its own blend of amenities and aesthetics. These qualities openly beckon people to come together and connect, and create lasting memories. It offers a unifying force for community members to learn about one another, to create social binds that will carry them through.
      </Grid.Col>

      <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

    </Grid>
 
  );
};

export default Definition;