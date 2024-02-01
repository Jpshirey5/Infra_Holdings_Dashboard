import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.js'
import SignUp from './Components/Signup.js';
import Dash from './Components/Dash.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Dash' element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;
