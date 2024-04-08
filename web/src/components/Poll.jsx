import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';



const Poll = (props) => {



  const [play, setPlay] = useState(false);
  const [env, setEnv] = useState(false);
  const [art, setArt] = useState(false);
  const [food, setFood] = useState(false);

  const HEIGHT = props.height;
  const WIDTH = props.width;

  let navigate = useNavigate(); 
  const routeChangeNext = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const routeChangeBack = () =>{ 
    let path = `/spaces`; 
    navigate(path);
  }


  const clickPlay = () =>{
    setPlay(true);
    setEnv(false);
    setArt(false);
    setFood(false);
  }
  const clickEnv = () =>{
    setPlay(false);
    setEnv(true);
    setArt(false);
    setFood(false);
  }
  const clickArt = () =>{
    setPlay(false);
    setEnv(false);
    setArt(true);
    setFood(false);
  }
  const clickFood = () =>{
    setPlay(false);
    setEnv(false);
    setArt(false);
    setFood(true);
  }
  
  return (

    
    
    <div>
    <Space h={HEIGHT / 10} />

    <Grid >
      <Grid.Col span={9}>

        <Text fz="lg">poll text</Text>
        <Space h={HEIGHT / 20} />


      <Grid 
       gutter={HEIGHT / 20}>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>



  <div>


  <Button 
      color={play ? "#000" : "#1297b1"}
      onClick={clickPlay}
      radius={HEIGHT / 50}
      fullWidth
      h={HEIGHT / 3.2}
      >
      
      <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Play</Text>

    </Button>


  </div>

  
  
  </Grid.Col>
<Grid.Col span={5}>

  <div>


  <Button 
      color={env ? "#000" : "#4c8680"}
      onClick={clickEnv}
      radius={HEIGHT / 50}
      fullWidth
      h={HEIGHT / 3.2}
      >
      
      <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Environment</Text>
      
    </Button>
  


    </div>

  </Grid.Col>
<Grid.Col span={1}></Grid.Col>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>
    <div>

    <Button 
      color={art ? "#000" : "#a41e34"}
      onClick={clickArt}
      radius={HEIGHT / 50}
      fullWidth
      h={HEIGHT / 3.2}
      >
      
      <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Art</Text>
      
    </Button>

    </div>

</Grid.Col>

<Grid.Col span={5}>

<div>


<   Button 
      color={food ? "#000" : "#ff9321"}
      onClick={clickFood}
      radius={HEIGHT / 50}
      fullWidth
      h={HEIGHT / 3.2}
      >
      
      <Text c="#ffffff" fz={rem(60 / 1080 * HEIGHT)}>Food</Text>
      
    </Button>
  

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
      <Space h={HEIGHT / 20} />


        <Text fz="lg">Instructions</Text>


        <Skeleton height={HEIGHT/2} visible={false}>


        <Text fz="md">



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

export default Poll;