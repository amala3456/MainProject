
import './App.css';
import StudentDash from './components/StudentDash';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/sdash'} element={<StudentDash/>}/>
      </Routes>
    </div>
  );
}

export default App;
