import React, { useState } from 'react';
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

  const HEIGHT = props.height;
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
      <div class='background-image' style={{ backgroundImage: `url(/assets/${mode}.png)`, backgroundColor: '#fffcf2' }}></div>
      <Overlay backgroundOpacity={0}>
        <Grid>
          <Grid.Col span={9 - 72 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div class='flex-container' style={{ height: HEIGHT - 8, justifyContent: 'flex-end' }}>
              <Grid>
                <Grid.Col offset={1} span={10}>
                  <BikerProgress progress={0.4} height={HEIGHT} width={WIDTH} />
                </Grid.Col>
              </Grid>
            </div>
          </Grid.Col>

          <Grid.Col span={3 - 24 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div class='flex-container' style={{ height: HEIGHT - 8 }}>
              <Space h={HEIGHT / 8 + HEIGHT / 20 + 20} />
              <div>
                <Text ta="left" fz="xl"><b>Let's explore an open space!</b></Text>

                <Skeleton ta="left" fz="lg" height={HEIGHT / 3.5} visible={false}>

                  {mode == "all" ? <>The chart to the left shows the characteristics of one open space in the four themes we saw earlier.
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
              </div>

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
            </div>

          </Grid.Col>

        </Grid>
      </Overlay>

    </div>

  );
};

export default Tutorial;