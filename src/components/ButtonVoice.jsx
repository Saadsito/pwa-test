import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonVoice(props) {
  return (
    <div style={{width: '100%'}}>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="primary"
        fullWidth
        style={{width: '100%'}}
      >
        <Typography component="h1" variant="h4">
            {props.title}
        </Typography>
      </Button>
    </div>
  );
}
