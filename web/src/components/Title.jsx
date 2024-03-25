import React from 'react'
import { Button, Overlay, AspectRatio } from '@mantine/core';

import videoBg from '../assets/videoBg.mp4'

const Title = () => {
  return (
    <div className='main'>


<AspectRatio ratio={16 / 9} maw={1200} mx="auto">

<video src={videoBg} autoPlay loop muted />

        {/* <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="Demo"
        /> */}
        {<Overlay color="#000" backgroundOpacity={0.2} />}

        <div className="content">
            <h1>Why We Gather</h1>
       </div>
      </AspectRatio>



        <div className="overlay"></div>

        
    </div>
  )
}

export default Title