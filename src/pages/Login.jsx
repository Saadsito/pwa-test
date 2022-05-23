import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../assets/logozuli.png';
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";

function Copyright(props) {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Universidad Católica Andrés Bello <br/> Pontificia Universidad Católica del Ecuador
      </Typography>
    </div>
  );
}

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
    .then((userCredential)=>{
      console.log("Sesion iniciada con: ", userCredential);
    })
  };

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
          <img src={Logo} style={{width: '100pt', height: '100pt'}}/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{height: '40pt'}}
              color="secondary"
            >
              Iniciar sesión
            </Button>
            <Grid container justifyContent="center">
              <Grid item >
                <Link href="/signup" variant="body2" color="#000">
                  {"¿Aún no estás registrado? Regístrate aquí"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
}