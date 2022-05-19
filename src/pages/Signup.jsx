import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Signup.css';
import Avatar1 from '../assets/avatar1.jpeg';
import Avatar2 from '../assets/avatar2.jpeg';
import Avatar3 from '../assets/avatar3.jpeg';
import Avatar4 from '../assets/avatar4.jpeg';
import Avatar5 from '../assets/avatar5.jpeg';
import Avatar6 from '../assets/avatar6.jpeg';
import Avatar7 from '../assets/avatar7.jpeg';
import Avatar8 from '../assets/avatar8.jpeg';
import Voice from '../components/Voice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} style={{marginBottom: '40pt'}}>
      Universidad Católica Andrés Bello <br/> Pontificia Universidad Católica del Ecuador
    </Typography>
  );
}

export default function SignUp() {

  let avatarSelected = 0;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const mic = new SpeechRecognition()

  const [avtr1, setAvtr1] = useState("image-avatar");
  const [avtr2, setAvtr2] = useState("image-avatar");
  const [avtr3, setAvtr3] = useState("image-avatar");
  const [avtr4, setAvtr4] = useState("image-avatar");
  const [avtr5, setAvtr5] = useState("image-avatar");
  const [avtr6, setAvtr6] = useState("image-avatar");
  const [avtr7, setAvtr7] = useState("image-avatar");
  const [avtr8, setAvtr8] = useState("image-avatar");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const avatarClick = (avtrNumber) => {
    avatarSelected = avtrNumber;
    setAvtr1("image-avatar");
    setAvtr2("image-avatar");
    setAvtr3("image-avatar");
    setAvtr4("image-avatar");
    setAvtr5("image-avatar");
    setAvtr6("image-avatar");
    setAvtr7("image-avatar");
    setAvtr8("image-avatar");
    switch (avtrNumber) {
      case 1:
        setAvtr1("image-avatar-selected");
        break;
      case 2: 
        setAvtr2("image-avatar-selected");
        break;
      case 3: 
        setAvtr3("image-avatar-selected");
        break; 
      case 4:
        setAvtr4("image-avatar-selected");
        break;
      case 5:
        setAvtr5("image-avatar-selected");
        break;
      case 6:
        setAvtr6("image-avatar-selected");
        break;
      case 7: 
        setAvtr7("image-avatar-selected");
        break;
      case 8: 
        setAvtr8("image-avatar-selected");
        break; 
      default:
        console.log('error');
    }
  }

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
          <Typography component="h1" variant="h5">
            ¡Regístrate!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Typography component="h3" variant="h5" style={{marginTop: '20pt'}}>
              Elige a tu avatar
            </Typography>
            <div style={{marginTop: '20pt'}}>
              <img src={Avatar1} className={avtr1} onClick={() => mic.start()}/>
              <img src={Avatar2} className={avtr2} onClick={() => mic.stop()}/>
              <img src={Avatar3} className={avtr3} onClick={() => avatarClick(3)}/>
              <img src={Avatar4} className={avtr4} onClick={() => avatarClick(4)}/>
              <img src={Avatar5} className={avtr5} onClick={() => avatarClick(5)}/>
              <img src={Avatar6} className={avtr6} onClick={() => avatarClick(6)}/>
              <img src={Avatar7} className={avtr7} onClick={() => avatarClick(7)}/>
              <img src={Avatar8} className={avtr8} onClick={() => avatarClick(8)}/>
            </div>
            <div>
              <Voice/>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{height: '40pt'}}
            >
              Regístrate
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2" color="#000">
                  ¿Ya estás registrado? Inicia de sesión aquí
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  );
}