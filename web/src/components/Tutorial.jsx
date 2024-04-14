import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';
import BikerProgress from './BikerProgress';



const Tutorial = (props) => {

  const [mode, setMode] = useState('all');



  const HEIGHT = props.height * 0.94;

  const ref1 = useRef(null)
  const hovered1 = useHover(ref1)

  const ref2 = useRef(null)
  const hovered2 = useHover(ref2)

  const ref3 = useRef(null)
  const hovered3 = useHover(ref3)

  const ref4 = useRef(null)
  const hovered4 = useHover(ref4)

  // const HEIGHT = 2000;
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
      <Space h={HEIGHT / 10} />

      {/* <Center>
        explanation (static image please!) goes here
    </Center> */}

      <Grid>
        <Grid.Col span={9} style={{ minHeight: 0.94 * HEIGHT }}>
          {mode == 'all' ?
            <Image
              radius={HEIGHT / 50}
              src="/assets/all.png"
              w={WIDTH * 3 / 4}
              h={HEIGHT * 3 / 4}
            />
            : ""}

          {mode == 'play' ?
            <Image
              radius={HEIGHT / 50}
              src="/assets/play.png"
              w={WIDTH * 3 / 4}
              h={HEIGHT * 3 / 4}
            />
            : ""}

          {mode == 'food' ?
            <Image
              radius={HEIGHT / 50}
              src="/assets/food.png"
              w={WIDTH * 3 / 4}
              h={HEIGHT * 3 / 4}
            />
            : ""}

          {mode == 'env' ?
            <Image
              radius={HEIGHT / 50}
              src="/assets/environment.png"
              w={WIDTH * 3 / 4}
              h={HEIGHT * 3 / 4}
            />
            : ""}

          {mode == 'art' ?
            <Image
              radius={HEIGHT / 50}
              src="/assets/art.png"
              w={WIDTH * 3 / 4}
              h={HEIGHT * 3 / 4}
            />
            : ""}


          <Space h={HEIGHT / 15.75} />

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
              {mode == "all" ? "Click through the four themes to learn more about what each of these open spaces offer." :
                mode == "play" ? "The parks and playgrounds around an open space create opportunities for families and friends to enjoy their time." :
                  mode == "env" ? "The environment, including the surrounding trees and greenery, invite people to spend time in their open spaces." :
                    mode == "art" ? "Many of our public spaces have murals or sculptures that bring people together. They foster community and learning." :
                      "Food, whether it be in a five-star restaurant or a small truck, excites people and helps gather them in the open spaces we often visit."}
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
                onClick={() => setMode('play')}
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
                onClick={() => setMode('env')}
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
                onClick={() => setMode('art')}
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
                onClick={() => setMode('food')}
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
                variant="light"
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