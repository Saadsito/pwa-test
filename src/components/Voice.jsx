import React, { useState } from "react";
import RecorderControls from "./RecorderControls/RecorderControls";
import useRecorder from '../states/useRecorder';
import Typography from '@mui/material/Typography';

export default function Voice(props) {

  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <div>
      <Typography component="h3" variant="h6" style={{marginBottom: '5pt', color: '#fff'}}>
        {props.title}
      </Typography>
      <RecorderControls recorderState={recorderState} handlers={handlers}/>
    </div>
  );
}