import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';



const Tutorial = (props) => {

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
  const routeChangeNext = () =>{ 
    let path = `/spaces`; 
    navigate(path);
  }
  const routeChangeBack = () =>{ 
    let path = `/intro`; 
    navigate(path);
  }
  
  return (

    
    
    <div>
    <Space h={HEIGHT / 5} />

    <Center>
        explanation (static image please!) goes here
    </Center>

    <Grid >
      <Grid.Col span={9}>




<Image 
      mt={ HEIGHT / 15 }
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      fullWidth
      h={HEIGHT / 60}
    />


      </Grid.Col>

      

      <Grid.Col span={2.8}>


        <Skeleton height={2.02 * HEIGHT/4} visible={false}>


        <Text fz="md">

          {hovered1 ? "sample instructions for play" : ""}
          {hovered2 ? "sample instructions for environment" : ""}
          {hovered3 ? "sample instructions for art" : ""}
          {hovered4 ? "sample instructions for food\ndkvndkvndkvndkvndkn" : ""}
        </Text>


        </Skeleton>

        <Grid>

        <Grid.Col span={6}>


      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChangeBack}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#60;  </Button>

        </Grid.Col>

        <Grid.Col span={6}>

      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChangeNext}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
        </Grid.Col>


      </Grid>


      </Grid.Col>

      

    </Grid>

    </div>
 
  );
};

export default Tutorial;