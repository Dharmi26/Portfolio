import React from 'react';
import Typewriter from "typewriter-effect";

export default function about(){
    return(
        <>
            <div className='mt-5'>
                <h2>Dharmi Kapadiya</h2>
                <h4>I am a 
                <Typewriter
        
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Programmer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Team Player")
                        .start();
                }}
                /></h4>
            </div>
        </>
    )
}