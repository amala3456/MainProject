
import './App.css';
import StudentDash from './components/StudentDash';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/sdash'} element={<StudentDash/>}/>
        <Route path='/adminlog' element={<AdminLogin/>}/>
        <Route path={'/studentlog'} element={<StudentLogin/>}/>

      </Routes>
    </div>
  );
}

export default App;


