import React from 'react';
import PicCarousel from './Piccarousel';
import '../styles/ach.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Achievements(){
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
    return(
        <>
          <div class="container shadow-lg mt-5 rounded" style={{backgroundColor: "#3C5186"}}>
            <div data-aos="zoom-y-out" data-aos-delay="100" class="w-100 pt-3 mb-5" style={{backgroundColor: "#3C5186"}}>
              <PicCarousel/>
            </div>
            <div style={{backgroundColor: "transparent"}} class="st1 mt-5 mb-5 d-flex flex-row gap-5 flex-wrap justify-content-center align-items-center">
              <div data-aos="zoom-y-out" data-aos-delay="100" class="position-relative st shadow p-3 mb-5 rounded w-100 w-md-50 d-flex flex-column gap-3 justify-content-center align-items-center">
                <img src={require("../assets/target1.png")} width="100" class="d-none d-md-block ms-2 position-absolute start-0 top-0 ms-2" alt="target1"/>
                <h4 className='fw-bold' style={{color: "#3C5186"}}>Smart India Hackathon - Winner</h4>
                <span>August 2022</span>
                <p>Developed a web portal to implement the idea of a transparent buying and selling platform that aims at the empowerment of Self Help Groups of all areas by introducing a web-based and app-based application through which buyers and sellers can directly trade with transparency and no middleman in between. This system is proposed to help Self Help groups earn capital very easily and showcase their unique products worldwide through this web portal.</p>
                <a href="https://drive.google.com/file/d/1DSlHcTCTYytfkdtqZFze94DIK4stOZOu/view?usp=sharing" target="_blank"><button class="btnn">View Certificate</button></a>
              </div>
              <div data-aos="zoom-y-out" data-aos-delay="100" class="position-relative st shadow p-3 mb-5 rounded w-100 w-md-50 d-flex flex-column gap-3 justify-content-center align-items-center">
                <img src={require("../assets/target.png")} width="100" class="d-none d-md-block position-absolute start-0 top-0 ms-2" alt="target"/>
                <h4 className='fw-bold' style={{color: "#3C5186"}}>Tech-A-Thon 2.0 - Runner up</h4>
                <span>September 2022</span>
                <div>Created a platform for the students where they can explore notes, assignments, previous year papers, etc. according to their preferences. Students can share their notes/materials (both handwritten and in document - PPT, PDF, DOC, etc. format) which students from any branch or semester can access for free. We have created efficient notes sharing app using which students who are willing to share notes for any subject/s.</div>
                <a href="https://drive.google.com/file/d/1jnSXbA7WY9KG7nMUnHR7fTkWM99rz-tk/view?usp=drive_link" target="_blank"><button class="btnn">View Certificate</button></a>
              </div>
              <div data-aos="zoom-y-out" data-aos-delay="100" class="position-relative st shadow p-3 mb-5 rounded w-100 w-md-50 d-flex flex-column gap-3 justify-content-center align-items-center">
                <img src={require("../assets/target2.png")} width="90" class="d-none d-md-block position-absolute start-0 top-0 ms-2" alt="target2"/>
                <h4 className='fw-bold' style={{color: "#3C5186"}}>CodeRed Hackathon - Runner up</h4>
                <span>October 2022</span>
                <div>Developed a model where farming communities can adopt technology to create sustainable benefits - such as weather alerts on the phone, best practices on farming, and advice on taking care of pest attacks.</div>
                <a href="https://drive.google.com/file/d/1jktM4tPiltZZkDY1XGjHnFFfYmOih9mN/view?usp=drive_link" target="_blank"><button class="btnn">View Certificate</button></a>
              </div>
            </div>
          </div>
        </>
    )
}