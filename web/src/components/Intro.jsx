import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, rem, Text, Grid } from '@mantine/core';
import { useHover } from 'usehooks-ts';

const Intro = (props) => {
  const [visited, setVisited] = useState({
    play: false,
    env: false,
    food: false,
    art: false
  });

  const ref1 = useRef(null)
  const hovered1 = useHover(ref1)
  const ref2 = useRef(null)
  const hovered2 = useHover(ref2)
  const ref3 = useRef(null)
  const hovered3 = useHover(ref3)
  const ref4 = useRef(null)
  const hovered4 = useHover(ref4)

  const HEIGHT = props.height;
  const WIDTH = props.width;

  const outerDim = Math.max(570 / 2798 * HEIGHT, 570 / 4182 * WIDTH);
  const innerDim = Math.max(540 / 2798 * HEIGHT, 540 / 4182 * WIDTH);

  const translateX = x => {
    const arr = [x * WIDTH / 4182, (x - 4182 / 2) * HEIGHT / 2798 + WIDTH / 2];
    return x > 4182 / 2 ? Math.max(...arr) : Math.min(...arr);
  };
  const translateY = y => Math.min(y * HEIGHT / 2798, HEIGHT - ((2798 - y) * WIDTH / 4182));

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
    <div>
      <div class='background-image' style={{
        backgroundImage: 'url(/assets/IntroBackground.png)',
        backgroundColor: '#dddddd',
        backgroundPosition: 'bottom center'
      }}></div>
      <Overlay backgroundOpacity={0}>
        <div style={{
          position: 'absolute',
          height: outerDim,
          width: outerDim,
          clipPath: `circle(50%)`,
          transform: `translate(${translateX(1102.2)}px, ${translateY(1797.6)}px)`,
          background: `radial-gradient(rgba(0, 124, 156, 0) 66.96%, rgba(0, 124, 156, ${hovered1 ? 0.9 : 1}) 66.9%)`
        }}>
        </div>
        <div ref={ref1}
          onMouseEnter={() => setVisited({ ...visited, play: true })}
          style={{
            position: 'absolute',
            height: innerDim,
            width: innerDim,
            opacity: `${hovered1 ? 0.9 : 0}`,
            clipPath: `circle(50%)`,
            transform: `translate(${translateX(1102.2) + (outerDim - innerDim) / 2}px, ${translateY(1797.6) + (outerDim - innerDim) / 2}px)`,
            backgroundColor: '#007c9c',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Play</Center>
        </div>

        <div style={{
          position: 'absolute',
          height: outerDim,
          width: outerDim,
          clipPath: `circle(50%)`,
          transform: `translate(${translateX(2761.9)}px, ${translateY(1700.6)}px)`,
          background: `radial-gradient(rgba(90, 175, 169, 0) 66.96%, rgba(90, 175, 169, ${hovered2 ? 0.9 : 1}) 66.9%)`
        }}></div>
        <div
          onMouseEnter={() => setVisited({ ...visited, env: true })}
          ref={ref2}
          style={{
            position: 'absolute',
            height: innerDim,
            width: innerDim,
            opacity: `${hovered2 ? 0.9 : 0}`,
            clipPath: `circle(50%)`,
            transform: `translate(${translateX(2761.9) + (outerDim - innerDim) / 2}px, ${translateY(1700.6) + (outerDim - innerDim) / 2}px)`,
            backgroundColor: '#5aafa9',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Environment</Center>
        </div>

        <div style={{
          position: 'absolute',
          height: outerDim,
          width: outerDim,
          clipPath: `circle(50%)`,
          transform: `translate(${translateX(1440.5)}px, ${translateY(1049.3)}px)`,
          background: `radial-gradient(rgba(254, 156, 90, 0) 66.96%, rgba(254, 156, 90, ${hovered3 ? 0.9 : 1}) 66.9%)`
        }}></div>
        <div
          onMouseEnter={() => setVisited({ ...visited, food: true })}
          ref={ref3}
          style={{
            position: 'absolute',
            height: innerDim,
            width: innerDim,
            opacity: `${hovered3 ? 0.9 : 0}`,
            clipPath: `circle(50%)`,
            transform: `translate(${translateX(1440.5) + (outerDim - innerDim) / 2}px, ${translateY(1049.3) + (outerDim - innerDim) / 2}px)`,
            backgroundColor: '#fe9c5a',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Food</Center>
        </div>

        <div style={{
          position: 'absolute',
          height: outerDim,
          width: outerDim,
          clipPath: `circle(50%)`,
          transform: `translate(${translateX(1858.6)}px, ${translateY(2063.3)}px)`,
          background: `radial-gradient(rgba(227, 104, 91, 0) 66.96%, rgba(227, 104, 91, ${hovered4 ? 0.9 : 1}) 66.9%)`
        }}></div>
        <div
          onMouseEnter={() => setVisited({ ...visited, art: true })}
          ref={ref4}
          style={{
            position: 'absolute',
            height: innerDim,
            width: innerDim,
            opacity: `${hovered4 ? 0.9 : 0}`,
            clipPath: `circle(50%)`,
            transform: `translate(${translateX(1858.6) + (outerDim - innerDim) / 2}px, ${translateY(2063.3) + (outerDim - innerDim) / 2}px)`,
            backgroundColor: '#e3685b',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Center style={{ fontFamily: 'Engage Regular, sans-serif' }} c='#fffcf2' fz={rem(33 / 1080 * HEIGHT)}>Art</Center>
        </div>

        <div style={{
          position: 'absolute',
          width: `${HEIGHT / 3}px`,
          height: '100%',
          left: '2.5%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <img src='/assets/girl.jpeg' style={{
            width: 'auto',
            height: `${HEIGHT / 2}px`,
            clipPath: `circle(${Math.min(HEIGHT / 8, WIDTH * 9 / 128)}px at 49% 26%)`,
            transform: `translate(${HEIGHT * 3 / 400}px, ${HEIGHT / 20}px)`
          }}></img>

          <div style={{
            backgroundColor: '#fffcf2',
            borderRadius: `${HEIGHT / 40}px`,
            height: `${HEIGHT / 1.7}px`,
            transform: `translate(0px, -${HEIGHT / 6}px)`
          }}>
            <Text ta='left' fz='lg' m='10%'>
              {hovered1 ? <>
                <Text fz='xl'><b>PLAY</b></Text>
                Open spaces are great places to play! You can find playgrounds, sports fields,
                and fun activities that let you run, jump, and have a good time. Playing outside
                with friends and family is not only fun but also helps you stay healthy and make new friends.
              </> : hovered2 ? <>
                <Text fz='xl'><b>ENVIRONMENT</b></Text>
                The way open spaces are designed is important for making them enjoyable places to spend time.
                Having natural features like trees, water, and comfortable seating areas makes these spaces
                welcoming and inviting for everyone to enjoy.
              </> : hovered3 ? <>
                <Text fz='xl'><b>FOOD</b></Text>
                Food brings people together, and open spaces with outdoor dining areas, food trucks, or
                farmer's markets are perfect spots for communities to gather. You can try delicious local
                foods, meet new people, and celebrate your community's food traditions.
              </> : hovered4 ? <>
                <Text fz='xl'><b>ART</b></Text>
                Open spaces can be like big outdoor canvases where artists can create amazing
                artwork like sculptures, murals, or interactive installations. Having art in public
                spaces makes the community feel more alive and helps people connect with each other.
              </> :
                <>
                  Welcome to my city—Boston!
                  Today, I'll be your guide as we explore the beating heart of our communities:
                  the open spaces where we gather.
                  <br></br><br></br>
                  <b>Hover over a circle to learn more!</b>
                </>}
            </Text>
          </div>
        </div>

        <Grid>
          <Grid.Col offset={9 - 72 / WIDTH} span={3 - 24 / WIDTH}>
            <div class='flex-container' style={{ height: HEIGHT - 8, justifyContent: 'flex-end' }}>
              <Grid gutter="xs">
                <Grid.Col span={12}>
                  <Button
                    radius={HEIGHT / 80}
                    color="#ffecdc"
                    onClick={restart}
                    style={{ minHeight: HEIGHT / 20, minWidth: WIDTH / 20 }}
                  >
                    <Text fz="xl" c="orange"><b>&#8635;</b></Text>
                  </Button>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Button
                    radius={HEIGHT / 80}
                    color="#ffecdc"
                    onClick={routeChangeBack}
                    style={{ minHeight: HEIGHT / 8 }}
                    fullWidth
                  >
                    <Text fz="xl" c="orange"><b>&#60;</b></Text>
                  </Button>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Button
                    radius={HEIGHT / 80}
                    color={Object.values(visited).every(Boolean) ? "orange" : "#ffecdc"}
                    onClick={routeChangeNext}
                    style={{ minHeight: HEIGHT / 8 }} fullWidth
                  >
                    <Text fz="xl" c={Object.values(visited).every(Boolean) ? "white" : "orange"}><b>&#62;</b></Text>
                  </Button>
                </Grid.Col>
              </Grid>
            </div>
          </Grid.Col>
        </Grid>
      </Overlay>
    </div>

  );
};

export default Intro;