import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import final_data_table from '../../../final_data_table.json';
import Plot from 'react-plotly.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PolarBarChart = (props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const data = final_data_table[props.name]

    const env = data['Environment Score'] * 75;
    const food = data['Food Score'] * 75;
    const play = data['Play Score'] * 75;
    const art = data['Art Score'] * 75;

    const playStyle = {
        height: `${play + 100}px`,
        width: `${play + 100}px`,
        clipPath: `circle(${play + 100}px at 100% 100%)`,
        transform: `translate(${170 - play}px, ${170 - play}px)`
    };

    const envStyle = {
        height: `${env + 100}px`,
        width: `${env + 100}px`,
        clipPath: `circle(${env + 100}px at 0% 100%)`,
        transform: `translate(270px, ${170 - env}px)`
    };

    const foodStyle = {
        height: `${food + 100}px`,
        width: `${food + 100}px`,
        clipPath: `circle(${food + 100}px at 0% 0%)`,
        transform: `translate(270px, 270px)`
    };

    const artStyle = {
        height: `${art + 100}px`,
        width: `${art + 100}px`,
        clipPath: `circle(${art + 100}px at 100% 0%)`,
        transform: `translate(${170 - art}px, 270px)`
    };


    return (
        <>
            <Modal size="100%" opened={opened} onClose={close} centered>
                <h1>{props.name}</h1>
                <div>
                    {Object.keys(data).map(function (key) { return <p>{key}: {data[key]}</p> })}
                </div>

                <Plot data={props.map.data} layout={props.map.layout} />
                <Plot data={props.hourly.data} layout={props.hourly.layout} />
            </Modal>

            <div className="polar-bar-chart">
                <div className="segment" style={playStyle}></div>
                <div className="segment" style={envStyle}></div>
                <div className="segment" style={foodStyle}></div>
                <div className="segment" style={artStyle}></div>
                <div className="inner-tick-container">
                    <CircularProgressbar
                        value={96}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: '#888888',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                </div>
                <div className="outer-tick-container">
                    <CircularProgressbar
                        value={97}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathColor: '#888888',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                </div>
                <div className="activity-bar-container">
                    <CircularProgressbar
                        value={data['Activity Score'] * 100}
                        strokeWidth={0.5}
                        styles={buildStyles({
                            pathColor: '#000000',
                            trailColor: 'rgba(0, 0, 0, 0)'
                        })}
                    />
                </div>
                <div className="center-image-container">
                    <img className="center-image" src={data['Image']} onClick={open}></img>
                </div>
            </div>
        </>
    );
};

export default PolarBarChart;
