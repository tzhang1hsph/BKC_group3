import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Button, Overlay, Space, rem, Text, Grid, Modal, List } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import '/public/Engage/Engage.css';

const TitleCard = (props) => {
  const HEIGHT = props.height;
  const WIDTH = props.width;

  const CCDIM = Math.min(24 / 1080 * HEIGHT, 24 / 1920 * WIDTH);

  const [opened, { open, close }] = useDisclosure(false);
  let navigate = useNavigate();
  const routeChangeNext = () => { navigate(`/map`); }

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

            <Modal className="modal" opened={opened} onClose={close} radius={props.height / 80} centered>
              <Text fz='lg'>
                <b>Why We Gather</b> was created as part of the Spring 2024 Berkman Klein Center Research Sprint, <a
                  href="https://cyber.harvard.edu/story/2024-01/visualizing-bostons-urban-spaces-using-open-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'orange' }}
                >Visualizing Boston's Urban Spaces Using Open Data
                </a>. It was displayed as part of the exhibition <a
                  href="https://www.mos.org/events/boston-data-landscapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'orange' }}
                >Boston Data Landscapes: Visualizing the Urban Experience
                </a> at the Museum of Science.
              </Text>
              <Space h={20} />
              <List fz='md'>
                Project creators:
                <List.Item>Conan Lu, Harvard College</List.Item>
                <List.Item>Saddat Nazir, Harvard College</List.Item>
                <List.Item>Amy Vu, Brown University and Rhode Island School of Design</List.Item>
                <List.Item>Henry Wu, Harvard College</List.Item>
              </List>
              <Space h={20} />
              <Text xmlns:cc="http://creativecommons.org/ns#" fz='md' >
                This work is licensed under <a
                  href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
                  target="_blank"
                  rel="license noopener noreferrer"
                  style={{ color: 'orange' }}>
                  CC BY 4.0 <img
                    style={{ height: CCDIM, marginLeft: CCDIM / 8, marginBottom: CCDIM / 18, verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                    alt="">
                  </img>
                  <img
                    style={{ height: CCDIM, marginLeft: CCDIM / 8, marginBottom: CCDIM / 18, verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                    alt="">
                  </img>
                </a>
              </Text>
            </Modal>
          </Grid.Col>

          <Grid.Col span={3 - 24 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div className='flex-container' style={{ height: HEIGHT - 8 }}>
              <div>
                <Space h={8} />
                <Grid>
                  <Grid.Col offset={8} span={4}>
                    <Button fullWidth variant='white' color='orange' onClick={open} radius='md' fz='lg'>About</Button>
                  </Grid.Col>
                </Grid>
              </div>
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