import React from 'react'
import { Button, Overlay, AspectRatio, Image, Title, Space, rem, Text, Grid, Skeleton, Center } from '@mantine/core';
import { useNavigate } from "react-router-dom";

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

      <Grid.Col span={9} style={{ minHeight: HEIGHT }}>
        <Image
          ml='-2rem'
          mt='-2.8rem'
          src="/assets/Cover.png"
          h='100vh'
          w='100vw'
        />
        <Overlay
          h={HEIGHT}
          w={WIDTH * 8.5 / 12}
          backgroundOpacity={0}
        >
          <Text ta='left'
            mt={rem(190 / 1080 * HEIGHT)}
            ml={rem(100 / 1080 * HEIGHT)}
            c='#fffcf2'
            style={{ fontFamily: 'Engage Regular, sans-serif' }}
            fz={rem(80 / 1080 * HEIGHT)}
          >Why We Gather</Text>

          <Text ta='left'
            ml={rem(100 / 1080 * HEIGHT)}
            c='#fffcf2'
            fz={rem(36 / 1080 * HEIGHT)}
          >How can gathering spaces change a community?</Text>
        </Overlay>

      </Grid.Col>

      <Grid.Col span={2.8} style={{ minHeight: HEIGHT }}>

        <Space h={HEIGHT / 4} />

        <Text ta="left" fz="lg">Boston has 453 open spaces.</Text>
        <br></br>

        <Text ta="left" fz="lg">Why do we gather at certain spaces</Text>

        <Image
          mt={HEIGHT / 80}
          radius={HEIGHT / 50}
          src="/assets/FaneuilSquare.jpeg"
          h={HEIGHT / 7.5}
          w={WIDTH * 2.8 / 12}
        />
        <Image
          mt={HEIGHT / 80}
          radius={HEIGHT / 50}
          src="/assets/CityHallPlazaCrop.jpeg"
          h={HEIGHT / 7.5}
          w={WIDTH * 2.8 / 12}
        />
        {/* <Skeleton height={HEIGHT} radius="md" animate={false} ></Skeleton> */}

        <Text mt={HEIGHT / 100} ta="right" fz="lg">...but not others?</Text>


        <Space h={HEIGHT / 8} />


        <Button variant="light" color="orange" fz="xl"
          onClick={routeChange}
          radius={HEIGHT / 80}
          style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 8 }} fullWidth> CLICK TO BEGIN </Button>


      </Grid.Col>



    </Grid>
  )
}

export default TitleCard