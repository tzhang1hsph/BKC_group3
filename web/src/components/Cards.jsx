import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Image, Flex, Modal, Button, Grid } from '@mantine/core';
import Card from "./Card";

import ChinatownPark from '../../../maps/Chinatown Park.json'
// import ChinatownParkH from '..'

import ChinatownParkH from '../../../hourly_plots/Chinatown Park.json';


import CityHall from '../../../maps/City Hall Plaza.json';
import CityHallH from '../../../hourly_plots/Chinatown Park.json';

import BostonCommon from '../../../maps/Boston Common.json'
import BostonCommonH from '../../../hourly_plots/Chinatown Park.json';

import FranklinPark from '../../../maps/Franklin Park.json'
import FranklinParkH from '../../../hourly_plots/Chinatown Park.json';



const HEIGHT = 180;


const Cards = () => {

  return (
    <>


    <Grid justify="center" grow gutter="62px" align="center">

    <Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>

      <Grid.Col span={2} style={{ minHeight: HEIGHT }}>


      <Card 
    id={1} 
    name={"Chinatown Park"} 
    map={ChinatownPark}
    hourly={ChinatownParkH}
    >
    </Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={2} 
    name={"City Hall Plaza"}
    map={CityHall}
    hourly={CityHallH}

    
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={3} 
    name={"Boston Common"}
    map={BostonCommon}
    hourly={BostonCommonH}
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}
    ></Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}

    ></Card>
 
</Grid.Col>


<Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>










<Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>

      <Grid.Col span={2} style={{ minHeight: HEIGHT }}>


      <Card 
    id={1} 
    name={"Chinatown Park"} 
    map={ChinatownPark}
    hourly={ChinatownParkH}
    >
    </Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={2} 
    name={"City Hall Plaza"}
    map={CityHall}
    hourly={CityHallH}

    
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={3} 
    name={"Boston Common"}
    map={BostonCommon}
    hourly={BostonCommonH}
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}
    ></Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}

    ></Card>

</Grid.Col>


<Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>


      
<Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>

      
      <Grid.Col span={2} style={{ minHeight: HEIGHT }}>


      <Card 
    id={1} 
    name={"Chinatown Park"} 
    map={ChinatownPark}
    hourly={ChinatownParkH}
    
    >
    </Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={2} 
    name={"City Hall Plaza"}
    map={CityHall}
    hourly={CityHallH}

    
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card 
    id={3} 
    name={"Boston Common"}
    map={BostonCommon}
    hourly={BostonCommonH}
    ></Card>


</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}
    ></Card>

</Grid.Col>
<Grid.Col span={2} style={{ minHeight: HEIGHT }}>

<Card id={4} 
    name={"Franklin Park"}
    map={FranklinPark}
    hourly={FranklinParkH}

    ></Card>

</Grid.Col>


<Grid.Col span={1} style={{ minHeight: HEIGHT }}>
      </Grid.Col>





    </Grid>

      {/* <Flex
      mih={50}
      gap="xl"
      justify={{ sm: 'center' }}
      align="flex-start"
      direction="row"
      wrap="wrap"
    >



    


 



    </Flex>
       */}


    
    
    
    </>
 
  );
};

export default Cards;