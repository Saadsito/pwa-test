import React from 'react';
import RecordAudio from '../components/RecordAudio';
import Instruction from './Instruction';
import { Container, Button } from '@mui/material';

const Audio1 = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Instruction/>
        <div className="sentence-section">
          <RecordAudio title={'Hola'} name="audio1" />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ height: '40pt' }}
          color="secondary"
          href="/audio2"
        >
          Continuar
        </Button>
      </Container>
    </div>
  );
};

export default Audio1;