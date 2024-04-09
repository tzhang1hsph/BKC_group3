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

    const env = data['Environment Score'];
    const food = data['Food Score'];
    const play = data['Play Score'];
    const art = data['Art Score'];
    const activity = data['Activity Score'];

    const playStyle = {
        height: `${play * 0.75 + 100}px`,
        width: `${play * 0.75 + 100}px`,
        clipPath: `circle(${play * 0.75 + 100}px at 100% 100%)`,
        transform: `translate(${170 - play * 0.75}px, ${170 - play * 0.75}px)`
    };

    const envStyle = {
        height: `${env * 0.75 + 100}px`,
        width: `${env * 0.75 + 100}px`,
        clipPath: `circle(${env * 0.75 + 100}px at 0% 100%)`,
        transform: `translate(270px, ${170 - env * 0.75}px)`
    };

    const foodStyle = {
        height: `${food * 0.75 + 100}px`,
        width: `${food * 0.75 + 100}px`,
        clipPath: `circle(${food * 0.75 + 100}px at 0% 0%)`,
        transform: `translate(270px, 270px)`
    };

    const artStyle = {
        height: `${art * 0.75 + 100}px`,
        width: `${art * 0.75 + 100}px`,
        clipPath: `circle(${art * 0.75 + 100}px at 100% 0%)`,
        transform: `translate(${170 - art * 0.75}px, 270px)`
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
                    <img className="activity-biker-icon" src='/src/assets/BikerIcon.svg' style={{
                        transform: `translate(
                            ${240*Math.cos(Math.PI/2 - activity*Math.PI/50 + Math.PI/60)}px,
                            ${-240*Math.sin(Math.PI/2 - activity*Math.PI/50 + Math.PI/60) - 245}px
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
