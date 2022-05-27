import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonVoice(props) {

  const audRef = useRef();

  return (
    <div style={{width: '100%'}}>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="primary"
        fullWidth
        style={{width: '100%'}}
        onClick={() => audRef.current.play()}
      >
        <Typography component="h1" variant="h4">
            {props.title}
        </Typography>
      </Button>
      <audio ref={audRef} src={props.src} />
    </div>
  );
}
