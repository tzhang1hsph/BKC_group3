import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Image, Flex, Modal, Button } from '@mantine/core';
import { TextInput, FocusTrap } from '@mantine/core';


const Card = (props) => {

    const [opened, { open, close }] = useDisclosure(false);

    const id = props.id;

  return (
    <>
      <Modal opened={opened} onClose={close} title="Open Space Information" centered>
        
      <h3>Information on { id }</h3>
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>


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