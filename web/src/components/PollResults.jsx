import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';
 import { PieChart, Pie, ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label } from 'recharts';

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

  const HEIGHT = props.height;
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

  let renderLabel = function(entry) {
    return entry.name;
}

  
  return (

    
    
    <div>
    <Space h={HEIGHT / 10} />

    <Grid >
      <Grid.Col span={9}>

        <Text fz="lg">insert poll results</Text>

      <Center>
      <PieChart 
      width={HEIGHT * 1 / 2} 
      height={HEIGHT * 2 / 3}
      >


  <Pie data={votes} dataKey="count" nameKey="option" cx="50%" cy="50%" 
  isAnimationActive={true} innerRadius={HEIGHT / 20} outerRadius={HEIGHT / 5} fill="#82ca9d" label={renderLabel} />
 </PieChart>

        <Space h={HEIGHT / 20} />


        </Center>




      </Grid.Col>

      

      <Grid.Col span={2.8}>
      <Space h={HEIGHT / 20} />


        <Text fz="lg">Instructions</Text>


        <Skeleton height={HEIGHT/2} visible={false}>


        <Text fz="md">



        </Text>


        </Skeleton>

        <Grid>

        <Grid.Col span={6}>


      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChangeBack}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#60;  </Button>

        </Grid.Col>

        <Grid.Col span={6}>

      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChangeNext}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
        </Grid.Col>


      </Grid>


      </Grid.Col>

      

    </Grid>

    </div>
 
  );
};

export default PollResults;


// import React, { useState } from 'react';
// import { Grid, Button, Image } from '@mantine/core';
// import { PieChart, Pie, ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label } from 'recharts';


// const renderLabel = (props) => {
//     return (
//       <g>
//         <image href={require("https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png").default} width={60} height={60} x={40} y={40} />
//       </g>
//     );
// };

// const data01 = [
//     {
//       "name": "Group A",
//       "value": 400,
//       "fill": "#8884d8"
//     },
//     {
//       "name": "Group B",
//       "value": 300,
//       "fill": "#FFFFFF"

//     },
//     {
//       "name": "Group C",
//       "value": 300
//     },
//     {
//       "name": "Group D",
//       "value": 200
//     },
//     {
//       "name": "Group E",
//       "value": 278
//     },
//     {
//       "name": "Group F",
//       "value": 189
//     }
//   ];
//   const data02 = [
//     {
//       "name": "Group A",
//       "value": 2400
//     },
//     {
//       "name": "Group B",
//       "value": 4567
//     },
//     {
//       "name": "Group C",
//       "value": 1398
//     },
//     {
//       "name": "Group D",
//       "value": 9800
//     },
//     {
//       "name": "Group E",
//       "value": 3908
//     },
//     {
//       "name": "Group F",
//       "value": 4800
//     }
//   ];

// const PollResults = () => {
  
//   return (
//     <Grid>
//     <Grid.Col span={2} style={{ minHeight: 230 }} />

//       <Grid.Col span={8} style={{ minHeight: 230 }}>

//       <ResponsiveContainer width='100%' height={400}>


//       <PieChart width={780} height={780}>

//       <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
//     Donut
//    </text>
//    <Label content={renderLabel} position="center" />


//   <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
// </PieChart>


// </ResponsiveContainer>

        

//       </Grid.Col>

//       <Grid.Col span={2} style={{ minHeight: 100 }} />




//     </Grid>
 
//   );
// };

// export default PollResults;