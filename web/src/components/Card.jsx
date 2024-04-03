import React, { useState, useEffect } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { BackgroundImage, Image, Flex, Modal, Center, Container, Text, Button, Box, Grid } from '@mantine/core';
import { TextInput, FocusTrap } from '@mantine/core';

import Plot from 'react-plotly.js';
import Papa from 'papaparse';



const Card = (props) => {

    const [opened, { open, close }] = useDisclosure(false);


    const [ text, setText ] = useState();


  //   const load = function(){
  //     fetch( './final_data_table.csv' )
  //         .then( response => response.text() )
  //         .then( responseText => {
  //             setText( responseText );
  //         })
  // };

  async function GetData(artist) {
    const data = Papa.parse(await fetchCsv());
    console.log("this")
    console.log(data);
    setText(data);
    return data;
}

async function fetchCsv() {
    const response = await fetch('./final_data_table.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    // console.log('csv', csv);
    return csv;
}


  useEffect(() => {
    GetData("no");
    console.log(text);
  }, []);


    // const id = props.id;

  return (
    <>
      <Modal size="100%" opened={opened} onClose={close} 
      // title={text} 
      centered>
        
      <h1>{ props.name }</h1>


      {text.data[props.id].map(function(object, i){
        return <p>i: {i}, value: {object},  </p>;
    })}



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