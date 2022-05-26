import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';

const RecordAudio = ({ title, name }) => {
  const [recording, setRecording] = useState(false);

  console.log(name);

  const handleStop = (data) => {
    console.log(name);
    window.localStorage.setItem(name, JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem(name)));
    // console.log(window.localStorage.getItem(name).blobURL);
  };

  return (
    <div>
      <Typography
        component="h3"
        variant="h6"
        style={{ marginBottom: '20pt', color: '#fff' }}
      >
        {title}
      </Typography>
      <div style={{ display: 'none' }}>
        <ReactMic
          // strokeColor="white"
          record={recording}
          mimeType="audio/mp3"
          onStop={handleStop}
          key={name}
        />
      </div>

      <div style={{display: 'inline-flex', color: '#fff'}}>
        <div style={{cursor: 'pointer'}} onClick={() => setRecording(true)}>
          <MicIcon/>
        </div>
        <div style={{marginLeft: '20pt', marginRight: '20pt'}}/>
        <div style={{cursor: 'pointer'}} onClick={() => setRecording(false)}>
          <StopIcon/>
        </div>
      </div>
    </div>
  );
};

export default RecordAudio;
