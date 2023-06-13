import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Project';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/achievements' element={<Achievements/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
