import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';
import BikerProgress from './BikerProgress';



const Tutorial = (props) => {

  const [mode, setMode] = useState('all');
  const [visited, setVisited] = useState({
    play: false,
    env: false,
    food: false,
    art: false
  });

  const HEIGHT = props.height * 0.94;
  const WIDTH = props.width;


  let navigate = useNavigate();
  const routeChangeNext = () => {
    let path = `/spaces`;
    navigate(path);
  }
  const routeChangeBack = () => {
    let path = `/intro`;
    navigate(path);
  }

  const restart = () => {
    let path = `/`;
    navigate(path);
  }

  return (



    <div>
      <img src={`/assets/${mode}.png`} style={{ position: 'absolute', top: '0px', left: '0px' }}></img>
      <Space h={HEIGHT / 10} />

      <Grid>
        <Grid.Col span={9} style={{ minHeight: 0.94 * HEIGHT }}>

          <Space h={HEIGHT / 1.228} />

          <Grid>
            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={10}>
              <BikerProgress progress={0.4} height={HEIGHT} width={WIDTH} />
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={2.8} style={{ minHeight: 0.84 * HEIGHT }}>
          <Space h={HEIGHT / 10} />

          <Text ta="left" fz="xl"><b>Let's explore an open space!</b></Text>

          <Skeleton height={HEIGHT / 3} visible={false}>
            <Text ta="left" fz="lg">
              {mode == "all" ? <>The chart to the right shows the characteristics of one open space in the four themes we saw earlier.
                <br></br>
                Click through the four themes to learn more about what each of these open spaces offer.</> :
                mode == "play" ? <>The parks and playgrounds around an open space create opportunities for families and friends to enjoy their time.
                  <br></br>
                  This score is calculated based on the number of play features the open space has.</> :
                  mode == "env" ? <>The environment, including the surrounding trees and greenery, invite people to spend time in their open spaces.
                    <br></br>
                    This score is calculated based on the size of the open space and the amount of its canopy cover (area covered by trees).</> :
                    mode == "art" ? <>Many of our public spaces have murals or sculptures that bring people together. They foster community and learning.
                      <br></br>
                      This score is calculated based on the number of murals and sculptures near the open space.</> :
                      <>Food, whether it be in a five-star restaurant or a small truck, excites people and helps gather them in the open spaces we often visit.
                        <br></br>
                        This score is calculated based on the number of restaurants, food trucks, and farmers markets near the open space.</>}
            </Text>
          </Skeleton>
          <Grid gutter="xs">
            <Grid.Col span={12}>
              <Button
                color='#07455d'
                variant={mode === 'all' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('all')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > All </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#007c9c'
                variant={mode === 'play' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => {
                  setMode('play');
                  setVisited({ ...visited, play: true });
                }}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Play </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#5aafa9'
                variant={mode === 'env' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => {
                  setMode('env');
                  setVisited({ ...visited, env: true });
                }}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Environment </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#e3685b'
                variant={mode === 'art' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => {
                  setMode('art');
                  setVisited({ ...visited, art: true });
                }}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Art </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#f89c5a'
                variant={mode === 'food' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => {
                  setMode('food');
                  setVisited({ ...visited, food: true });
                }}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Food </Button>
            </Grid.Col>
          </Grid>

          <Space h={HEIGHT * 0.7 / 8.55} />

          <Grid gutter="xs">

            <Grid.Col span={12}>
              <Button
                variant="light"
                radius={HEIGHT / 80}
                color="orange"
                fz="xl"
                onClick={restart}
                style={{ minHeight: HEIGHT / 20, minWidth: WIDTH / 20 }}
              > &#8635; </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="light"
                radius={HEIGHT / 80}
                color="orange"
                fz="xl"
                onClick={routeChangeBack}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > &#60; </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                variant={Object.values(visited).every(Boolean) ? "" : "light"}
                radius={HEIGHT / 80}
                color="orange"
                fz="xl"
                onClick={routeChangeNext}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > &#62; </Button>
            </Grid.Col>
          </Grid>


        </Grid.Col>



      </Grid>

    </div>

  );
};

export default Tutorial;