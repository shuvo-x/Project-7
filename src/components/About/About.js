import React,{ useState } from 'react';
import './About.css';

function About() {

    const [empire, closeEmpire] = useState(0);

 function plus() {
     closeEmpire(empire+1);
 }
 function mainush() {
     closeEmpire(empire-1);
 }

    return (
        <div className='home'>
       
            <button onClick={plus}> + </button>
            <span>{empire}</span>
            <button onClick={mainush}> - </button>
        </div>
    )
}

export default About
