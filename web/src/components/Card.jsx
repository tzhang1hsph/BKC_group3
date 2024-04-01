import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { BackgroundImage, Image, Flex, Modal, Center, Text, Button, Box } from '@mantine/core';
import { TextInput, FocusTrap } from '@mantine/core';

import Plot from 'react-plotly.js'



const Card = (props) => {

    const [opened, { open, close }] = useDisclosure(false);

    // const id = props.id;

  return (
    <>
      <Modal size="100%" opened={opened} onClose={close} 
      // title={props.name} 
      centered>
        
      <h1>{ props.name }</h1>

      <Plot data={props.map.data} layout={props.map.layout}/>

      
      </Modal>


{/* 
    <Box maw={100} mx="auto">


    <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        height="20px"
        width="20px"

        radius="lg"
      >


<Button>

click me


</Button>

</BackgroundImage>


      

    </Box>
    */}


     


    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={100}
      w={100}
      onClick={open}
    />    
      


    
    
    
    </>
 
  );
};

export default Card;