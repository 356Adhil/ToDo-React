import { useState } from 'react'
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const remove = (id)=>{
    const newTodos = toDos.filter((obj)=>obj.id !==id )
    setToDos(newTodos)
  }
  
  function addHandle(){
    if(toDo.trim()===''){
      return;
    }
    setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
    setToDo('');
  }

  return (
    <div className='main'>
<div className="app">
    <div className="mainHeading">
      <h1>Add ToDo</h1>
    </div>
    <div className="input">
      <input autoFocus value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={addHandle} className="fas fa-plus"></i>
    </div>
    <div className="todos">
{      
toDos.map((obj)=>{
  return(
  <div className="todo" key={obj.id}>
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj);
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i  onClick={()=>{remove(obj.id)}} className="fas fa-times"></i>
        </div>
      </div>
      )
      })
    }
    </div>
  </div>


      {/* ................................................................................................... */}


    <div className="app">
    <div className="mainHeading">
      <h1>All</h1>
    </div>
    <div className="todos">
{      
toDos.map((obj)=>{
  return(
  <div className="todo" key={obj.id}>
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj);
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" style={{display:'none'}} name="" id="" />
          <p>{obj.text}</p>
        </div>
      </div>
      )
      })
    }
    </div>
  </div>
  
{/* ........................................................................................... */}


<div className="app">
  <div className="mainHeading">
    <h1>Pending</h1>
  </div>
  <div className="todos">
{      
toDos.map((obj)=>{
  if(obj.status===false){
return(
<div className="todo" key={obj.id}>
      <div className="left">
        <input onChange={(e)=>{
          console.log(e.target.checked);
          console.log(obj);
          setToDos(toDos.filter(obj2=>{
            if(obj2.id===obj.id){
              obj2.status=e.target.checked
            }
            return obj2
          }))
        }} value={obj.status} type="checkbox" style={{display:'none'}} name="" id="" />
        <p>{obj.text}</p>
      </div>
    </div>
    )}
    })
  }
  </div>
</div>




{/* .......................................................................................... */}

  <div className="app">
  <div className="mainHeading">
    <h1>Completed</h1>
  </div>
  <div className="todos">
  {      
toDos.map((obj)=>{
  if(obj.status){
  return(
    
  <div className="todo" key={obj.id}>
        <div className="left">
          <input value={obj.status} style={{display:'none'}} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
      </div>
      )}
      })
    }
  </div>
</div>
</div>
  )
}

export default App
