import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Grid, Modal, Title, Text, rem } from '@mantine/core';
import final_data_table from '../../../final_data_table.json';
import Plot from 'react-plotly.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PolarBarChart = (props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const data = final_data_table[props.name]

    const env = data['Environment Score'];
    const food = data['Food Score'];
    const play = data['Play Score'];
    const art = data['Art Score'];
    const activity = data['Activity Score'];

    const playStyle = {
        height: `${play * 0.75 + 100}px`,
        width: `${play * 0.75 + 100}px`,
        clipPath: `circle(100% at 100% 100%)`,
        transform: `translate(${170 - play * 0.75}px, ${170 - play * 0.75}px)`,
        backgroundColor: '#007c9c'
    };

    const envStyle = {
        height: `${env * 0.75 + 100}px`,
        width: `${env * 0.75 + 100}px`,
        clipPath: `circle(100% at 0% 100%)`,
        transform: `translate(270px, ${170 - env * 0.75}px)`,
        backgroundColor: '#5aafa9'
    };

    const foodStyle = {
        height: `${food * 0.75 + 100}px`,
        width: `${food * 0.75 + 100}px`,
        clipPath: `circle(100% at 0% 0%)`,
        transform: `translate(270px, 270px)`,
        backgroundColor: '#fe9c5a'
    };

    const artStyle = {
        height: `${art * 0.75 + 100}px`,
        width: `${art * 0.75 + 100}px`,
        clipPath: `circle(100% at 100% 0%)`,
        transform: `translate(${170 - art * 0.75}px, 270px)`,
        backgroundColor: '#e3685b'
    };

    const playStyleFull = {
        height: `${play * 1.5 + 200}px`,
        width: `${play * 1.5 + 200}px`,
        clipPath: `circle(50% at center)`,
        transform: `translate(${170 - play * 0.75}px, ${170 - play * 0.75}px)`,
        backgroundColor: '#007c9c'
    };

    const envStyleFull = {
        height: `${env * 1.5 + 200}px`,
        width: `${env * 1.5 + 200}px`,
        clipPath: `circle(50% at center)`,
        transform: `translate(${170 - env * 0.75}px, ${170 - env * 0.75}px)`,
        backgroundColor: '#5aafa9'
    };


    const foodStyleFull = {
        height: `${food * 1.5 + 200}px`,
        width: `${food * 1.5 + 200}px`,
        clipPath: `circle(50% at center)`,
        transform: `translate(${170 - food * 0.75}px, ${170 - food * 0.75}px)`,
        backgroundColor: '#fe9c5a'
    };

    const artStyleFull = {
        height: `${art * 1.5 + 200}px`,
        width: `${art * 1.5 + 200}px`,
        clipPath: `circle(50% at center)`,
        transform: `translate(${170 - art * 0.75}px, ${170 - art * 0.75}px)`,
        backgroundColor: '#e3685b'
    };


    return (
        <>
            <Modal size="100%" opened={opened} onClose={close} radius={props.height / 80} centered>
                <Title order={1} ta="center" size={120}>{props.name}</Title>
                <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>{data['Description']}</b></Text>
                <Grid>
                    <Grid.Col span={6}>
                        <img width='auto' height='900px' src={data['Image']} style={{ 'display': 'block', 'margin': 'auto' }}></img>

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Activity Score: {data['Activity Score']}</b></Text>
                        <Text>Number of Bluebike Stations Within 0.5 km: {data['Number of Nearby Bluebike Stations']}</Text>
                        <Text>Average Daily Roundtrips at Nearby Bluebike Stations: {data['Daily Roundtrips'].toFixed(2)}</Text>
                        <Text>Proportion of Roundtrips at Nearby Bluebike Stations: {(data['Weighted Roundtrip Ratio'] * 100).toFixed(1)}%</Text>
                        <Plot data={props.hourly.data} layout={props.hourly.layout} />

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Environment Score: {data['Environment Score']}</b></Text>
                        <Text>Area: {data['Acres'].toFixed(2)} acres</Text>
                        <Text>Canopy Cover: {(data['Canopy Cover Proportion'] * 100).toFixed(1)}%</Text>
                    </Grid.Col>

                    <Grid.Col span={6}>
                        <Plot data={props.map.data} layout={props.map.layout} style={{ 'margin': 'auto' }} />

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Safety Score: {data['Safety Score']}</b></Text>
                        <Text>Streetlight Cover: {(data['Streetlight Proportion'] * 100).toFixed(1)}%</Text>
                        <Text>Crime Density: {(data['Nearby Crimes Per Acre Per Year']).toFixed(2)} crimes per acre per year</Text>
                        <Text>Vehicle Accident Density: {(data['Nearby Vehicle Accidents Per Acre Per Year']).toFixed(2)} vehicle accidents per acre per year</Text>

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Food Score: {data['Food Score']}</b></Text>
                        <Text>Number of Restaurants Within 0.5 km: {data['Number of Nearby Restaurants']}</Text>
                        <Text>Near Food Trucks: {data['Near Food Trucks'] ? 'Yes' : 'No'}</Text>
                        <Text>Near Farmers Markets: {data['Near Farmers Markets'] ? 'Yes' : 'No'}</Text>

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Art Score: {data['Art Score']}</b></Text>
                        <Text>Near Murals: {data['Near Murals'] ? 'Yes' : 'No'}</Text>

                        <Text ta="center" my="xl" fz={rem(30 / 1080 * props.height)}><b>Play Score: {data['Play Score']}</b></Text>
                        <Text>Has Athletic Field: {data['Has Athletic Field'] ? 'Yes' : 'No'}</Text>
                        <Text>Has Playground: {data['Has Playground'] ? 'Yes' : 'No'}</Text>
                    </Grid.Col>
                </Grid>
            </Modal>

            <div className="polar-bar-chart">
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
                <div className="inner-tick-container">
                    <CircularProgressbar
                        value={100}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: 'black',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <p className="ticks" position='absolute' style={{
                        transform: 'translate(11px, -310px) rotate(2deg)'
                    }}>50</p>
                </div>
                <div className="outer-tick-container">
                    <CircularProgressbar
                        value={100}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: 'black',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <p className="ticks" position='absolute' style={{
                        transform: 'translate(13px, -385px) rotate(4deg)'
                    }}>100</p>
                </div>
                <div className="activity-bar-container">
                    <CircularProgressbar
                        value={activity}
                        strokeWidth={0.5}
                        styles={buildStyles({
                            pathColor: '#07455d',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <img className="activity-biker-icon" src='/assets/BikerIcon.svg' style={{
                        transform: `translate(
                            ${240 * Math.cos(Math.PI / 2 - activity * Math.PI / 50 + Math.PI / 60)}px,
                            ${-240 * Math.sin(Math.PI / 2 - activity * Math.PI / 50 + Math.PI / 60) - 251}px
                        ) rotate(${activity * Math.PI / 50 - Math.PI / 60}rad)`
                    }}></img>
                </div>
                <div className="center-image-container">
                    <img className="center-image" src={data['Image']} onClick={open}></img>
                </div>
            </div>
        </>
    );
};

export default PolarBarChart;
