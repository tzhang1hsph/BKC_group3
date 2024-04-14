import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Image, Space, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';

import PolarBarChart from './Card';
import BikerProgress from './BikerProgress';

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
  const restart = () => {
    let path = `/`;
    navigate(path);
  }

  return (



    <div>
      <Space h={HEIGHT / 5} />

      <Grid>

        <Grid.Col span={9} style={{ minHeight: 0.84 * HEIGHT }}>

          <Grid grow gutter={HEIGHT / 40} align="center">
            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Boston Common"
                map={BostonCommon}
                hourly={BostonCommonH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Chinatown Park"
                map={ChinatownPark}
                hourly={ChinatownParkH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="City Hall Plaza"
                map={CityHall}
                hourly={CityHallH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Dewey Square Parks"
                map={DeweySquare}
                hourly={DeweySquareH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>


            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Fallon Field"
                map={FallonField}
                hourly={FallonFieldH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Olmsted Park"
                map={OlmstedPark}
                hourly={OlmstedParkH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Faneuil Square"
                map={FaneuilSquare}
                hourly={FaneuilSquareH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={2.5}>
              <PolarBarChart
                mode={mode}
                name="Ross Playground"
                map={RossPlayground}
                hourly={RossPlaygroundH}
                height={HEIGHT}
              />
              <Space h={HEIGHT / 15}></Space>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>

          <Space h={HEIGHT / 43.17} />

          <Grid>
            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={10}>
              <BikerProgress progress={0.6} height={HEIGHT} width={WIDTH} />
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>


        </Grid.Col>


        <Grid.Col span={2.8} style={{ minHeight: 0.84 * HEIGHT }}>

          <Text ta="left" fz="xl"><b>Your turn!</b></Text>

          <Skeleton ta="left" fz="lg" height={HEIGHT / 3} visible={false}>
            {/* <Text fz="md">
                sample text for all<br></br>
                second line
              </Text> */}


            Take the time to look through eight open spaces spread across Boston, and click through what makes each so special. Some of them may be familiar, but think about what stands out to you, whether it’s the environment, the playgrounds, the artwork, or the delicious food. Think about the four themes!
            {/* {mode == 'all' ?
              <Text fz="md">
                sample text for all<br></br>
                second line
              </Text>
              : ""}
            {mode == 'play' ? "sample text for play" : ""}
            {mode == 'env' ? "sample text for environment" : ""}
            {mode == 'art' ? "sample text for art" : ""}
            {mode == 'food' ? "sample text for food" : ""} */}
          </Skeleton>
          <Grid gutter="xs">
            <Grid.Col span={12}>
              <Button
                color='#07455d'
                variant={mode === 'all' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('all')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > All </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#007c9c'
                variant={mode === 'play' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('play')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Play </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#5aafa9'
                variant={mode === 'env' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('env')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Environment </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#e3685b'
                variant={mode === 'art' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('art')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Art </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                color='#f89c5a'
                variant={mode === 'food' ? 'light' : ''}
                radius={HEIGHT / 80}
                fz="md"
                onClick={() => setMode('food')}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 16 }}
                fullWidth
              > Food </Button>
            </Grid.Col>
          </Grid>

          <Space h={HEIGHT * 0.7 / 8.55} />

          <Grid gutter="xs">
          <Grid.Col span={12}>
            <Button
                variant="light"
                radius={HEIGHT / 80}
                color="orange"
                fz="xl"
                onClick={restart}
                style={{ minHeight: HEIGHT / 20, minWidth: WIDTH / 20 }}
              > &#8635; </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="light"
                radius={HEIGHT / 80}
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
                radius={HEIGHT / 80}
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