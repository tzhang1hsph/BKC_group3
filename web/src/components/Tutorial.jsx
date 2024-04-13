import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';



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

  return (



    <div>
      <Space h={HEIGHT / 10} />

      {/* <Center>
        explanation (static image please!) goes here
    </Center> */}

      <Grid >
        <Grid.Col span={9}>



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


        </Grid.Col>



        <Grid.Col span={2.8}>


          <Image
            mt={HEIGHT / 15}
            radius={HEIGHT / 50}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            fullWidth
            h={HEIGHT / 60}
          />


          <Text><b>Let's explore an open space!</b></Text>


          <Skeleton height={HEIGHT / 4} visible={false}>


            {mode == 'all' ?


              <Text fz="md">



                sample text for all<br></br>
                second line


              </Text>

              : ""}

            {mode == 'play' ? "sample text for play" : ""}
            {mode == 'env' ? "sample text for environment" : ""}
            {mode == 'art' ? "sample text for art" : ""}
            {mode == 'food' ? "sample text for food" : ""}


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