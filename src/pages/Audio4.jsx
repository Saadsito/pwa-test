import React from 'react';
import RecordAudio from '../components/RecordAudio';
import Instruction from './Instruction';
import { Container, Button } from '@mui/material';

const Audio4 = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Instruction/>
        <div className="sentence-section">
          <RecordAudio title={'Buenas tardes'} name="audio4" />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ height: '40pt' }}
          color="secondary"
          href="/audio5"
        >
          Continuar
        </Button>
      </Container>
    </div>
  );
};

export default Audio4;