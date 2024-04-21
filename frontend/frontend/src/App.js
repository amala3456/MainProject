
import './App.css';
import StudentDash from './components/StudentDash';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AdminDash from './components/AdminDash';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
      <Route path={'/home'} element={<Main child={<Home/>}/>} />

        <Route path={'/sdash'} element={<StudentDash/>}/>
<Route path='/adminlog' element={<AdminLogin/>}/>
<Route path={'/studentlog'} element={<StudentLogin/>}/>
<Route path={'/admindash'} element={<AdminDash/>}/>

      </Routes>
    </div>
  );
}

export default App;


