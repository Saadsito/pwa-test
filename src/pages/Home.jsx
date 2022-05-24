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
import { storage, userLoged } from '../firebase/config';

export default function Home() {

  const getAudios = async () => {
    if (userLoged != ''){
      try {
        userLoged.audio1 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio1`));
        userLoged.audio2 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio2`));
        userLoged.audio3 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio3`));
        userLoged.audio4 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio4`));
        userLoged.audio5 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio5`));
        userLoged.audio6 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio6`));
        userLoged.audio7 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio7`));
        userLoged.audio8 = await getDownloadURL(ref(storage, `${userLoged.uid}/audio8`));
      } catch (e){
        console.log("hay un error con los audios unu: ", e);
      }
    }
  }

  return (
    <div>
      {getAudios()}
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
          {userLoged.audio1 ? <audio controls src={userLoged.audio1}/> : null}
          <ButtonVoice title={"¿Cómo estás?"}/>
          <ButtonVoice title={"Buenos días"}/>
          <ButtonVoice title={"Buenas Tardes"}/>
          <ButtonVoice title={"Buenas noches"}/>
          <ButtonVoice title={"¿Cómo estuvo tu día?"}/>
          <ButtonVoice title={"Te extraño"}/>
          <ButtonVoice title={"¿Ya comiste?"}/>
          <Divider sx={{width: '100%', margin: '20pt'}}/>
          <Typography component="h1" variant="h3">
            Juegos
          </Typography>
        </Box>
      </Container>
    </div>
  );
}