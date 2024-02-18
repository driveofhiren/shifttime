import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'; 
import Login from './components/Login'; 
import SignUp from './components/Join';
import Layout from './components/Layout';
import Dashboard from './components/dashboard';
import Clientmanagement from './components/clientmanagement';
import Employeemanagement from './components/employeemanagement';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout child={<Home />}/>} />
        <Route path="/login" element={<Layout child={<Login />}/>} />
        <Route path="/signup" element={<Layout child={<SignUp />}/>} />
        <Route path="/dashboard" element={<Layout child={<Dashboard />}/>} />
        <Route path="/clientmanagement" element={<Layout child={<Clientmanagement />}/>} />
        <Route path="/employeemanagement" element={<Layout child={<Employeemanagement />}/>} />


      </Routes>
    </Router>
  );
}

export default App;
