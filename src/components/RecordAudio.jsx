import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

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
        style={{ marginBottom: '5pt', color: '#fff' }}
      >
        {name}
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

      <button type="button" onClick={() => setRecording(true)}>
        Iniciar
      </button>

      <button type="button" onClick={() => setRecording(false)}>
        Parar
      </button>
    </div>
  );
};

export default RecordAudio;
