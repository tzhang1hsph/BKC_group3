import React from 'react'
import { Button, Overlay, Space, rem, Text, Grid } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import '/public/Engage/Engage.css';

const TitleCard = (props) => {
  const HEIGHT = props.height;
  const WIDTH = props.width;

  let navigate = useNavigate();
  const routeChangeNext = () => {navigate(`/map`);}

  return (
    <div>
      <div className='background-image' style={{
        backgroundImage: 'url(/assets/Cover.png)',
        backgroundColor: '#007c9c'
      }}></div>
      <Overlay backgroundOpacity={0}>
        <Grid>
          <Grid.Col span={9 - 72 / WIDTH}>
            <Text ta='left'
              mt={rem(168 / 1080 * HEIGHT)}
              ml={rem(113 / 1080 * HEIGHT)}
              c='#fffcf2'
              style={{ fontFamily: 'Engage Regular, sans-serif' }}
              fz={rem(97 / 1080 * HEIGHT)}
            >Why We Gather</Text>

            <Text ta='left'
              ml={rem(113 / 1080 * HEIGHT)}
              c='#fffcf2'
              fz={rem(36 / 1080 * HEIGHT)}
            >How can gathering spaces change a community?</Text>
          </Grid.Col>

          <Grid.Col span={3 - 24 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div className='flex-container' style={{ height: HEIGHT - 8 }}>
              <Space h={HEIGHT / 8} />
              <Button color="orange" fz="xl"
                onClick={routeChangeNext}
                radius={HEIGHT / 80}
                style={{ fontFamily: 'Engage Regular, sans-serif', minHeight: HEIGHT / 8 }} fullWidth> CLICK TO BEGIN </Button>
            </div>
          </Grid.Col>

        </Grid>
      </Overlay>
    </div >
  )
}

export default TitleCard