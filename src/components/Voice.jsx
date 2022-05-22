import React, { useState, useEffect } from 'react';
import RecorderControls from './RecorderControls/RecorderControls';
import useRecorder from '../states/useRecorder';
import Typography from '@mui/material/Typography';
import RecordingsList from './RecordingList';

const Voice = (props) => {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  useEffect(() => {
    props.setAudio(audio);
  }, [audio]);

  return (
    <div>
      <Typography
        component="h3"
        variant="h6"
        style={{ marginBottom: '5pt', color: '#fff' }}
      >
        {props.title}
      </Typography>
      <RecorderControls recorderState={recorderState} handlers={handlers} />
      <RecordingsList audio={audio} />
    </div>
  );
};

export default Voice;
