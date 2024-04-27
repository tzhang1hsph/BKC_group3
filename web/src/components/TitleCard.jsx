import React from 'react'
import { Button, Overlay, Space, rem, Text, Grid } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import Plot from 'react-plotly.js';
import spacesPlot from '../../../maps/choropleth.json'
import '/public/Engage/Engage.css';

const TitleCard = (props) => {
  const HEIGHT = props.height;
  const WIDTH = props.width;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/intro`;
    navigate(path);
  }

  spacesPlot.layout.height = 7 / 12 * HEIGHT;
  spacesPlot.layout.width = (WIDTH + 8) / 4 - 16;
  spacesPlot.layout.legend.font.size = HEIGHT / 72;
  spacesPlot.layout.mapbox.zoom = 2 / 1475 * HEIGHT + 25285 / 2950;

  const smallMargin = HEIGHT / 100;

  return (
    <div>
      <div className='background-image' style={{
        backgroundImage: 'url(/assets/Cover.png)',
        backgroundColor: '#007c9c',
        clipPath: `inset(0% ${(WIDTH * 1 / 3) / (WIDTH - 8) * 100}% 0% 0%)`
      }}></div>
      <Overlay backgroundOpacity={0}>
        <Grid>
          <Grid.Col span={8.5 - 72 / WIDTH}>
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
          </Grid.Col>
          {/* <Grid.Col span={smallMargin}></Grid.Col> */}

          <Grid.Col span={3 - 24 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div className='flex-container' style={{ height: HEIGHT - 8 }}>
              <Space h={HEIGHT / 8} />
              <div>
                <Text ta="left" fz="lg">Boston has <b>453</b> open spaces.</Text>
                <Plot data={spacesPlot.data} layout={spacesPlot.layout} style={{ alignSelf: 'center' }} />
                <Text ta="left" fz="lg">Why do we gather at certain spaces but not others?</Text>
              </div>
              <Button color="orange" fz="xl"
                onClick={routeChange}
                radius={HEIGHT / 80}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 8 }} fullWidth> CLICK TO BEGIN </Button>
            </div>
          </Grid.Col>
          {/* <Grid.Col span={smallMargin}></Grid.Col> */}

        </Grid>
      </Overlay>
    </div >
  )
}

export default TitleCard