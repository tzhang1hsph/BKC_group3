import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';

import BikerProgress from './BikerProgress';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(import.meta.env.VITE_APP_URL, import.meta.env.VITE_APP_ANON_KEY);


const Poll = (props) => {


  const [votes, setVotes] = useState([]);

  useEffect(() => {
    getVotes();
  }, []);

  async function getVotes() {
    const { data } = await supabase.from("responses").select();
    // console.log(data);
    setVotes(data);
  }


  const [mode, setMode] = useState('');

  const HEIGHT = props.height * 0.94;
  const WIDTH = props.width;

  let navigate = useNavigate();

  async function mod(curr, id) {
    const { error } = await supabase
      .from('responses')
      .update({ count: curr + 1 })
      .eq('id', id);
  }

  const routeChangeNext = () => {


    if (mode === 'play') {
      let curr = votes[0].count;
      mod(curr, 1);
    }

    else if (mode === 'env') {
      let curr = votes[1].count;
      mod(curr, 2);
    }
    else if (mode === 'art') {
      let curr = votes[2].count;
      mod(curr, 3);
    }
    else if (mode === 'food') {
      let curr = votes[3].count;
      mod(curr, 4);
    }
    let path = `/pollresults`;
    navigate(path);
  }
  const routeChangeBack = () => {
    let path = `/spaces`;
    navigate(path);
  }

  return (

    <div>
      <Space h={HEIGHT / 5} />

      <Grid>
        <Grid.Col span={9} style={{ minHeight: 8.4 * HEIGHT / 10 }}>

          {/* <Text fz="lg">insert poll text</Text> */}
          {/* <ul>
          {votes.map((country) => (
            <li key={country.id}>{country.option} and {country.count}</li>
          ))}
          </ul> */}


          <Grid gutter={HEIGHT / 20}>
            <Grid.Col span={1} ></Grid.Col>

            <Grid.Col span={5}>
              <div>
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
                    color="#fffcf2" backgroundOpacity={mode === 'play' ? 0.8 : 0}>
                    <Button
                      color={`rgba(0,124,156,${mode === 'play' ? 1 : 0.8})`}
                      onClick={() => setMode('play')}
                      variant={mode === 'play' ? 'light' : ''}
                      radius={HEIGHT / 50}
                      fullWidth
                      h={HEIGHT / 3.2}
                      fz={rem(50 / 1080 * HEIGHT)}
                      style={{ fontFamily: 'Engage Regular, sans-serif' }}
                    > Play </Button>
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={5}>
              <div>
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
                    color="#fffcf2" backgroundOpacity={mode === 'env' ? 0.8 : 0}>
                    <Button
                      color={`rgba(90,175,169,${mode === 'env' ? 1 : 0.8})`}
                      onClick={() => setMode('env')}
                      variant={mode === 'env' ? 'light' : ''}
                      radius={HEIGHT / 50}
                      fullWidth
                      h={HEIGHT / 3.2}
                      fz={rem(50 / 1080 * HEIGHT)}
                      style={{ fontFamily: 'Engage Regular, sans-serif' }}
                    > Environment </Button>
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>


            <Grid.Col span={1} ></Grid.Col>

            <Grid.Col span={5}>
              <div>
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
                    color="#fffcf2" backgroundOpacity={mode === 'art' ? 0.8 : 0}>
                    <Button
                      color={`rgba(227,104,91,${mode === 'art' ? 1 : 0.8})`}
                      onClick={() => setMode('art')}
                      variant={mode === 'art' ? 'light' : ''}
                      radius={HEIGHT / 50}
                      fullWidth
                      h={HEIGHT / 3.2}
                      fz={rem(50 / 1080 * HEIGHT)}
                      style={{ fontFamily: 'Engage Regular, sans-serif' }}
                    > Art </Button>
                  </Overlay>
                </AspectRatio>
              </div>
            </Grid.Col>

            <Grid.Col span={5}>
              <div>
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
                    color="#fffcf2" backgroundOpacity={mode === 'food' ? 0.8 : 0}>
                    <Button
                      color={`rgba(248,156,90,${mode === 'food' ? 1 : 0.8})`}
                      onClick={() => setMode('food')}
                      variant={mode === 'food' ? 'light' : ''}
                      radius={HEIGHT / 50}
                      fullWidth
                      h={HEIGHT / 3.2}
                      fz={rem(50 / 1080 * HEIGHT)}
                      style={{ fontFamily: 'Engage Regular, sans-serif' }}
                    > Food </Button>
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
              <BikerProgress progress={0.8} height={HEIGHT} width={WIDTH} />
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>

        </Grid.Col>



        <Grid.Col span={2.8} style={{ minHeight: 8.4 * HEIGHT / 10 }}>
          <Text fz="lg"><b>Poll</b></Text>

          <Skeleton height={HEIGHT / 2} visible={false}>
          Now that you’ve learned more about your community, and what parts make it so special, take a step back and think. Which theme is most important to you? What do you think makes open spaces such an amazing place to socialize? Why do you gather?
          </Skeleton>

          <Space h={HEIGHT / 6.55} />

          <Grid gutter="xs">
            <Grid.Col span={6}>
              <Button variant="light" color="orange" fz="xl"
                onClick={routeChangeBack}
                radius={HEIGHT / 80}
                style={{ minHeight: HEIGHT / 8 }} fullWidth> &#60;  </Button>
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

export default Poll;