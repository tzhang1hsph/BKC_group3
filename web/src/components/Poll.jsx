import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';

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

  const HEIGHT = props.height;
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
      <Space h={HEIGHT / 10} />

      <Grid >
        <Grid.Col span={9}>

          <Text fz="lg">insert poll text</Text>
          {/* <ul>
        {votes.map((country) => (
          <li key={country.id}>{country.option} and {country.count}</li>
        ))}
      </ul> */}

          <Space h={HEIGHT / 20} />


          <Grid gutter={HEIGHT / 20}>
            <Grid.Col span={1} ></Grid.Col>

            <Grid.Col span={5}>
              <Button
                color='#007c9c'
                onClick={() => setMode('play')}
                variant={mode === 'play' ? 'light' : ''}
                radius={HEIGHT / 50}
                fullWidth
                h={HEIGHT / 3.2}
                fz={rem(50 / 1080 * HEIGHT)}
                style={{ fontFamily: 'Engage Regular, sans-serif' }}
              > Play </Button>
            </Grid.Col>

            <Grid.Col span={5}>
              <Button
                color='#5aafa9'
                onClick={() => setMode('env')}
                variant={mode === 'env' ? 'light' : ''}
                radius={HEIGHT / 50}
                fullWidth
                h={HEIGHT / 3.2}
                fz={rem(50 / 1080 * HEIGHT)}
                style={{ fontFamily: 'Engage Regular, sans-serif' }}
              > Environment </Button>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>


            <Grid.Col span={1} ></Grid.Col>
            
            <Grid.Col span={5}>
              <Button
                color='#e3685b'
                onClick={() => setMode('art')}
                variant={mode === 'art' ? 'light' : ''}
                radius={HEIGHT / 50}
                fullWidth
                h={HEIGHT / 3.2}
                fz={rem(50 / 1080 * HEIGHT)}
                style={{ fontFamily: 'Engage Regular, sans-serif' }}
              > Art </Button>
            </Grid.Col>

            <Grid.Col span={5}>
              <Button
                color='#f89c5a'
                onClick={() => setMode('food')}
                variant={mode === 'food' ? 'light' : ''}
                radius={HEIGHT / 50}
                fullWidth
                h={HEIGHT / 3.2}
                fz={rem(50 / 1080 * HEIGHT)}
                style={{ fontFamily: 'Engage Regular, sans-serif' }}
              > Food </Button>
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>





        </Grid.Col>



        <Grid.Col span={2.8}>
          <Space h={HEIGHT / 20} />


          <Text fz="lg">Instructions</Text>


          <Skeleton height={HEIGHT / 2} visible={false}>


            <Text fz="md">



            </Text>


          </Skeleton>

          <Grid>

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