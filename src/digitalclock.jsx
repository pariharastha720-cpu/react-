import React, {useState,useEffect} from 'react';

    function Digitalclock(){

       const [time,settime] =useState(new Date());

       useEffect(() =>{
        const intervalid = setInterval(()=>{
            settime(new Date());
        },1000);
        return ()=>{
            clearInterval(intervalid);
        }
       },[]);

       function formattime(){
        let hrs = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hrs >=12 ? "PM":"AM";

        hrs = hrs%12|| 12;
        return `${padzero(hrs)} :${padzero(min)}:${padzero(sec)}: ${meridiem}`


        }
        function padzero(number){
            return (number <10 ? "0":"")+number;

        }
        return(
            
            <div className="clockcontainer">
              <div className="clock">
                <span >{formattime()}</span> 
              </div>
            </div>
            
            
        );
    } 
    export default Digitalclock;