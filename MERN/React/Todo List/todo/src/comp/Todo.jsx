import React  , { useState }  from 'react'


const Todo = () => {
    const[task , setTask] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [arr, setArr] = useState([{task,isDone:false,"style":""}]);

     const handelSubmit =(e) => {
        e.preventDefault(); 
        setArr(arr => [...arr,{task,isDone,style:""}]);
        setTask('');

    }
    const deleteTask =(e, index)=>{
        setArr([
                ...arr.slice(0, index),
                ...arr.slice(index + 1)
            ]);
    
    }
    const checkedDone =(e , item) =>{
        setIsDone(e.target.checked)
        item.isDone=e.target.checked
        item.isDone ? item.style="line-through":item.style ="none" 
        setArr([...arr]) 
        console.log(item.isDone) 
    }
    const btn={
        marginTop : 20 ,
        width : 400 ,
        height : 50 ,
   
    }
    const btn1={
        background:'red' ,
        color : 'white' ,
    }
      const lab={
        background:'yellow' ,
        color : 'white' ,
    }



  return (
    <div>
        <h2>Add A Task :</h2>
        <form onSubmit ={handelSubmit}>
            <input style={btn} type="text" value={task} onChange={ (e) => setTask(e.target.value)}  /> <br></br>
            <br></br>
            <button style={btn1}>Add</button>
        </form>
        <div>
            { arr.map((item,index) => 
                <div key={index} style={{fontFamily : 'cursive' ,textDecoration: item.style}}>{item.task}
                 <label>
                <input type="checkbox" checked={item.checked} onChange={(e) => checkedDone(e , item)}/>
            </label>
                <button onClick={(e)=> deleteTask(e, index)}>Delete</button></div> ) } 

        </div>
    </div>
  )
}

export default Todo