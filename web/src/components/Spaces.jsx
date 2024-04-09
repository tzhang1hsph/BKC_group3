import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Image, Space, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';

import PolarBarChart from './Card';

import BostonCommon from '../../../maps/Boston Common.json'
import BostonCommonH from '../../../hourly_plots/Boston Common.json';

import ChinatownPark from '../../../maps/Chinatown Park.json';
import ChinatownParkH from '../../../hourly_plots/Chinatown Park.json';

import CityHall from '../../../maps/City Hall Plaza.json';
import CityHallH from '../../../hourly_plots/City Hall Plaza.json';

import DeweySquare from '../../../maps/Dewey Square Parks.json';
import DeweySquareH from '../../../hourly_plots/Dewey Square Parks.json';

import FallonField from '../../../maps/Fallon Field.json';
import FallonFieldH from '../../../hourly_plots/Fallon Field.json';

import FaneuilSquare from '../../../maps/Faneuil Square.json';
import FaneuilSquareH from '../../../hourly_plots/Faneuil Square.json';

import OlmstedPark from '../../../maps/Olmsted Park.json';
import OlmstedParkH from '../../../hourly_plots/Olmsted Park.json';

import RossPlayground from '../../../maps/Ross Playground.json';
import RossPlaygroundH from '../../../hourly_plots/Ross Playground.json';


const Spaces = (props) => {
  const [mode, setMode] = useState('all');

  const HEIGHT = props.height * 0.94;

  const ref1 = useRef(null)
  const hovered1 = useHover(ref1)

  const ref2 = useRef(null)
  const hovered2 = useHover(ref2)

  const ref3 = useRef(null)
  const hovered3 = useHover(ref3)

  const ref4 = useRef(null)
  const hovered4 = useHover(ref4)

  // const HEIGHT = 2000;
  const WIDTH = props.width;

  let navigate = useNavigate();
  const routeChangeNext = () => {
    let path = `/poll`;
    navigate(path);
  }
  const routeChangeBack = () => {
    let path = `/tutorial`;
    navigate(path);
  }

  return (



    <div>
      <Space h={HEIGHT / 5} />

      <Grid>

        <Grid.Col span={9}>

          <Grid grow gutter={HEIGHT / 40} align="center">

            <Grid.Col span={1}>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Boston Common"
                map={BostonCommon}
                hourly={BostonCommonH}
              />
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Chinatown Park"
                map={ChinatownPark}
                hourly={ChinatownParkH}
              />
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="City Hall Plaza"
                map={CityHall}
                hourly={CityHallH}
              />
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Dewey Square Parks"
                map={DeweySquare}
                hourly={DeweySquareH}
              />
            </Grid.Col>

            <Grid.Col span={1}>
            </Grid.Col>

            <Grid.Col span={1}>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Fallon Field"
                map={FallonField}
                hourly={FallonFieldH}
              />

            </Grid.Col>
            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Olmsted Park"
                map={OlmstedPark}
                hourly={OlmstedParkH}
              />

            </Grid.Col>
            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Faneuil Square"
                map={FaneuilSquare}
                hourly={FaneuilSquareH}
              />

            </Grid.Col>
            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Ross Playground"
                map={RossPlayground}
                hourly={RossPlaygroundH}
              />
            </Grid.Col>

            <Grid.Col span={1}>
            </Grid.Col>

          </Grid>

          <Image
            mt={HEIGHT / 15}
            radius={HEIGHT / 50}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            fullWidth
            h={HEIGHT / 60}
          />
        </Grid.Col>


        <Grid.Col span={2.8}>
          <Text fz="lg">Instructions</Text>
          <Skeleton height={HEIGHT / 6} visible={false}>
            <Text fz="md">
              {hovered1 ? "sample instructions for play" : ""}
              {hovered2 ? "sample instructions for environment" : ""}
              {hovered3 ? "sample instructions for art" : ""}
              {hovered4 ? "sample instructions for food\ndkvndkvndkvndkvndkn" : ""}
            </Text>
          </Skeleton>

          <Grid.Col>
          <Button
            color='#10445c'
            fz="xl"
            onClick={() => setMode('all')}
            style={{ minHeight: HEIGHT / 8 }}
            fullWidth
          > All </Button>
          </Grid.Col>

          <Grid>
            <Grid.Col span={6}>
              <Button
                color='#237c9c'
                fz="xl"
                onClick={() => setMode('play')}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > Play </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#5aafa9'
                fz="xl"
                onClick={() => setMode('env')}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > Environment </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#e3685b'
                fz="xl"
                onClick={() => setMode('art')}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > Art </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#f89c5a'
                fz="xl"
                onClick={() => setMode('food')}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > Food </Button>
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={6}>
              <Button
                variant="light"
                color="orange"
                fz="xl"
                onClick={routeChangeBack}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > &#60; </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                variant="light"
                color="orange"
                fz="xl"
                onClick={routeChangeNext}
                style={{ minHeight: HEIGHT / 8 }}
                fullWidth
              > &#62; </Button>
            </Grid.Col>
          </Grid>

        </Grid.Col>

      </Grid>

    </div>

  );
};

export default Spaces;