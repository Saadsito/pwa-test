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
import { auth } from '../firebase/config';
import { useUser } from '../states/useUser';
import { signOut } from 'firebase/auth';
export default function Home() {
  const user = useUser();

  /*
    audio1: user.audios[0]
    audio2: user.audios[1]
    ... y asi
  */

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
          <ButtonVoice title={'Hola'} />
          <ButtonVoice title={'¿Cómo estás?'} />
          <ButtonVoice title={'Buenos días'} />
          <ButtonVoice title={'Buenas Tardes'} />
          <ButtonVoice title={'Buenas noches'} />
          <ButtonVoice title={'¿Cómo estuvo tu día?'} />
          <ButtonVoice title={'Te extraño'} />
          <ButtonVoice title={'¿Ya comiste?'} />
          <Divider sx={{ width: '100%', margin: '20pt' }} />
          <audio controls src={user.audios[0]} />
          <button
            onClick={async () => {
              await signOut(auth);
              window.location.href = '/login';
            }}
          >
            prueba
          </button>
          <Typography component="h1" variant="h3">
            Juegos
          </Typography>
          {/* <div className="container-games">
            <div className='divFlex'>
              <Game img={Domino} link={"https://vipgames.com/es/domino/#singleplayer"}/>
              <Game img={Ajedrez} link={"https://www.cokitos.com/juego-ajedrez-online/play/"}/>
            </div>
            <div className='divFlex'>
              <Game img={Solitario} link={"https://www.cokitos.com/solitario-frvr/play/"}/>
              <Game img={Parchis} link={"https://www.cokitos.com/leyenda-del-parchis/play/"}/>
            </div>
            <div className='divFlex'>
              <Game img={Memoria} link={"https://www.cokitos.com/memorizar-patron-de-colores/play/"}/>
              <Game img={Rompecabezas} link={"https://www.cokitos.com/rompecabezas-de-van-gogh/play/"}/>  
            </div>
            <div className='divFlex'>
              <Game img={Memoria2} link={"https://www.cokitos.com/juego-crear-y-memorizar-la-secuencia/play/"}/>
              <Game img={Damas} link={"https://www.cokitos.com/juego-damas-online/play/"}/>
            </div>
          </div> */}
        </Box>
      </Container>
    </div>
  );
}
