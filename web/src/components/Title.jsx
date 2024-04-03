import React from 'react'
import { Button, Overlay, AspectRatio, Image, Space, Grid, Skeleton } from '@mantine/core';

import videoBg from '../assets/videoBg.mp4'



const Title = (props) => {

  const HEIGHT = props.height - 40;
  const WIDTH = props.width;


  return (


    <Grid my="sm">

    <Grid.Col span={9} style={{ minHeight: HEIGHT }}>

      <Image
      radius={HEIGHT / 20}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      h={HEIGHT}
      w={WIDTH * 9 / 12}
    />    
    </Grid.Col>
      <Grid.Col span={3} style={{ minHeight: HEIGHT }}>

      <Space h={HEIGHT / 3} />
      <h1>jdnvkdvnvkndkvndkvndkvdkvkn</h1>
      {/* <Skeleton height={HEIGHT} radius="md" animate={false} ></Skeleton> */}

      </Grid.Col>

      

    </Grid>
//     <div className='main'>


// <AspectRatio ratio={16 / 9} maw={1200} mx="auto">

// <video src={videoBg} autoPlay loop muted />

//         {/* <img
//           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
//           alt="Demo"
//         /> */}
//         {<Overlay color="#000" backgroundOpacity={0.2} />}

//         <div className="content">
//             <h1>Why We Gather</h1>
//        </div>
//       </AspectRatio>



//         <div className="overlay"></div>

        
//     </div>
  )
}

export default Title