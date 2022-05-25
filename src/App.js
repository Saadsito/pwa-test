import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import { UserProvider } from './states/useUser';

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
              <Route exact path="/" element={<Home />} auth/>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} /> 
            </Routes>
          </Router>
      </UserProvider>

        </ThemeProvider>
    </div>
  );
}

export default App;
