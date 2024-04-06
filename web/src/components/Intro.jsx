import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from '@mantine/hooks';



const Intro = (props) => {

  const HEIGHT = props.height * 0.94;


  const { hovered1, ref1 } = useHover();

  // const HEIGHT = 2000;
  const WIDTH = props.width;
  
  return (
    <div>

    <Space h={HEIGHT / 5} />

    {/* <Center></Center> */}

    <Grid >
      <Grid.Col span={9}>

      <Grid 
      // align="center"
       gutter={HEIGHT / 20}>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>


<div ref={ref1}>


<AspectRatio  h={HEIGHT / 3.8}
>



<Image 
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      fullWidth
      h={HEIGHT / 3.2}
    >
    </Image>


<Overlay          h={HEIGHT / 3.2}
   radius={HEIGHT / 50}
color="#990000" backgroundOpacity={0.8}>
  <Text> hahahah</Text>
</Overlay>


</AspectRatio>

</div>

  
  
  </Grid.Col>
<Grid.Col span={5}>
  <Image 
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      fullWidth
      h={HEIGHT / 3.2}
    /> 
  </Grid.Col>
<Grid.Col span={1}></Grid.Col>

<Grid.Col span={1} ></Grid.Col>
<Grid.Col span={5}>
  <Button style={{ minHeight: HEIGHT / 3.2 }} fullWidth>Full width button</Button></Grid.Col>
<Grid.Col span={5}>
  <Button style={{ minHeight: HEIGHT / 3.2 }} fullWidth>Full width button</Button></Grid.Col>
<Grid.Col span={1}></Grid.Col>

{/* <Grid.Col span={2}></Grid.Col>
<Grid.Col span={4} style={{ minHeight: 100 }}><Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
<Grid.Col span={4}><Button style={{ minHeight: 100 }} fullWidth>Full width button</Button></Grid.Col>
<Grid.Col span={2}></Grid.Col> */}

</Grid>




      </Grid.Col>

      

      <Grid.Col span={2.8}></Grid.Col>

      

    </Grid>

    </div>
 
  );
};

export default Intro;