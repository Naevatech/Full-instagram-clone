import React from 'react'
import "./login.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()
    const url = "http://localhost:4007/user/signup"
    const [email, setemail] = useState("");
    const [fullname, setfullname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");
    const [status, setstatus] = useState("")
    const signup = ()=>{
        const newUser = {email, fullname, username, password}
        axios.post(url, newUser).then((res)=>{
            setmessage(res.data.message)
            setstatus(res.data.status)
            navigate("/")
        })

    }
    
  return (
    <>
      <div className="container-fluid mt-3 mb-4 ">
        <div className="row">
          <div className="col-12 col-md-4" ></div>
          <div className=" col-12 col-md-4 mt-4" style={{border:"1px solid #e9e9e9", backgroundColor:"white"}}>
              { status ?
                  <div className='alert alert-success w-100'>{message}</div> :
                  <div className='alert alert-success w-100'>{message}</div>
              }
            <div className='mt-5 mb-5' style={{backgroundColor:"white"}}>
              <div className='mx-4' style={{backgroundColor:"white"}}>
                <div style={{marginLeft:"130px", backgroundColor:"white"}} >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/120px-Instagram_logo.  svg.png?20160616034027"  alt="" style={{backgroundColor:"white"}} />
                </div>
                <h5 className='mt-3' style={{textAlign:"center", backgroundColor:"white", color:"#6e6063", fontWeight:"500"}}>Sign up to see photos and videos from your friends.</h5>
                <div className='mt-4' style={{backgroundColor:"white", }}>
                  <input type="email" placeholder='Mobile Number or Email' className='form-control mb-2' style={{fontSize:"10pt"}} onChange={(e)=>setemail(e.target.value)} value={email}/>
                  <input type="name" placeholder='Full Name' className='form-control mb-3' style={{fontSize:"10pt"}} onChange={(e)=>setfullname(e.target.value)} value={fullname}/>
                  <input type="username" placeholder='Username' className='form-control mb-2' style={{fontSize:"10pt"}} onChange={(e)=>setusername(e.target.value)} value={username}/>
                  <input type="password" placeholder='Password' className='form-control mb-3' style={{fontSize:"10pt"}} onChange={(e)=>setpassword(e.target.value)} />
                  <button onClick={signup} className="btn btn-primary w-100 mt-4" style={{backgroundColor:"#b2dffc", border:"none", fontWeight:"600"}}>Sign up</button>
                </div>
              </div>

              <div className='mt-4' style={{marginLeft:"95px"}} >
                <div className='mt-4 d-flex' style={{backgroundColor:"white"}}>
                  <p style={{backgroundColor:"white"}}>Already have an account?</p>
                  <a href="http://localhost:3000/"  style={{textDecoration:"none", fontWeight:"600", marginLeft:"3px", backgroundColor:"white"}}>Login</a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4" ></div>
        </div>
      </div>
    </>
  )
}

export default Signup