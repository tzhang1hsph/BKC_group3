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

  return (

    <div>
      <Space h={HEIGHT / 5} />

      <Grid >
        <Grid.Col span={9} style={{ minHeight: 8.4 * HEIGHT / 10 }}>

          <Grid gutter={HEIGHT / 20}>
            <Grid.Col span={1} ></Grid.Col>

            <Grid.Col span={5}>
              <div ref={ref1}>
                <AspectRatio h={HEIGHT / 3.2}>
                  <Image
                    radius={HEIGHT / 50}
                    src="/assets/Play.jpeg"
                    fullWidth
                    h={HEIGHT / 3.2}
                  />

                  <Overlay
                    h={HEIGHT / 3.2}
                    radius={HEIGHT / 50}
                    color="#007c9c" backgroundOpacity={0.8}>
                    {hovered1 ?
                      <div>
                        <Text m='2rem' c="#fffcf2" fz={rem(25 / 1080 * HEIGHT)}>
                          Open spaces are great places to play! You can find playgrounds, sports fields, and fun activities that let you run, jump, and have a good time. Playing outside with friends and family is not only fun but also helps you stay healthy and make new friends.
                        </Text>
                      </div>
                      :
                      <div>
                        <Text c="#fffcf2" fz={rem(50 / 1080 * HEIGHT)} style={{ fontFamily: 'Engage Regular, sans-serif' }}>Play</Text>
                      </div>
                    }
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={5}>
              <div ref={ref2}>
                <AspectRatio h={HEIGHT / 3.2}>
                  <Image
                    radius={HEIGHT / 50}
                    src="/assets/Environment.jpeg"
                    fullWidth
                    h={HEIGHT / 3.2}
                  />

                  <Overlay
                    h={HEIGHT / 3.2}
                    radius={HEIGHT / 50}
                    color="#5aafa9" backgroundOpacity={0.8}>
                    {hovered2 ?
                      <div>
                        <Text m='2rem' c="#fffcf2" fz={rem(25 / 1080 * HEIGHT)}>
                          The way open spaces are designed is important for making them enjoyable places to spend time. Having natural features like trees, water, and comfortable seating areas makes these spaces welcoming and inviting for everyone to enjoy.
                        </Text>
                      </div>
                      :
                      <div>
                        <Text c="#fffcf2" fz={rem(50 / 1080 * HEIGHT)} style={{ fontFamily: 'Engage Regular, sans-serif' }}>Environment</Text>
                      </div>
                    }
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>


            <Grid.Col span={1} ></Grid.Col>

            <Grid.Col span={5}>
              <div ref={ref3}>
                <AspectRatio h={HEIGHT / 3.2}>
                  <Image
                    radius={HEIGHT / 50}
                    src="/assets/Art.jpeg"
                    fullWidth
                    h={HEIGHT / 3.2}
                  />

                  <Overlay
                    h={HEIGHT / 3.2}
                    radius={HEIGHT / 50}
                    color="#e3685b" backgroundOpacity={0.8}>
                    {hovered3 ?
                      <div>
                        <Text m='2rem' c="#fffcf2" fz={rem(25 / 1080 * HEIGHT)}>
                          Open spaces can be like big outdoor canvases where artists can create amazing artwork like sculptures, murals, or interactive installations. Having art in public spaces makes the community feel more alive and helps people connect with each other.
                        </Text>
                      </div>
                      :
                      <div>
                        <Text c="#fffcf2" fz={rem(50 / 1080 * HEIGHT)} style={{ fontFamily: 'Engage Regular, sans-serif' }}>Art</Text>
                      </div>
                    }
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={5}>
              <div ref={ref4}>
                <AspectRatio h={HEIGHT / 3.2}>
                  <Image
                    radius={HEIGHT / 50}
                    src="/assets/Food.jpeg"
                    fullWidth
                    h={HEIGHT / 3.2}
                  />

                  <Overlay
                    h={HEIGHT / 3.2}
                    radius={HEIGHT / 50}
                    color="#f89c5a" backgroundOpacity={0.8}>
                    {hovered4 ?
                      <div>
                        <Text m='2rem' c="#fffcf2" fz={rem(25 / 1080 * HEIGHT)}>
                          Food brings people together, and open spaces with outdoor dining areas, food trucks, or farmer's markets are perfect spots for communities to gather. You can try delicious local foods, meet new people, and celebrate your community's food traditions.
                        </Text>
                      </div>
                      :
                      <div>
                        <Text c="#fffcf2" fz={rem(50 / 1080 * HEIGHT)} style={{ fontFamily: 'Engage Regular, sans-serif' }}>Food</Text>
                      </div>
                    }
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>

          <Space h={HEIGHT / 26} />

          <Grid>
            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={10}>
              <BikerProgress progress={0.2} height={HEIGHT} width={WIDTH} />
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>


        </Grid.Col>



        <Grid.Col span={2.8} style={{ minHeight: 8.4 * HEIGHT / 10 }}>

          <Text ta="left" fz="xl"><b>Instructions</b></Text>

          <Skeleton height={HEIGHT / 2} visible={false}>
            <Text ta="left" fz="lg">
              Hover your mouse over each of the theme tiles to learn more about them! Take the time to explore what makes an open space so important to a community.
            </Text>
          </Skeleton>

          <Space h={HEIGHT / 6.77} />

          <Grid gutter="xs">
            <Grid.Col span={6}>
              <Button variant="light" color="orange" fz="xl"
                onClick={routeChangeBack}
                radius={HEIGHT / 80}
                style={{ minHeight: HEIGHT / 8 }} fullWidth> &#60; </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button variant="light" color="orange" fz="xl"
                onClick={routeChangeNext}
                radius={HEIGHT / 80}
                style={{ minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
            </Grid.Col>
          </Grid>


        </Grid.Col>



      </Grid>

    </div>

  );
};

export default Intro;