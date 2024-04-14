import React from 'react'
import { Button, Overlay, AspectRatio, Image, Title, Space, rem, Text, Grid, Skeleton, Center } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import Plot from 'react-plotly.js';
import spacesPlot from '/public/assets/choropleth.json'

import '/public/Engage/Engage.css';


const TitleCard = (props) => {

  const HEIGHT = props.height * 0.94;
  const WIDTH = props.width;


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/intro`;
    navigate(path);
  }


  return (


    <Grid my="sm">

      <Grid.Col span={9} style={{ minHeight: 0.94 * HEIGHT }}>
        <img
          style={{ 'margin-left': '-2rem', 'margin-top': '-2.8rem', 'clip-path': 'inset(0 27% 0 0)' }}
          src="/assets/Cover.png"
        />
        <Overlay w={0.73 * WIDTH} backgroundOpacity={0}>
          <Text ta='left'
            mt={rem(168 / 1080 * HEIGHT)}
            ml={rem(113 / 1080 * HEIGHT)}
            c='#fffcf2'
            style={{ fontFamily: 'Engage Regular, sans-serif' }}
            fz={rem(97 / 1080 * HEIGHT)}
          >Why We Gather</Text>

          <Text ta='left'
            ml={rem(113 / 1080 * HEIGHT)}
            c='#fffcf2'
            fz={rem(36 / 1080 * HEIGHT)}
          >How can gathering spaces change a community?</Text>
        </Overlay>

      </Grid.Col>

      <Grid.Col span={2.8} style={{ minHeight: 0.94 * HEIGHT }}>

        <Space h={HEIGHT / 10} />

        <Text ta="left" fz="lg">Boston has <b>453</b> open spaces.</Text>

        <Plot data={spacesPlot.data} layout={spacesPlot.layout} />
        <Text ta="left" fz="lg">Why do we gather at certain spaces but not others?</Text>

        <Space h={HEIGHT / 21.85} />

        <Button variant="light" color="orange" fz="xl"
          onClick={routeChange}
          radius={HEIGHT / 80}
          style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 8 }} fullWidth> CLICK TO BEGIN </Button>


      </Grid.Col>



    </Grid>
  )
}

export default TitleCard