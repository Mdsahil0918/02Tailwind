import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext'
function Login(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

const{setUser}=useContext(UserContext)
  const handelSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
<div>
  <h2>
    login
  </h2>
  <input type="text" placeholder="username" value ={username}
  onChange={(event)=>setUsername(event.target.value)}/>
  <input type="text" placeholder="password"
  value={password}
  onChange={(event)=>setPassword(event.target.value)}/>
  <button onClick={handelSubmit}>Submit</button>
</div>
  )
}
export default Login;