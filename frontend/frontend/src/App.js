
import './App.css';
import StudentDash from './components/StudentDash';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/sdash'} element={<StudentDash/>}/>
        <Route path={'/studentlog'} element={<StudentLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
