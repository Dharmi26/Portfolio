import React from 'react';
import PicCarousel from './Piccarousel';
import '../styles/ach.css'

export default function Achievements(){
    return(
        <>
            <div className='w-75 mb-5 container'>
                <PicCarousel/>
            </div>
            <div className='st1 mt-5 mb-5 d-flex flex-row gap-5 flex-wrap justify-content-center align-items-center'>
                <div className='st shadow p-3 mb-5 rounded w-50 d-flex flex-column gap-3 justify-content-center align-items-center'>
                    <h4>Smart India Hackathon - Winner</h4>
                    <span>August 2022</span>
                    <p>Developed a web portal to implement the idea of a transparent buying and selling platform that aims at the empowerment of Self Help Groups of all areas by introducing a web-based and app-based application through which buyers and sellers can directly trade with transparency and no middleman in between. This system is proposed to help Self Help groups earn capital very easily and showcase their unique products worldwide through this web portal.</p>
                    <a href="https://drive.google.com/file/d/1DSlHcTCTYytfkdtqZFze94DIK4stOZOu/view?usp=sharing" target='_blank'><button className='btnn'>View Certificate</button></a>
                </div>
                <div className='st shadow p-3 mb-5 rounded w-50 d-flex flex-column gap-3 justify-content-center align-items-center'>
                    <h4>Tech-A-Thon 2.0 - Runner up</h4>
                    <span>September 2022</span>
                    <div>Created a platform for the students where they can explore notes, assignments, previous year papers, etc. according to their preferences. Students can share their notes/materials (both handwritten and in document - PPT, PDF, DOC, etc. format) which students from any branch or semester can access for free. We have created efficient notes sharing app using which students who are willing to share notes for any subject/s.</div>
                    <a href="https://drive.google.com/file/d/1jnSXbA7WY9KG7nMUnHR7fTkWM99rz-tk/view?usp=drive_link" target='_blank'><button className='btnn'>View Certificate</button></a>
                </div>
                <div className='st shadow p-3 mb-5 rounded w-50 d-flex flex-column gap-3 justify-content-center align-items-center'>
                    <h4>CodeRed Hackathon - Runner up</h4>
                    <span>October 2022</span>
                    <div>Developed a model where farming communities can adopt technology to create sustainable benefits - such as weather alerts on the phone, best practices on farming, and advice on taking care of pest attacks.</div>
                    <a href="https://drive.google.com/file/d/1jktM4tPiltZZkDY1XGjHnFFfYmOih9mN/view?usp=drive_link" target='_blank'><button className='btnn'>View Certificate</button></a>
                </div>
            </div>
        </>
    )
}