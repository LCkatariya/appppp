import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const naviegate = useNavigate()
  const token = localStorage.getItem('token')
  console.log(token)
  if(token){
     return <Navigate to={'/dashboard'} replace />
  }
  const handleLogin = () =>{
    localStorage.setItem('token', 'static_token_added')
    naviegate('/dashboard')
  }
  return (
    <div>
      <div>This is Login page</div>
      <div>
        <button onClick={()=>{handleLogin()}}>Click To Login</button>
      </div>
    </div>
  )
}

export default Login