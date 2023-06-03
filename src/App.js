import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Project';
import Cocurricular from './components/Cocurricular';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/education' exact element={<Education/>} />
          <Route path='/experience' exact element={<Experience/>} />
          <Route path='/projects' exact element={<Projects/>} />
          <Route path='/cocurriculars' exact element={<Cocurricular/>} />
          <Route path='/resume' exact element={<Resume/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
