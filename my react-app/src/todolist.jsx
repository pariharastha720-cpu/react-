import React,{useState} from 'react'

function Todolist(){
    const[tasks,settasks]= useState([]);
    const[newtask,setnewtask]=useState("");

    function handleinputchange(event){
        setnewtask(event.target.value);

    }
    function addtask(){
        if(newtask.trim()!==""){
        settasks(t=>[...t,newtask]);
        setnewtask("");
        }
    }
    function deletetask(index){
        const updatetasks =tasks.filter((_,i)=> i !== index);
        settasks(updatetasks);

           
    }
    function movetaskup(index){
        if(index>0){
           const updatetasks =[...tasks];
           [updatetasks[index],updatetasks[index-1]] =
           [updatetasks[index-1],updatetasks[index]] ;
           settasks(updatetasks);
        }
           
    }
    function movetaskdown(index){
         if(index<tasks.length-1){
           const updatetasks =[...tasks];
           [updatetasks[index],updatetasks[index+1]] =
           [updatetasks[index+1],updatetasks[index]] ;
           settasks(updatetasks);
        }
           
    }
    return(
        <div className="todo">
            <div>
            <h1>TO DO List</h1>
            <input 
            type ="text" placeholder='Enter a task'
            value ={newtask}
            onChange={handleinputchange}/>
            <button className='add'
            onClick={addtask}
            >Add Task➕</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key ={index}>
                    <span className ="text">{task}</span>
                    <button className="delete" onClick={()=>deletetask(index)}>
                    ❌</button>
                    <button className="moveup"
                    onClick={()=>movetaskup(index)}>👆</button>
                    <button className="movedown"
                    onClick={()=>movetaskdown(index)}>👇</button>
                </li>
                )}
            </ol>

        </div>
    );
     

}
export default Todolist