import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonVoice from '../components/ButtonVoice';
import { Divider, Button } from '@mui/material';
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
import Game from '../components/Game';
import Domino from '../assets/domino.png';
import Ajedrez from '../assets/ajedrez.png';
import Parchis from '../assets/parchis.png';
import Damas from '../assets/damas.png';
import Memoria from '../assets/memoria.png';
import Memoria2 from '../assets/memoria2.png';
import Rompecabezas from '../assets/rompecabezas.png';
import Solitario from '../assets/solitario.png';
import CalendarComponent from '../components/CalendarComponent';

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
          {
            {
              1: <img src={Avatar1} className="avatar" />,
              2: <img src={Avatar2} className="avatar" />,
              3: <img src={Avatar3} className="avatar" />,
              4: <img src={Avatar4} className="avatar" />,
              5: <img src={Avatar5} className="avatar" />,
              6: <img src={Avatar6} className="avatar" />,
              7: <img src={Avatar7} className="avatar" />,
              8: <img src={Avatar8} className="avatar" />,
            }[user.avatar]
          }
          <ButtonVoice title={'Hola'} src={user.audios[0]}/>
          <ButtonVoice title={'¿Cómo estás?'} src={user.audios[1]}/>
          <ButtonVoice title={'Buenos días'} src={user.audios[2]}/>
          <ButtonVoice title={'Buenas Tardes'} src={user.audios[3]}/>
          <ButtonVoice title={'Buenas noches'} src={user.audios[4]}/>
          <ButtonVoice title={'¿Cómo estuvo tu día?'} src={user.audios[5]}/>
          <ButtonVoice title={'Te extraño'} src={user.audios[6]}/>
          <ButtonVoice title={'¿Ya comiste?'} src={user.audios[7]}/>
          {
            user.newAudios && user.newAudios.map((data, i) => (
              <ButtonVoice title={data} src={user.audios[8+i]}/>
            ))
          }
          <Divider sx={{ width: '100%', margin: '20pt' }} />
          <Typography component="h1" variant="h3">
            Juegos
          </Typography>
          <div className="container-games">
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
            <Divider sx={{ width: '100%', margin: '20pt' }} />
            <Typography component="h1" variant="h3">
              Calendario
            </Typography>
            <div className='container-games'>
              <CalendarComponent/>
            </div>
          </div>
          <Button
            color="error"
            variant='contained'
            sx={{
              marginBottom: '20pt'
            }}
            onClick={async () => {
              await signOut(auth);
              window.location.href = '/login';
            }}
          >
            Cerrar sesión
          </Button>
        </Box>
          
      </Container>
    </div>
  );
}
