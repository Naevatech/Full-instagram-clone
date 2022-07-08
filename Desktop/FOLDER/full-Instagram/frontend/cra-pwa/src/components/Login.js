import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const url = "http://localhost:4007/user/login"
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [message, setmessage] = useState("")
  const [status, setstatus] = useState("")
  const login = () => {
    const userlog = {email, password}
    axios.post(url, userlog).then((res)=>{
      console.log(res.data)
      setmessage(res.data.message)
      setstatus(res.data.status)
      if(res.data.status===true){
        localStorage.userDetail = JSON.stringify(res.data.result)
        navigate("/home")
      }
      
      

    })


  }

  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-12 col-md-4" ></div>
          <div className=" col-12 col-md-4 mt-4" style={{border:"1px solid #e9e9e9", backgroundColor:"white"}}>
            {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger'>{message}</div>}
            <div className='mt-5 mb-5' style={{backgroundColor:"white"}}>

              <div className='mx-4' style={{backgroundColor:"white"}}>
                <div style={{marginLeft:"130px", backgroundColor:"white"}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/120px-Instagram_logo.  svg.png?20160616034027"  alt="" style={{backgroundColor:"white"}} />
                </div>
                <div className='mt-4' style={{backgroundColor:"white", }}>
                  <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Phone number, username or email' className='form-control mb-2' style={{fontSize:"10pt"}} />
                  <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='Password' className='form-control mb-3' style={{fontSize:"10pt"}} />
                  <button onClick={login}  className="btn btn-primary btn-sm w-100" style={{backgroundColor:"#b2dffc", border:"none", fontWeight:"600"}}>Log in</button>
                </div>
              </div>

              <div className='mt-4' style={{marginLeft:"95px"}} >
                <div className='mt-4 d-flex' style={{backgroundColor:"white"}}>
                  <p style={{backgroundColor:"white"}}>Don't have an account?</p>
                  <a href="http://localhost:3000/signup"  style={{textDecoration:"none", fontWeight:"600", marginLeft:"3px", backgroundColor:"white"}}>Sign-up</a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4" ></div>
        </div>
      </div>
    </div>
  )
}

export default Login