import React from 'react';
import { Progress, Space } from '@mantine/core';

const BikerProgress = ({ progress, height, width }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src='/assets/BikerIcon.svg' style={{
                width: width / 20,
                transform: `translate(${width / -24.83 + progress * (0.625 * width - 11)}px, ${0}px)`
            }}></img>
            <Progress.Root size={width / 480}>
                <Progress.Section value={100 * progress} color="#07455d"></Progress.Section>
                <Progress.Section value={100 * (1 - progress)} color="#b4c7ce"></Progress.Section>
            </Progress.Root>
            <Space h={height / 40} />
        </div>
    );
};

export default BikerProgress;
