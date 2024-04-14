import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';
import BikerProgress from './BikerProgress';



const Intro = (props) => {

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
    let path = `/tutorial`;
    navigate(path);
  }
  const routeChangeBack = () => {
    let path = `/`;
    navigate(path);
  }

  const restart = () => {
    let path = `/`;
    navigate(path);
  }

  return (
    <>
      <img
        style={{ 'margin-left': '-4rem', 'margin-top': '-27.8rem', 'clip-path': 'inset(16% 0 0 0)' }}
        height='102.6%'
        width='102.6%'
        src="/assets/intro_background.jpeg"
      />

      <Overlay color='#dddddd' backgroundOpacity={0.5}>
        <img
          style={{
            'position': 'absolute',
            'opacity': 1,
            'margin-left': '-4rem',
            'margin-top': '-27.8rem',
            'transform': 'translate(-1888px, 30px)',
            'clip-path': 'circle(285px at 1232px 1929.5px)'
          }}
          height='119.6%'
          width='100.8%'
          src="/assets/intro_background.jpeg"
        />
        <div style={{
          position: 'absolute',
          height: `570px`,
          width: `570px`,
          clipPath: `circle(50%)`,
          transform: `translate(915px, 1230px)`,
          background: `radial-gradient(rgba(0, 124, 156, 0) 66.96%, rgba(0, 124, 156, ${hovered1 ? 0.8 : 1}) 66.9%)`
        }}>
        </div>
        <div ref={ref1} style={{
          position: 'absolute',
          height: `540px`,
          width: `540px`,
          opacity: `${hovered1 ? 0.8 : 0}`,
          clipPath: `circle(50%)`,
          transform: `translate(930px, 1245px)`,
          backgroundColor: '#007c9c',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Play</Center>
        </div>

        <img
          style={{
            'position': 'absolute',
            'opacity': 1,
            'margin-left': '-4rem',
            'margin-top': '-27.8rem',
            'transform': 'translate(-1888px, 30px)',
            'clip-path': 'circle(285px at 2802px 1820px)'
          }}
          height='119.6%'
          width='100.8%'
          src="/assets/intro_background.jpeg"
        />
        <div style={{
          position: 'absolute',
          height: `570px`,
          width: `570px`,
          clipPath: `circle(50%)`,
          transform: `translate(2485px, 1120px)`,
          background: `radial-gradient(rgba(90, 175, 169, 0) 66.96%, rgba(90, 175, 169, ${hovered2 ? 0.8 : 1}) 66.9%)`
        }}></div>
        <div ref={ref2} style={{
          position: 'absolute',
          height: `540px`,
          width: `540px`,
          opacity: `${hovered2 ? 0.8 : 0}`,
          clipPath: `circle(50%)`,
          transform: `translate(2500px, 1135px)`,
          backgroundColor: '#5aafa9',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Environment</Center>
        </div>

        <img
          style={{
            'position': 'absolute',
            'opacity': 1,
            'margin-left': '-4rem',
            'margin-top': '-27.8rem',
            'transform': 'translate(-1888px, 30px)',
            'clip-path': 'circle(285px at 1592px 1230px)'
          }}
          height='119.6%'
          width='100.8%'
          src="/assets/intro_background.jpeg"
        />
        <div style={{
          position: 'absolute',
          height: `570px`,
          width: `570px`,
          clipPath: `circle(50%)`,
          transform: `translate(1275px, 530px)`,
          background: `radial-gradient(rgba(254, 156, 90, 0) 66.96%, rgba(254, 156, 90, ${hovered3 ? 0.8 : 1}) 66.9%)`
        }}></div>
        <div ref={ref3} style={{
          position: 'absolute',
          height: `540px`,
          width: `540px`,
          opacity: `${hovered3 ? 0.8 : 0}`,
          clipPath: `circle(50%)`,
          transform: `translate(1290px, 545px)`,
          backgroundColor: '#fe9c5a',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Food</Center>
        </div>

        <img
          style={{
            'position': 'absolute',
            'opacity': 1,
            'margin-left': '-4rem',
            'margin-top': '-27.8rem',
            'transform': 'translate(-1888px, 30px)',
            'clip-path': 'circle(285px at 1980px 2199px)'
          }}
          height='119.6%'
          width='100.8%'
          src="/assets/intro_background.jpeg"
        />
        <div style={{
          position: 'absolute',
          height: `570px`,
          width: `570px`,
          clipPath: `circle(50%)`,
          transform: `translate(1665px, 1500px)`,
          background: `radial-gradient(rgba(227, 104, 91, 0) 66.96%, rgba(227, 104, 91, ${hovered4 ? 0.8 : 1}) 66.9%)`
        }}></div>
        <div ref={ref4} style={{
          position: 'absolute',
          height: `540px`,
          width: `540px`,
          opacity: `${hovered4 ? 0.8 : 0}`,
          clipPath: `circle(50%)`,
          transform: `translate(1680px, 1515px)`,
          backgroundColor: '#e3685b',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Art</Center>
        </div>

        <Grid>
          <Grid.Col offset={8.9512} span={2.749}>
            <Space h={0.906 * HEIGHT}></Space>
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
                <Button color="orange" fz="xl"
                  onClick={routeChangeBack}
                  radius={HEIGHT / 80}
                  style={{ minHeight: HEIGHT / 8 }} fullWidth> &#60; </Button>
              </Grid.Col>

              <Grid.Col span={6}>
                <Button color="orange" fz="xl"
                  onClick={routeChangeNext}
                  radius={HEIGHT / 80}
                  style={{ minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Overlay>
    </>

  );
};

export default Intro;