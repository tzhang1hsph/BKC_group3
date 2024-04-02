import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { BackgroundImage, Image, Flex, Modal, Center, Container, Text, Button, Box, Grid } from '@mantine/core';
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

<Plot data={props.hourly.data} layout={props.hourly.layout}/>



      





      


      
      </Modal>


    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={180}
      w={180}
      onClick={open}
    />    
      


    
    
    
    </>
 
  );
};

export default Card;