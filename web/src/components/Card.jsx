import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Grid, Modal, Title, Text, rem } from '@mantine/core';
import final_data_table from '../../../final_data_table.json';
import Plot from 'react-plotly.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PolarBarChart = (props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const data = final_data_table[props.name]

    props.map.layout.height = props.height / 2;
    props.map.layout.width = props.width * 0.45 - 24;
    props.map.layout.legend.font.size = Math.min(props.height / 72, props.width / 128);

    props.hourly.layout.height = props.height / 2;
    props.hourly.layout.width = props.width * 0.45 - 24;

    const env = data['Environment Score'];
    const food = data['Food Score'];
    const play = data['Play Score'];
    const art = data['Art Score'];
    const activity = data['Activity Score'];

    const dim = Math.max(540 / 2798 * props.height, 540 / 4182 * props.width);

    const playStyle = {
        height: (play * 0.0075 + 1) * 5 / 27 * dim,
        width: (play * 0.0075 + 1) * 5 / 27 * dim,
        clipPath: `circle(100% at 100% 100%)`,
        transform: `translate(${dim / 54 * (17 - play * 0.075)}px, ${dim / 54 * (17 - play * 0.075)}px)`,
        backgroundColor: '#007c9c'
    };

    const envStyle = {
        height: (env * 0.0075 + 1) * 5 / 27 * dim,
        width: (env * 0.0075 + 1) * 5 / 27 * dim,
        clipPath: `circle(100% at 0% 100%)`,
        transform: `translate(${dim / 2}px, ${dim / 54 * (17 - env * 0.075)}px)`,
        backgroundColor: '#5aafa9'
    };

    const foodStyle = {
        height: (food * 0.0075 + 1) * 5 / 27 * dim,
        width: (food * 0.0075 + 1) * 5 / 27 * dim,
        clipPath: `circle(100% at 0% 0%)`,
        transform: `translate(${dim / 2}px, ${dim / 2}px)`,
        backgroundColor: '#fe9c5a'
    };

    const artStyle = {
        height: (art * 0.0075 + 1) * 5 / 27 * dim,
        width: (art * 0.0075 + 1) * 5 / 27 * dim,
        clipPath: `circle(100% at 100% 0%)`,
        transform: `translate(${dim / 54 * (17 - art * 0.075)}px, ${dim / 2}px)`,
        backgroundColor: '#e3685b'
    };

    const playStyleFull = {
        height: 5 / 27 * dim * (play * 0.015 + 2),
        width: 5 / 27 * dim * (play * 0.015 + 2),
        clipPath: `circle(50%)`,
        transform: `translate(${dim / 54 * (17 - play * 0.075)}px, ${dim / 54 * (17 - play * 0.075)}px)`,
        backgroundColor: '#007c9c'
    };

    const envStyleFull = {
        height: 5 / 27 * dim * (env * 0.015 + 2),
        width: 5 / 27 * dim * (env * 0.015 + 2),
        clipPath: `circle(50%)`,
        transform: `translate(${dim / 54 * (17 - env * 0.075)}px, ${dim / 54 * (17 - env * 0.075)}px)`,
        backgroundColor: '#5aafa9'
    };

    const foodStyleFull = {
        height: 5 / 27 * dim * (food * 0.015 + 2),
        width: 5 / 27 * dim * (food * 0.015 + 2),
        clipPath: `circle(50%)`,
        transform: `translate(${dim / 54 * (17 - food * 0.075)}px, ${dim / 54 * (17 - food * 0.075)}px)`,
        backgroundColor: '#fe9c5a'
    };

    const artStyleFull = {
        height: 5 / 27 * dim * (art * 0.015 + 2),
        width: 5 / 27 * dim * (art * 0.015 + 2),
        clipPath: `circle(50%)`,
        transform: `translate(${dim / 54 * (17 - art * 0.075)}px, ${dim / 54 * (17 - art * 0.075)}px)`,
        backgroundColor: '#e3685b'
    };


    return (
        <>
            <Modal className="modal" size="100%" opened={opened} onClose={close} radius={props.height / 80} centered>
                <Title order={1} ta="center" size={rem(Math.min(60 / 1080 * props.height, 60 / 1920 * props.width))}>{props.name}</Title>
                <Text ta="center" fz='xl'><b>{data['Description']}</b></Text>
                <Grid>
                    <Grid.Col span={6}>
                        <img width='100%' height='auto' src={data['Image']} style={{ 'display': 'block', 'margin': 'auto' }}></img>

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Activity Score: {data['Activity Score']}</b></Text>
                        <Text>Number of Bluebike Stations Within 0.5 km: {data['Number of Nearby Bluebike Stations']}</Text>
                        <Text>Average Daily Roundtrips at Nearby Bluebike Stations: {data['Daily Roundtrips'].toFixed(2)}</Text>
                        <Text>Proportion of Roundtrips at Nearby Bluebike Stations: {(data['Weighted Roundtrip Ratio'] * 100).toFixed(1)}%</Text>
                        <br></br>
                        <Text ta="center"><b>Hourly Bluebike Trips at Nearby Bluebike Stations</b></Text>
                        <Plot data={props.hourly.data} layout={props.hourly.layout} />

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Environment Score: {data['Environment Score']}</b></Text>
                        <Text>Area: {data['Acres'].toFixed(2)} acres</Text>
                        <Text>Canopy Cover: {(data['Canopy Cover Proportion'] * 100).toFixed(1)}%</Text>
                    </Grid.Col>

                    <Grid.Col span={6}>
                    <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Space Map</b></Text>
                        <Plot data={props.map.data} layout={props.map.layout} />

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Safety Score: {data['Safety Score']}</b></Text>
                        <Text>Streetlight Cover: {(data['Streetlight Proportion'] * 100).toFixed(1)}%</Text>
                        <Text>Crime Density: {(data['Nearby Crimes Per Acre Per Year']).toFixed(2)} crimes per acre per year</Text>
                        <Text>Vehicle Accident Density: {(data['Nearby Vehicle Accidents Per Acre Per Year']).toFixed(2)} vehicle accidents per acre per year</Text>

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Food Score: {data['Food Score']}</b></Text>
                        <Text>Number of Restaurants Within 0.5 km: {data['Number of Nearby Restaurants'] === 100 ? '≥100' : data['Number of Nearby Restaurants']}</Text>
                        <Text>Near Food Trucks: {data['Near Food Trucks'] ? 'Yes' : 'No'}</Text>
                        <Text>Near Farmers Markets: {data['Near Farmers Markets'] ? 'Yes' : 'No'}</Text>

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Art Score: {data['Art Score']}</b></Text>
                        <Text>Number of Nearby Murals: {data['Number of Nearby Murals']}</Text>
                        <Text>Number of Nearby Sculptures: {data['Number of Nearby Sculptures']}</Text>

                        <Text ta="center" my="xl" fz={rem(Math.min(30 / 1080 * props.height, 30 / 1920 * props.width))}><b>Play Score: {data['Play Score']}</b></Text>
                        <Text>Play Features: {data['Play Features'].length ? data['Play Features'].join(', ') : 'None'}</Text>
                    </Grid.Col>
                </Grid>
            </Modal>

            <div style={{ width: dim, height: dim }}>
                <Text ta="center" fz='lg'><b>{props.name}</b></Text>
                {props.mode === 'all' ?
                    <>
                        <div className="segment" style={playStyle}></div>
                        <div className="segment" style={envStyle}></div>
                        <div className="segment" style={foodStyle}></div>
                        <div className="segment" style={artStyle}></div>
                    </>
                    : props.mode === 'play' ?
                        <div className="segment" style={playStyleFull}></div>
                        : props.mode === 'env' ? <div className="segment" style={envStyleFull}></div>
                            : props.mode === 'food' ? <div className="segment" style={foodStyleFull}></div>
                                : <div className="segment" style={artStyleFull}></div>}
                <div style={{
                    position: 'absolute',
                    height: 55 / 108 * dim,
                    width: 55 / 108 * dim,
                    transform: `translate(${53 / 216 * dim}px, ${53 / 216 * dim}px)`
                }}>
                    <CircularProgressbar
                        value={100}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: 'black',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <Text fz='xs' className="ticks" position='absolute' style={{
                        transform: `translate(${11 / 540 * dim}px, -${31 / 54 * dim}px) rotate(2deg)`
                    }}>50</Text>
                </div>
                <div style={{
                    position: 'absolute',
                    height: 35 / 54 * dim,
                    width: 35 / 54 * dim,
                    transform: `translate(${19 / 108 * dim}px, ${19 / 108 * dim}px)`
                }}>
                    <CircularProgressbar
                        value={100}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: 'black',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <Text fz='xs' className="ticks" position='absolute' style={{
                        transform: `translate(${13 / 540 * dim}px, -${77 / 108 * dim}px) rotate(4deg)`
                    }}>100</Text>
                </div>
                <div style={{
                    position: 'absolute',
                    height: 5 / 6 * dim,
                    width: 5 / 6 * dim,
                    transform: `translate(${dim / 12}px, ${dim / 12}px)`
                }}>
                    <CircularProgressbar
                        value={activity}
                        strokeWidth={0.5}
                        styles={buildStyles({
                            pathColor: '#07455d',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <img className="activity-biker-icon" src='/assets/BikerIcon.svg' style={{
                        height: 2 / 27 * dim,
                        width: 2 / 27 * dim,
                        transform: `translate(
                            ${0.45 * dim * Math.cos(Math.PI / 2 - activity * Math.PI / 50 + Math.PI / 60)}px,
                            ${-0.45 * dim * Math.sin(Math.PI / 2 - activity * Math.PI / 50 + Math.PI / 60) - 251 / 540 * dim}px
                        ) rotate(${activity * Math.PI / 50 - Math.PI / 60}rad)`
                    }}></img>
                </div>
                <div style={{
                    height: 10 / 27 * dim,
                    width: 10 / 27 * dim,
                    transform: `translate(${17 / 54 * dim}px, ${17 / 54 * dim}px)`
                }}>
                    <img className="center-image" style={{
                        clipPath: `circle(${5 / 27 * dim}px)`
                    }} src={data['Image']} onClick={open}></img>
                </div>
            </div>
        </>
    );
};

export default PolarBarChart;
