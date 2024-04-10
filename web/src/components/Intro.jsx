import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';



const Intro = (props) => {

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
    let path = `/tutorial`; 
    navigate(path);
  }
  const routeChangeBack = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  
  return (

    
    
    <div>
    <Space h={HEIGHT / 5} />

    <Grid >
      <Grid.Col span={9}>

      <Grid 
       gutter={HEIGHT / 20}>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>




  <div ref={ref1}>

    <AspectRatio h={HEIGHT / 3.8}>
      <Image 
        radius={HEIGHT / 50}
        src="/assets/Play.jpeg"
        fullWidth
        h={HEIGHT / 3.2}
      />


      <Overlay          
        h={HEIGHT / 3.2}
        radius={HEIGHT / 50}
        color="#1297b1" backgroundOpacity={0.8}>
          {hovered1 ? 
          <div>
            <Text c="#ffffff">insert text here about play</Text>
          </div>
          :
          <div>
            <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Play</Text>
          </div>
          } 
      </Overlay>


    </AspectRatio>

  </div>

  
  
  </Grid.Col>
<Grid.Col span={5}>

  <div ref={ref2}>
  

    <AspectRatio h={HEIGHT / 3.2}>
      <Image 
        radius={HEIGHT / 50}
        src="/assets/Environment.jpeg"
        fullWidth
        h={HEIGHT / 3.2}
      />


      <Overlay          
        h={HEIGHT / 3.2}
        radius={HEIGHT / 50}
        color="#4c8680" backgroundOpacity={0.8}>
          {hovered2 ? 
          <div>
            <Text c="#ffffff">insert text here about environment</Text>
          </div>
          :
          <div>
            <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Environment</Text>
          </div>
          } 
      </Overlay>


    </AspectRatio>

    </div>

  </Grid.Col>
<Grid.Col span={1}></Grid.Col>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>
    <div ref={ref3}>
  

    <AspectRatio h={HEIGHT / 3.2}>
      <Image 
        radius={HEIGHT / 50}
        src="/assets/Art.jpeg"
        fullWidth
        h={HEIGHT / 3.2}
      />


      <Overlay          
        h={HEIGHT / 3.2}
        radius={HEIGHT / 50}
        color="#a41e34" backgroundOpacity={0.8}>
          {hovered3 ? 
          <div>
            <Text c="#ffffff">insert text here about art</Text>
          </div>
          :
          <div>
            <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Art</Text>
          </div>
          } 
      </Overlay>


    </AspectRatio>

    </div>

</Grid.Col>
<Grid.Col span={5}>

<div ref={ref4}>
  

  <AspectRatio h={HEIGHT / 3.2}>
    <Image 
      radius={HEIGHT / 50}
      src="/assets/Food.jpeg"
      fullWidth
      h={HEIGHT / 3.2}
    />


    <Overlay          
      h={HEIGHT / 3.2}
      radius={HEIGHT / 50}
      color="#ff9321" backgroundOpacity={0.8}>
        {hovered4 ? 
        <div>
          <Text c="#ffffff">insert text here about food</Text>
        </div>
        :
        <div>
          <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Food</Text>
        </div>
        } 
    </Overlay>


  </AspectRatio>

  </div>

</Grid.Col>
<Grid.Col span={1}></Grid.Col>


</Grid>


<Image 
      mt={ HEIGHT / 15 }
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      fullWidth
      h={HEIGHT / 60}
    />


      </Grid.Col>

      

      <Grid.Col span={2.8}>

        <Text fz="lg">Instructions</Text>


        <Skeleton height={HEIGHT/2} visible={false}>


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

export default Intro;