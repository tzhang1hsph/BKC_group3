import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Image, Flex, Modal, Button } from '@mantine/core';
import Card from "./Card";

const Cards = () => {

  return (
    <>



    

      <Flex
      mih={50}
      gap="lg"
      justify={{ sm: 'center' }}
      align="flex-start"
      direction="row"
      wrap="wrap"
    >

    <Card id={1}></Card>
    <Card id={2}></Card>
    <Card id={3}></Card>
    <Card id={4}></Card>
    <Card id={5}></Card>



    </Flex>
      


    
    
    
    </>
 
  );
};

export default Cards;