import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import NumberX from './components/number';
import Hello from './components/hello';
import HelloBlueRed from './components/hellobluered';
import {Container} from 'react-bootstrap'

function App() {


  return (
    <div className='App'>
      <Container>
      <Link to="/home"> Click to go home! </Link>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/4" element={<NumberX/>} />
        <Route path="/hello" element={<Hello/>} />
        <Route path="/hello/blue/red" element={<HelloBlueRed/>} />
      </Routes>
      </Container>
      
    </div>
  );
}

export default App;
