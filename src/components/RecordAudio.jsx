import { Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';

const RecordAudio = ({ title, name }) => {
  const audioRef = useRef(null);
  const chunks = [];
  let rec;

  const onStart = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      rec = new MediaRecorder(stream);
      rec.start();

      chunks.splice(0, chunks.length);

      rec.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      rec.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/mp3' });
        const blobURL = URL.createObjectURL(blob);
        localStorage.setItem(name, blobURL);
        audioRef.current.src = blobURL;
        audioRef.current.controls = true;
      };
    });
  };

  return (
    <div>
      <Typography
        component="h3"
        variant="h6"
        style={{ marginBottom: '5pt', color: '#fff' }}
      >
        {title}
      </Typography>
      <div style={{margin: '10pt', display: 'inline-flex'}}>
        <div style={{cursor: 'pointer', color: '#fff'}} onClick={onStart}>
          <MicIcon/>
        </div>
        <div style={{marginLeft: '20pt', marginRight: '20pt'}}/>
        <div style={{cursor: 'pointer', color: '#fff'}} onClick={() => rec.stop()}>
          <StopIcon/>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default RecordAudio;
