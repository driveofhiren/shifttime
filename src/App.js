import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'; 
import Login from './components/Login'; 
import SignUp from './components/Join';
import Layout from './components/Layout';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout child={<Home />}/>} />
        <Route path="/login" element={<Layout child={<Login />}/>} />
        <Route path="/signup" element={<Layout child={<SignUp />}/>} />
        <Route path="/dashboard" element={<Layout child={<Dashboard />}/>} />


      </Routes>
    </Router>
  );
}

export default App;
