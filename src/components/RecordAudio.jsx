import { Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

const RecordAudio = ({ title, name }) => {
  const audioRef = useRef(null);
  const startRef = useRef(null);
  const stopRef = useRef(null);
  const chunks = [];
  let rec;

  const onStart = () => {
    startRef.current.disabled = true;
    stopRef.current.disabled = false;
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

  const onStop = () => {
    startRef.current.disabled = false;
    stopRef.current.disabled = true;
    rec.stop();
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
      <button type="button" ref={startRef} onClick={onStart}>
        Grabar
      </button>
      <button type="button" ref={stopRef} onClick={onStop}>
        Stop
      </button>
      <audio ref={audioRef} />
    </div>
  );
};

export default RecordAudio;
