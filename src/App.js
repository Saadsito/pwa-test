import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import UnAuthRoute from './components/UnAuthRoute';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import { UserProvider } from './states/useUser';
import Audio1 from './pages/Audio1';
import Audio2 from './pages/Audio2';
import Audio3 from './pages/Audio3';
import Audio4 from './pages/Audio4';
import Audio5 from './pages/Audio5';
import Audio6 from './pages/Audio6';
import Audio7 from './pages/Audio7';
import Audio8 from './pages/Audio8';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6340CA',
    },
    secondary: {
      main: '#F7359D',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<AuthRoute />}>
                <Route exact path="/" element={<Home />} />
              </Route>
              <Route exact path="/login" element={<UnAuthRoute />}>
                <Route exact path="/login" element={<Login />} />
              </Route>
              <Route exact path="/signup" element={<UnAuthRoute />}>
                <Route exact path="/signup" element={<SignUp />} />
              </Route>
              <Route exact path="/audio1" element={<UnAuthRoute />}>
                <Route exact path="/audio1" element={<Audio1 />} />
              </Route>
              <Route exact path="/audio2" element={<UnAuthRoute />}>
                <Route exact path="/audio2" element={<Audio2 />} />
              </Route>
              <Route exact path="/audio3" element={<UnAuthRoute />}>
                <Route exact path="/audio3" element={<Audio3 />} />
              </Route>
              <Route exact path="/audio4" element={<UnAuthRoute />}>
                <Route exact path="/audio4" element={<Audio4 />} />
              </Route>
              <Route exact path="/audio5" element={<UnAuthRoute />}>
                <Route exact path="/audio5" element={<Audio5 />} />
              </Route>
              <Route exact path="/audio6" element={<UnAuthRoute />}>
                <Route exact path="/audio6" element={<Audio6 />} />
              </Route>
              <Route exact path="/audio7" element={<UnAuthRoute />}>
                <Route exact path="/audio7" element={<Audio7 />} />
              </Route>
              <Route exact path="/audio8" element={<UnAuthRoute />}>
                <Route exact path="/audio8" element={<Audio8 />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
