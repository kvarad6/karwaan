import './App.css';
import Box from '@mui/material/Box';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Destinations from './Components/Destinations';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
// import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <Box>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="home" element={<><Header /><Home /></>} />
          <Route path="aboutus" element={<><Header /><AboutUs /></>} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} /> 
          <Route path="destinations" element={<><Header /><Destinations /></>} />
          <Route path="contact" element={<><Header /><Contact /></>} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Box>
    </>
  );
}

export default App;
