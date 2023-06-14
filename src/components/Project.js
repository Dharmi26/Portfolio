import React from 'react';
import '../styles/project.css'
export default function Project(){
    return(
        <>
            <div className='bk position-relative w-100'>

                <img src={require("../assets/Home.png")} className='w-100'/>

                <div className='position-absolute top-0 start-50 mt-5 mb-5 d-flex flex-row gap-4 flex-wrap justify-content-center align-items-center' style={{backgroundColor:"transparent"}}>
                    <div className='w-50 border-none rounded-2 shadow p-3'>p1</div>
                    <div className='w-50 border-none rounded-2 shadow p-3'>p2</div>
                    <div className='w-50 border-none rounded-2 shadow p-3'>p3</div>
                    <div className='w-50 border-none rounded-2 shadow p-3'>p4</div>
                </div>
            </div>
        </>
    )
}