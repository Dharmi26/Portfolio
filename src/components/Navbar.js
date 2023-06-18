import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import resume from './Resume.pdf'

function Navbars() {
  const downloadResume = () => {
    window.open(resume, '_blank');
  }; 
  return (
    <Navbar expand="lg" className="color shadow p-3">
      <img src={require("../assets/Logo.png")} width="100"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-2' />
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center navbar-collapse gap-5 m-2">
            <Link to="/" className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>About me</Link>
            <Link to="/education" className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>Education</Link>
            <Link to="/experience" className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>Experience</Link>
            <Link to="/projects" className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>Projects</Link>
            <Link to="/achievements" className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>Achievements</Link>
            <Link onClick={downloadResume} className="navitem" style={{fontSize:"18px", fontWeight:"600", color:"#3C5186", textDecoration:"none"}}>Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;