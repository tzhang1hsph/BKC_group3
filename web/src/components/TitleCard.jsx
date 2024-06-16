import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Button, Overlay, Space, rem, Text, Grid, Modal, List, Anchor, Flex } from '@mantine/core';
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
                <b>Why We Gather</b> was created as part of the Spring 2024 Berkman Klein Center Research Sprint, <Anchor
                  href="https://cyber.harvard.edu/story/2024-01/visualizing-bostons-urban-spaces-using-open-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  c='orange'
                  fz='lg'
                >Visualizing Boston's Urban Spaces Using Open Data
                </Anchor>. It was displayed as part of the exhibition <Anchor
                  href="https://www.mos.org/events/boston-data-landscapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  c='orange'
                  fz='lg'
                >Boston Data Landscapes: Visualizing the Urban Experience
                </Anchor> at the Museum of Science.
              </Text>
              <Space h={20} />
              <List fz='lg'>
                Project creators:
                <List.Item>Conan Lu, Harvard College</List.Item>
                <List.Item>Saddat Nazir, Harvard College</List.Item>
                <List.Item>Amy Vu, Brown University and Rhode Island School of Design</List.Item>
                <List.Item>Henry Wu, Harvard College</List.Item>
              </List>
              <Space h={20} />
              <Text xmlns:cc="http://creativecommons.org/ns#" fz='lg' >
                This work is licensed under <Anchor
                  href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
                  target="_blank"
                  rel="license noopener noreferrer"
                  c='orange'
                  fz='lg'>
                  CC BY 4.0<img
                    style={{ height: CCDIM, marginLeft: CCDIM / 4, marginBottom: CCDIM / 18, verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                    alt="">
                  </img>
                  <img
                    style={{ height: CCDIM, marginLeft: CCDIM / 4, marginBottom: CCDIM / 18, verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                    alt="">
                  </img>
                </Anchor>
              </Text>
            </Modal>
          </Grid.Col>

          <Grid.Col span={3 - 24 / WIDTH} style={{ minHeight: HEIGHT - 8 }}>
            <div className='flex-container' style={{ height: HEIGHT - 8 }}>
              <div className='flex-container' style={{ alignItems: 'flex-end'}}>
                <Space h={8} />
                <Button variant='white' color='orange' onClick={open} radius='md' fz='lg'>About</Button>
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