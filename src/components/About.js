import React from 'react';
import '../styles/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {BiLogoGmail} from 'react-icons/bi';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai';
import resume from './Resume.pdf'

const downloadResume = () => {
      window.open(resume, '_blank');
}; 

export default function About(){
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
            <div className='hc d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5'>
                <div className='w-100 w-md-50 text-center' data-aos="zoom-y-out" data-aos-delay="100" style={{backgroundColor: "transparent"}}>
                    <img src={require("../assets/mypic.jpg")} className="w-50 rounded-circle shadow p-2" alt="Profile Picture"/>
                </div>
                <div className='w-100 w-md-50 p-3 pt-0 mt-4' style={{backgroundColor: "transparent"}}>
                    <h2 data-aos="zoom-y-out" data-aos-delay="200" className="mb-2" style={{backgroundColor: "transparent", color:"#E6E7EE"}}>Hi, I am Dharmi Kapadiya</h2>
                    <h3 data-aos="zoom-y-out" data-aos-delay="300" className="mb-4" style={{backgroundColor: "transparent", color:"#E6E7EE"}}>Programmer | Developer</h3>
                    <div className="d-flex flex-row gap-3 justify-content-center align-items-center" data-aos="zoom-y-out" data-aos-delay="400" style={{backgroundColor: "transparent"}}>
                        <BiLogoGmail size="30px" style={{color:"#E34133"}} className='shadow-lg rounded p-1'/>
                        <AiFillLinkedin size="30px" style={{color: "#007AB5"}} className='shadow-lg rounded p-1'/>
                        <AiFillGithub size="30px" style={{color:"black" }} className='shadow-lg rounded p-1'/>
                    </div>
                    <div className='mt-4' style={{backgroundColor:"transparent"}}>
                        <button className="btnn" onClick={downloadResume}>
                            <AiOutlineDownload size="25px" className='me-2' style={{color:"white", backgroundColor:"transparent"}}/>
                            Resume
                        </button>
                    </div>
                </div>
            </div>

            <div className="hc pt-5 p-md-5 shadow d-flex flex-row justify-content-center align-items-center w-100 text-wrap" style={{backgroundColor: "#DAEAF1", color:"#4c4177"}}>
                <p className="queries fs-5 p-2 p-md-5 shadow w-75 rounded" data-aos="zoom-y-out" data-aos-delay="100" style={{fontStyle:"italic", opacity:"0.8"}}>
                    "I am a student, currently pursuing Bachelor of Technology in Computer Science Branch from SKIT Jaipur.
                    I'm a web developer passionate about building innovative and user-friendly websites and applications.
                    I am eager to collaborate with like-minded professionals and take on new challenges in web development
                    to continue growing my skills and expertise."
                </p>
            </div>


        </>
    )
}