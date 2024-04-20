
import './App.css';
import StudentDash from './components/StudentDash';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/sdash'} element={<StudentDash/>}/>
<<<<<<< HEAD
        <Route path='/adminlog' element={<AdminLogin/>}/>
=======
        <Route path={'/studentlog'} element={<StudentLogin/>}/>
>>>>>>> 0b40956e531baec80d2c5339333c5a3ba364c9e1
      </Routes>
    </div>
  );
}

export default App;
