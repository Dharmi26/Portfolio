import React from 'react';
import '../styles/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function About(){
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5' style={{backgroundColor: "#3C5186"}}>
                <div className='w-100 w-md-50 text-center' style={{backgroundColor: "#3C5186"}}>
                    <div data-aos="zoom-y-out" data-aos-delay="100" style={{backgroundColor: "#3C5186"}}>
                        <img src={require("../assets/mypic.jpg")} className="w-50 rounded-circle shadow p-2" alt="Profile Picture"/>
                    </div>
                    <div style={{backgroundColor: "#3C5186"}}>
                        <h5 className="mt-3" style={{backgroundColor: "#3C5186", color:"#E6E7EE"}}>Programmer | Developer | Designer</h5>
                    </div>
                </div>
                <div className='w-100 w-md-50 p-3 pt-0' style={{backgroundColor: "#3C5186"}}>
                    <h2 data-aos="zoom-y-out" data-aos-delay="100" className="mb-4" style={{backgroundColor: "#3C5186", color:"#E6E7EE"}}>Hi, I am Dharmi Kapadiya</h2>
                    <p data-aos="zoom-y-out" data-aos-delay="100" style={{backgroundColor: "#3C5186", color:"#E6E7EE", fontStyle:"italic"}}>
                    "I am a student, currently pursuing Bachelor of Technology in Computer Science Branch from SKIT Jaipur.
                    I'm a web developer passionate about building innovative and user-friendly websites and applications.
                    I am eager to collaborate with like-minded professionals and take on new challenges in web development
                    to continue growing my skills and expertise."
                    </p>
                </div>
            </div>

        </>
    )
}