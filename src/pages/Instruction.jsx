import React from 'react';
import { ReactComponent as RecordingSVG } from '../assets/recording.svg';
import { Typography } from '@mui/material';

const Instruction = () => {
    return (
        <div>
            <Typography
                component="h3"
                variant="h6"
                style={{ marginTop: '20pt' }}
            >
                Grábate respondiendo a las siguientes sentencias como si fuera
                tu familiar el que te está hablando
            </Typography>
            <RecordingSVG className="record-svg" />
        </div>
    )
};

export default Instruction;