import React,{ useState } from 'react';
import './Footer.css';

function Footer() {

const [outOf, enterOf] = useState(0);
function incresed() {
    enterOf(outOf+1);
}
function discresed() {
    enterOf(outOf-1);
}
function reset() {
   var a = document.querySelector('.reseT');
   a.remove()
}

    return (
      <>
      
      <div className='footer'>
         <button onClick={discresed}> - </button>
          <span className='reseT'>{outOf}</span>
          <button onClick={incresed}> + </button><br /><br />
          <button onClick={reset}>Reset</button>

      </div>
      
      
      </>
    )
}

export default Footer
