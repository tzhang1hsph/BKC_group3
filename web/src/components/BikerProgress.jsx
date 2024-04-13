import React from 'react';
import { Progress } from '@mantine/core';

const BikerProgress = ({ progress, height, width }) => {
    return (
        <>
            <img src='/assets/BikerIcon.svg' style={{
                width: height / 12,
                height: height / 12,
                transform: `translate(${(2 * progress - 1) / 3.265 * width - width / 80}px, ${height / 50}px)`
            }}></img>
            <Progress.Root size={height / 480} radius="lg">
                <Progress.Section value={100 * progress} color="#07455d"></Progress.Section>
                <Progress.Section value={100 * (1 - progress)} color="#b4c7ce"></Progress.Section>
            </Progress.Root>
        </>
    );
};

export default BikerProgress;
