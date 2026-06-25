import React,{useState,useRef,useEffect} from 'react';

function Stopwatch(){
    const[isRunning,setisRunning] = useState(false);
    const[elapsedtime,setelapsedtime]=useState(0);
    const intervalidRef =useRef(null);
    const starttimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
           intervalidRef.current= setInterval(()=>{
                setelapsedtime(Date.now()-starttimeRef.current);
            },10);
        }

        return()=>{
            clearInterval(intervalidRef.current);
        }

    },[isRunning]);

    function formattime(){
        let hours =Math.floor(elapsedtime/(1000*60*60));
        let minutes =Math.floor(elapsedtime/(1000*60)%60);
        let seconds =Math.floor(elapsedtime/(1000)%60);
        let milliseconds =Math.floor(elapsedtime%(1000));

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    function Start(){
        setisRunning(true);
        starttimeRef.current = Date.now() - elapsedtime;
    }
    function Stop(){
        setisRunning(false);
    }
    function Reset(){
        setelapsedtime(0);
        setisRunning(false);
    }
    return(
    <div className ="stopwatch">
        <div  className="display">{formattime()}</div>
        <div  className="controls">
            <button className='start' onClick={Start} >Start</button>
             <button className='reset' onClick={Reset}>Reset</button>
              <button className='stop' onClick={Stop}>Stop</button>
        </div>
    </div>
    );

}
export default Stopwatch;