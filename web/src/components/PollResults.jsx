import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';
import { PieChart, Pie } from 'recharts';

import BikerProgress from './BikerProgress';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(import.meta.env.VITE_APP_URL, import.meta.env.VITE_APP_ANON_KEY);


const PollResults = (props) => {


  const [votes, setVotes] = useState([]);
  

  useEffect(() => {
    getVotes();
  }, []);

  async function getVotes() {
    const { data } = await supabase.from("responses").select();
    console.log(data);
    setVotes(data);
  }

  const HEIGHT = props.height * 0.94;
  const WIDTH = props.width;

  let navigate = useNavigate(); 
  const routeChangeNext = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const routeChangeBack = () =>{ 
    let path = `/poll`; 
    navigate(path);
  }

  const restart = () => {
    let path = `/`;
    navigate(path);
  }

  let renderLabel = function(entry) {
    return entry.name;
}

  
  return (

    <div>
      <Space h={HEIGHT / 5} />

      <Grid>
        <Grid.Col span={9} style={{ minHeight: 8.4 * HEIGHT / 10 }}>
          <Center>
            <PieChart width={HEIGHT * 3 / 4} height={HEIGHT * 2 / 3}>
              <Pie
                data={votes}
                dataKey="count"
                nameKey="option"
                cx="50%"
                cy="50%"
                isAnimationActive={true}
                outerRadius={3 * HEIGHT / 10}
                fill="#82ca9d"
                label={renderLabel}
              />
            </PieChart>
          </Center>

          <Space h={HEIGHT / 21.5} />

          <Grid>
            <Grid.Col span={1}></Grid.Col>

            <Grid.Col span={10}>
              <BikerProgress progress={1} height={HEIGHT} width={WIDTH} />
            </Grid.Col>

            <Grid.Col span={1}></Grid.Col>
          </Grid>

        </Grid.Col>

        

        <Grid.Col span={2.8} style={{ minHeight: 8.4 * HEIGHT / 10 }}>
          <Text ta="left" fz="xl"><b>Poll Results</b></Text>

          <Skeleton ta="left" fz="lg" height={HEIGHT/2} visible={false}>
          Wow! It’s amazing to see the qualities that make open spaces so appealing to different people. As you cycled through the themes and the amazing gatherings across Boston, think about what stood out to you. What you didn’t think of before.
          <br></br>
          The next time you go to an open space, we invite you to explore. Consider what makes your public space beautiful.
          </Skeleton>

          <Space h={HEIGHT * 0.75 / 6.77} />

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
              <Button variant="light" color="orange" fz="xl" 
                onClick={routeChangeBack}
                radius={HEIGHT / 80}
                style={{  minHeight: HEIGHT / 8 }} fullWidth> &#60;  </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button variant="light" color="orange" fz="xl" 
                onClick={routeChangeNext}
                radius={HEIGHT / 80}
                style={{  minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
            </Grid.Col>
        </Grid>


        </Grid.Col>

        

      </Grid>
    </div>
 
  );
};

export default PollResults;

