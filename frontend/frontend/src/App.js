
import './App.css';
import StudentDash from './components/StudentDash';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/sdash'} element={<StudentDash/>}/>
        <Route path='/adminlog' element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
