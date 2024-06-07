import React from 'react'
import { Button, Overlay, rem, Text, Grid, Box } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import Plot from 'react-plotly.js';
import spacesPlot from '../../../maps/choropleth.json'
import '/public/Engage/Engage.css';

const Map = (props) => {
    const HEIGHT = props.height;
    const WIDTH = props.width;

    let navigate = useNavigate();
    const routeChangeNext = () => { navigate(`/intro`); }
    const routeChangeBack = () => { navigate('/'); }
    const restart = () => { navigate('/'); }

    spacesPlot.layout.height = HEIGHT;
    spacesPlot.layout.width = WIDTH;
    spacesPlot.layout.legend.font.size = HEIGHT / 36;
    spacesPlot.layout.mapbox.zoom = HEIGHT / 480 + 535 / 60;

    return (
        <div>
            <Plot data={spacesPlot.data} layout={spacesPlot.layout} style={{ position: 'absolute', marginTop: 8 }} />
            <Overlay
                h={2.7 * Math.min(36 / 1080 * HEIGHT, 36 / 1920 * WIDTH)}
                w={15 * Math.min(36 / 1080 * HEIGHT, 36 / 1920 * WIDTH)}
                color='#fff'
                backgroundOpacity={0.7}
            >
                <Text fz={rem(Math.min(36 / 1080 * HEIGHT, 36 / 1920 * WIDTH))}>Boston has <b>453</b> open spaces.</Text>
                <Text fz='lg'>Drag and zoom on this map to explore them!</Text>
            </Overlay>

            <Grid>
                <Grid.Col offset={9 - 72 / WIDTH} span={3 - 24 / WIDTH}>
                    <div className='flex-container' style={{ height: HEIGHT - 8, justifyContent: 'flex-end' }}>
                        <Grid gutter="xs">
                            <Box
                                fz={rem(Math.min(36 / 1080 * HEIGHT, 36 / 1920 * WIDTH))}
                                style={{ zIndex: 0 }}
                                bg='rgba(255, 255, 255, 0.5)'
                            >Why do we gather in certain spaces but not others?</Box>
                            <Grid.Col span={12}>
                                <Button
                                    radius={HEIGHT / 80}
                                    color="#ffecdc"
                                    onClick={restart}
                                    style={{ minHeight: HEIGHT / 20, minWidth: WIDTH / 20 }}
                                >
                                    <Text fz="xl" c="orange"><b>&#8635;</b></Text>
                                </Button>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Button
                                    radius={HEIGHT / 80}
                                    color="#ffecdc"
                                    onClick={routeChangeBack}
                                    style={{ minHeight: HEIGHT / 8 }}
                                    fullWidth
                                >
                                    <Text fz="xl" c="orange"><b>&#60;</b></Text>
                                </Button>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Button
                                    radius={HEIGHT / 80}
                                    color="orange"
                                    onClick={routeChangeNext}
                                    style={{ minHeight: HEIGHT / 8 }} fullWidth
                                >
                                    <Text fz="xl" c="white"><b>&#62;</b></Text>
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </div>
                </Grid.Col>
            </Grid>
        </div >
    )
}

export default Map