import {useState} from "react";

function App() {
  let obj;
  const [users, setUsers] = useState([])
  const [input, setInput] = useState("")
  const [description,setDescription] = useState("")
  const [time, setTime] = useState("")
  const [changed, setChange] = useState([]);
  const[editing, setEditing] = useState(null)
  const[todo, setTodo] = useState("")
  const[title, setTitle] = useState("")
  

  const addto = () => {
   
    obj = {
      title: input,
      description: description,
      time:time
    }
    users.push(obj)
    setUsers([...users])
    
   
  }
  const changeAll = (ev) => {
    let newList = [...changed]
    if (ev.target.checked) {
      newList = [...changed, ev.target.value];
      console.log(newList)
    } else {
      newList.splice(changed.indexOf(ev.target.value, 1));
      console.log(newList)
    }
    setChange(newList)
  };
  const checkedIn = (item) =>changed.includes(item) ? "checked" : "not-check";
 

  const deleteIn = (index) => {
    // console.log(index);
    users.splice(index, 1)
    setUsers([...users])
  }
  
  const submitTodo = (e) => {
    users[e].title = todo
    setUsers([...users])
    setEditing(null)
   }
  
  
  

     return (
      
       <main className="mainshow">
         <h1 className="todoh">Todo</h1>
        
         <nav className="navinput">
           <input placeholder="Session" className="inputt" type="text" onChange={(e)=>setInput(e.target.value)} />
         <input placeholder="time" type="time" className="inputtt" onChange={(e) => setDescription(e.target.value)} />
           <div className="div4">
             <input placeholder="Task" type="text" className="inptt"  onChange={(e)=>setTime(e.target.value)} />
             <button className="addin" onClick={addto}>ADD</button>
         
         </div>
         </nav>
         {users.map((value, index) =>
           <div key={index} className="div1">
             <nav className="nav1">
                <input value={value.title} className="inputcheck" onChange={changeAll}   type="checkbox" />
                {editing == index ? <input onChange={(e)=> setTodo(e.target.value)} name="" type="text"/> : <span className={checkedIn(value.title)}>{value.title}</span> }
               
               
               <span className={checkedIn(value.title)}>{value.description}</span>
             
               <span className={checkedIn(value.title)}>{value.time}</span>
                {editing == index? <button onClick={() => submitTodo(index)}>✔</button>:<span className="btnn"><button onClick={() => setEditing(index)} className="btn6">✏</button></span>}
               
               
              
               {/* <span className="btnn"><button onClick={() => setEditing(index)} className="btn6">✏</button></span> */}
             <span className="btn3"><button className="btn2" onClick={deleteIn}>🗑</button></span>
             
             </nav>
             <hr className="hr" />
             
           </div>
           
         )}
         

      
      
    </main>
  )
   
   
  }
  
  
 

  
  
  
export default App;












