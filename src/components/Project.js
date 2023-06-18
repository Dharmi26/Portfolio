import React from 'react';
import '../styles/project.css';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Project(){
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
            <div data-aos="zoom-y-out" data-aos-delay="100" className="mt-5 mb-5">
                <p className="fw-semibold" style={{color:"#3C5186",fontStyle:"italic"}}>No idea is too small, and no problem is too big,"</p>
            </div>
            <div className="position-relative container">
                <div className='d-none d-md-block'>
                    <img src={require("../assets/Home.png")} className='w-100'/>
                </div>
                <div className="position-absolute start-0 top-0 mt-4 row" style={{backgroundColor:"transparent"}}>
                    <div data-aos="zoom-y-out" data-aos-delay="100" className="col-md-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <div className="image-container" style={{backgroundColor:"transparent"}}>
                        <img src={require("../assets/P1.jpeg")} alt="Image 3" className="img-fluid w-75"/>
                        <div className="overlay">
                            <Link to="https://drive.google.com/file/d/1EN15y4NxcDG8Ni_kAQL9SxopR5_UFP85/view?usp=sharing" target="_blank"><button className='btnn1'>View Project</button></Link>
                        </div>
                        </div>
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay="100" className="col-md-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <div className="image-container" style={{backgroundColor:"transparent"}}>
                        <img src={require("../assets/P2.jpeg")} alt="Image 3" className="img-fluid w-75"/>
                        <div className="overlay">
                            <Link to="https://frontend-nine-ochre.vercel.app/" target="_blank"><button className='btnn1'>View Project</button></Link>
                        </div>
                        </div>
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay="100" className="col-md-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <div className="image-container" style={{backgroundColor:"transparent"}}>
                        <img src={require("../assets/P3.jpeg")} alt="Image 3" className="img-fluid w-75"/>
                        <div className="overlay">
                            <Link to="https://remine-india-git-master-dharmi26.vercel.app/" target="_blank"><button className="btnn1">View Project</button></Link>
                        </div>
                        </div>
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay="100" className="col-md-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <div className="image-container" style={{backgroundColor:"transparent"}}>
                        <img src={require("../assets/P4.jpeg")} alt="Image 3" className="img-fluid w-75"/>
                        <div className="overlay">
                            <Link to="https://zomato-landing-page-seven.vercel.app/" target="_blank"><button className="btnn1">View Project</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}