import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Image, Flex, Modal, Button } from '@mantine/core';
import Card from "./Card";

import ChinatownPark from '../../../maps/Chinatown Park.json'
import CityHall from '../../../maps/City Hall Plaza.json'
import BostonCommon from '../../../maps/Boston Common.json'
import FranklinPark from '../../../maps/Franklin Park.json'


const Cards = () => {

  return (
    <>

      <Flex
      mih={50}
      gap="xl"
      justify={{ sm: 'center' }}
      align="flex-start"
      direction="row"
      wrap="wrap"
    >

    <Card 
    id={1} 
    name={"Chinatown Park"} 
    map={ChinatownPark}></Card>

    <Card 
    id={2} 
    name={"City Hall Plaza"}
    map={CityHall}></Card>

    <Card 
    id={3} 
    name={"Boston Common"}
    map={BostonCommon}></Card>

    <Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}></Card>



    </Flex>
      


    
    
    
    </>
 
  );
};

export default Cards;