import React from 'react'
import { Button, Overlay, AspectRatio, Image, Space, Text, Grid, Skeleton } from '@mantine/core';
import { useNavigate } from "react-router-dom";



const Title = (props) => {

  const HEIGHT = props.height * 0.94;
  const WIDTH = props.width;


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/intro`; 
    navigate(path);
  }


  return (


    <Grid my="sm">

    <Grid.Col span={9} style={{ minHeight: HEIGHT }}>

      <Image
      radius={HEIGHT / 20}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={HEIGHT}
      w={WIDTH * 8.5 / 12}
    />    
    </Grid.Col>
    
      <Grid.Col span={2.8} style={{ minHeight: HEIGHT }}>

      <Space h={HEIGHT / 4} />
      <Text ta="left" fz="lg">Boston has 999 open spaces.</Text>
      <br></br>

      <Text ta="left" fz="lg">Why do we gather at certain spaces</Text>

      <Image
      mt={HEIGHT / 80}
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={HEIGHT / 7.5}
      w={WIDTH * 2.8 / 12}
    />    
    <Image
      mt={HEIGHT / 80}
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={HEIGHT / 7.5}
      w={WIDTH * 2.8 / 12}
    />    
      {/* <Skeleton height={HEIGHT} radius="md" animate={false} ></Skeleton> */}

      <Text mt={HEIGHT / 100} ta="right" fz="lg">...but not others?</Text>


      <Space h={HEIGHT / 8} />


      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChange}
    
      style={{  minHeight: HEIGHT / 8 }} fullWidth>CLICK TO EXPLORE </Button>


      </Grid.Col>

      

    </Grid>
  )
}

export default Title