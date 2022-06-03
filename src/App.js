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
import RecordAudio from './components/RecordAudio';
import Handbook from './pages/Handbook';

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
              <Route exact path="/handbook">
                <Route exact path="/handbook" element={<Handbook />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
