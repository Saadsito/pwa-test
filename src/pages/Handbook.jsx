import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import zuli1 from '../assets/zuli1.jpg';
import zuli2 from '../assets/zuli2.jpg';
import zuli3 from '../assets/zuli3.jpg';
import zuli4 from '../assets/zuli4.jpg';
import zuli5 from '../assets/zuli5.jpg';
import zuli6 from '../assets/zuli6.jpg';
import zuli7 from '../assets/zuli7.jpg';


export default function Handbook() {

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Manual de usuario
          </Typography>
          <Divider sx={{ width: '100%', margin: '20pt' }} />
          <Typography component="h1" variant="h3" style={{margin: '20pt'}}>
            Autenticación
          </Typography>
          <img src={zuli1} style={{width: '85vw'}}/>
          <Divider sx={{ width: '100%', margin: '20pt' }} />
          <Typography component="h1" variant="h3" style={{margin: '20pt'}}>
            Registro
          </Typography>
          <img src={zuli2} style={{width: '85vw', marginBottom: '20pt'}}/>
          <img src={zuli3} style={{width: '85vw', marginBottom: '20pt'}}/>
          <img src={zuli4} style={{width: '85vw', marginBottom: '20pt'}}/>
          <Divider sx={{ width: '100%', margin: '20pt' }} />
          <Typography component="h1" variant="h3" style={{margin: '20pt'}}>
            Inicio
          </Typography>
          <img src={zuli5} style={{width: '85vw', marginBottom: '20pt'}}/>
          <img src={zuli6} style={{width: '85vw', marginBottom: '20pt'}}/>
          <img src={zuli7} style={{width: '85vw', marginBottom: '20pt'}}/>
          <Box
            sx={{ mt: 1 }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ height: '40pt' }}
              color="error"
              href='/'
            >
              Regresar
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
