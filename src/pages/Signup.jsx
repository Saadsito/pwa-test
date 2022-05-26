import React, { useState } from 'react';
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
import { ReactComponent as RecordingSVG } from '../assets/recording.svg';
import RecordAudio from '../components/RecordAudio';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db, storage, userLoged, auth } from '../firebase/config';
import { ref, uploadBytes } from 'firebase/storage';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ marginBottom: '40pt' }}
    >
      Universidad Católica Andrés Bello <br /> Pontificia Universidad Católica
      del Ecuador
    </Typography>
  );
}

export default function SignUp() {
  const dataUser = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    avatar: '',
  };

  const [user, setUser] = useState(dataUser);

  const [avtr1, setAvtr1] = useState('image-avatar');
  const [avtr2, setAvtr2] = useState('image-avatar');
  const [avtr3, setAvtr3] = useState('image-avatar');
  const [avtr4, setAvtr4] = useState('image-avatar');
  const [avtr5, setAvtr5] = useState('image-avatar');
  const [avtr6, setAvtr6] = useState('image-avatar');
  const [avtr7, setAvtr7] = useState('image-avatar');
  const [avtr8, setAvtr8] = useState('image-avatar');

  const [audio1, setAudio1] = useState(null);
  const [audio2, setAudio2] = useState(null);
  const [audio3, setAudio3] = useState(null);
  const [audio4, setAudio4] = useState(null);
  const [audio5, setAudio5] = useState(null);
  const [audio6, setAudio6] = useState(null);
  const [audio7, setAudio7] = useState(null);
  const [audio8, setAudio8] = useState(null);

  const changeValue = (property, value) => {
    setUser({ ...user, [property]: value });
  };

  const getFileBlob = (url, cb) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.addEventListener('load', function () {
      cb(xhr.response);
    });
    xhr.send();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      user,
    });
    console.log(JSON.parse(window.localStorage.getItem('audio8')));
    try {
      // test
      getFileBlob(
        JSON.parse(window.localStorage.getItem('audio8')).blobURL,
        async (blob) => {
          await uploadBytes(ref(storage, `test`), blob);
        }
      );

      console.log('listo');
      return;
      // test end

      for (let i = 1; i <= 8; i++) {
        if (!window.localStorage.getItem(`audio${i}`))
          throw new Error(`NOT FOUND audio${i}`, 404);
      }

      //autenticacion de usuario
      const userLogged = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log('Usuario creado con exito: ', userLogged.user.uid);

      //guardar informacion en firestore
      const users = collection(db, 'dataUser');
      await setDoc(doc(users, auth.currentUser.uid), {
        UID: auth.currentUser.uid,
        name: user.name,
        lastname: user.lastname,
        avatar: user.avatar,
      });

      //prueba blob

      //guardar audios

      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio1`),
        window.localStorage.getItem('audio1')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio2`),
        window.localStorage.getItem('audio2')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio3`),
        window.localStorage.getItem('audio3')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio4`),
        window.localStorage.getItem('audio4')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio5`),
        window.localStorage.getItem('audio5')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio6`),
        window.localStorage.getItem('audio6')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio7`),
        window.localStorage.getItem('audio7')
      );
      await uploadBytes(
        ref(storage, `${auth.currentUser.uid}/audio8`),
        window.localStorage.getItem('audio8')
      );
      console.log('audios guardados con éxito');
      window.location.href = '/';
    } catch (e) {
      console.log(e);
    }
  };

  const avatarClick = (avtrNumber) => {
    setAvtr1('image-avatar');
    setAvtr2('image-avatar');
    setAvtr3('image-avatar');
    setAvtr4('image-avatar');
    setAvtr5('image-avatar');
    setAvtr6('image-avatar');
    setAvtr7('image-avatar');
    setAvtr8('image-avatar');
    changeValue('avatar', avtrNumber);
    switch (avtrNumber) {
      case 1:
        setAvtr1('image-avatar-selected');
        break;
      case 2:
        setAvtr2('image-avatar-selected');
        break;
      case 3:
        setAvtr3('image-avatar-selected');
        break;
      case 4:
        setAvtr4('image-avatar-selected');
        break;
      case 5:
        setAvtr5('image-avatar-selected');
        break;
      case 6:
        setAvtr6('image-avatar-selected');
        break;
      case 7:
        setAvtr7('image-avatar-selected');
        break;
      case 8:
        setAvtr8('image-avatar-selected');
        break;
      default:
        console.log('error');
    }
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
          <Typography component="h1" variant="h5">
            ¡Regístrate!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={(e) => changeValue('name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => changeValue('lastname', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => changeValue('email', e.target.value)}
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
                  onChange={(e) => changeValue('password', e.target.value)}
                />
              </Grid>
            </Grid>
            <Typography
              component="h3"
              variant="h5"
              style={{ marginTop: '20pt' }}
            >
              Elige a tu avatar
            </Typography>
            <div style={{ marginTop: '20pt' }}>
              <img
                src={Avatar1}
                className={avtr1}
                onClick={() => avatarClick(1)}
              />
              <img
                src={Avatar2}
                className={avtr2}
                onClick={() => avatarClick(2)}
              />
              <img
                src={Avatar3}
                className={avtr3}
                onClick={() => avatarClick(3)}
              />
              <img
                src={Avatar4}
                className={avtr4}
                onClick={() => avatarClick(4)}
              />
              <img
                src={Avatar5}
                className={avtr5}
                onClick={() => avatarClick(5)}
              />
              <img
                src={Avatar6}
                className={avtr6}
                onClick={() => avatarClick(6)}
              />
              <img
                src={Avatar7}
                className={avtr7}
                onClick={() => avatarClick(7)}
              />
              <img
                src={Avatar8}
                className={avtr8}
                onClick={() => avatarClick(8)}
              />
            </div>
            <div>
              <Typography
                component="h3"
                variant="h6"
                style={{ marginTop: '20pt' }}
              >
                Grábate respondiendo a las siguientes sentencias como si fuera
                tu familiar el que te está hablando
              </Typography>
              <RecordingSVG className="record-svg" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'Hola'} name="audio1" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'¿Cómo estás?'} name="audio2" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'Buenos días'} name="audio3" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'Buenas tardes'} name="audio4" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'Buenas noches'} name="audio5" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'¿Cómo estuvo tu día?'} name="audio6" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'Te extraño'} name="audio7" />
            </div>
            <div className="sentence-section">
              <RecordAudio title={'¿Ya comiste?'} name="audio8" />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ height: '40pt' }}
              color="secondary"
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
