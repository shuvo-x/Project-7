import React,{ useState } from 'react';
import './Home.css';

function Home() {
    function Xrey() {
        console.log(`run function`)
        console.log(`run function 2`)

         return 4
    }
   const [count, setCount] =   useState(Xrey());

  
    function decrementCount() {
        setCount(rockCount => rockCount -1);
    }
    function incrementCount() {
        setCount(rockCount => rockCount +1);
    }
    function reset() {
       var xes = document.querySelector('.removeButton');
        xes.remove();
    }
    
    return (
        <>
        
        <div>
            <h1 className='home'>This is Home Page</h1>
            <div className='home'>
            <button onClick={decrementCount}> - </button>
              <span className='removeButton'>{count}</span>
              <button onClick={incrementCount}> + </button><br />
              <button onClick={reset}>Reset</button>
            </div>
        </div>
        
        </>
    )
}

export default Home
