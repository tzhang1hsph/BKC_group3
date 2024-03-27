import React, { useState } from 'react';
import { Grid } from '@mantine/core';

import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const getChild = (height) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 780;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);


const Definition = () => {


const theme = useMantineTheme();

  
  return (
    <div>

<h1>Comparison</h1>


    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs:  4}}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, 400))}
          {getChild(getSubHeight(2, 400))}
        </Stack>
        <Stack>
        {getChild(getSubHeight(2, 400))}
        {getChild(getSubHeight(2, px(400)))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
    </div>

  );
};

export default Definition;