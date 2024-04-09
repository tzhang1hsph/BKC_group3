import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import final_data_table from '../../../final_data_table.json';
import Plot from 'react-plotly.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PolarBarChart = (props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const data = final_data_table[props.name]
    const mode = 'all' /* turn this into state? */

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
        backgroundColor: '#237c9c'
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
        backgroundColor: '#f89c5a'
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
        backgroundColor: '#237c9c'
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
        backgroundColor: '#f89c5a'
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
            <Modal size="100%" opened={opened} onClose={close} centered>
                <h1>{props.name}</h1>
                <img width='auto' height='800px' src={data['Image']}></img>
                <h3>{data['Description']}</h3>
                <Plot data={props.map.data} layout={props.map.layout} />

                <h2>Environment Score: {data['Environment Score']}</h2>
                <h3>Area: {data['Acres'].toFixed(2)} acres</h3>
                <h3>Canopy Cover: {(data['Canopy Cover Proportion'] * 100).toFixed(1)}%</h3>

                <h2>Safety Score: {data['Safety Score']}</h2>
                <h3>Streetlight Cover: {(data['Streetlight Proportion'] * 100).toFixed(1)}%</h3>
                <h3>Crime Density: work in progress</h3>

                <h2>Activity Score: {data['Activity Score']}</h2>
                <h3>Number of Bluebike Stations Within 0.5 km: {data['Number of Nearby Bluebike Stations']}</h3>
                <h3>Average Daily Roundtrips at Nearby Bluebike Stations: {data['Daily Roundtrips'].toFixed(2)}</h3>
                <h3>Proportion of Roundtrips at Nearby Bluebike Stations: {(data['Weighted Roundtrip Ratio'] * 100).toFixed(1)}%</h3>
                <Plot data={props.hourly.data} layout={props.hourly.layout} />

                <h2>Food Score: {data['Food Score']}</h2>
                <h3>Number of Restaurants Within 0.5 km: {data['Number of Nearby Restaurants']}</h3>
                <h3>Near Food Trucks: {data['Near Food Trucks'] ? 'Yes' : 'No'}</h3>
                <h3>Near Farmers Markets: {data['Near Farmers Markets'] ? 'Yes' : 'No'}</h3>

                <h2>Play Score: {data['Play Score']}</h2>
                <h3>Has Athletic Field: {data['Has Athletic Field'] ? 'Yes' : 'No'}</h3>
                <h3>Has Playground: {data['Has Playground'] ? 'Yes' : 'No'}</h3>

                <h2>Art Score: {data['Art Score']}</h2>
                <h3>Near Murals: {data['Near Murals'] ? 'Yes' : 'No'}</h3>

            </Modal>

            <div className="polar-bar-chart">
                {mode === 'all' ?
                    <>
                        <div className="segment" style={playStyle}></div>
                        <div className="segment" style={envStyle}></div>
                        <div className="segment" style={foodStyle}></div>
                        <div className="segment" style={artStyle}></div>
                    </>
                    : mode === 'play' ?
                        <div className="segment" style={playStyleFull}></div>
                        : mode === 'env' ? <div className="segment" style={envStyleFull}></div>
                            : mode === 'food' ? <div className="segment" style={foodStyleFull}></div>
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
                        transform: 'translate(-11px, -310px) rotate(-3deg)'
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
                        transform: 'translate(-13px, -385px) rotate(-3deg)'
                    }}>100</p>
                </div>
                <div className="activity-bar-container">
                    <CircularProgressbar
                        value={activity}
                        strokeWidth={0.5}
                        styles={buildStyles({
                            pathColor: 'black',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                    <img className="activity-biker-icon" src='/assets/BikerIcon.svg' style={{
                        transform: `translate(
                            ${240 * Math.cos(Math.PI/2 - activity*Math.PI/50 + Math.PI/60)}px,
                            ${-240 * Math.sin(Math.PI/2 - activity*Math.PI/50 + Math.PI/60) - 251}px
                        ) rotate(${activity*Math.PI/50 - Math.PI/60}rad)`
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
