import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonVoice from '../components/ButtonVoice';
import { Divider } from '@mui/material';
import Avatar1 from '../assets/avatar1.jpeg';
import Avatar2 from '../assets/avatar2.jpeg';
import Avatar3 from '../assets/avatar3.jpeg';
import Avatar4 from '../assets/avatar4.jpeg';
import Avatar5 from '../assets/avatar5.jpeg';
import Avatar6 from '../assets/avatar6.jpeg';
import Avatar7 from '../assets/avatar7.jpeg';
import Avatar8 from '../assets/avatar8.jpeg';
import './Home.css';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/config';
import { useUser } from '../states/useUser';
import {getAuth} from 'firebase/auth'

export default function Home() {
  const user = useUser()
  React.useEffect(() => {
    console.log(getAuth().currentUser.uid)
    console.log(user)
  }, [])

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            ¡Comunícate!
          </Typography>
          <img src={Avatar1} className="avatar" />
          <ButtonVoice title={"Hola"}/>
          <ButtonVoice title={"¿Cómo estás?"}/>
          <ButtonVoice title={"Buenos días"}/>
          <ButtonVoice title={"Buenas Tardes"}/>
          <ButtonVoice title={"Buenas noches"}/>
          <ButtonVoice title={"¿Cómo estuvo tu día?"}/>
          <ButtonVoice title={"Te extraño"}/>
          <ButtonVoice title={"¿Ya comiste?"}/>
          <Divider sx={{width: '100%', margin: '20pt'}}/>
          <audio controls src="https://firebasestorage.googleapis.com/v0/b/zuli-app.appspot.com/o/l7vF6fgFFhXpGKTbWPUR50Z79nO2%2Faudio1.ogg?alt=media&token=fe3b02d2-8152-4b7b-af94-3003bcc8865a"/>
          <button onClick={async() => {
            await getAuth().signOut()
            console.log('listo')
          }}>
            prueba
          </button>
          <Typography component="h1" variant="h3">
            Juegos
          </Typography>
        </Box>
      </Container>
    </div>
  );
}