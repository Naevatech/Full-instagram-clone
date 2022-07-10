import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './modalstyle.css'

const Modal = ({open, onClose}) => {
    const navigate = useNavigate()
    const [fullname, setfullname] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [website, setwebsite] = useState("")
    const [profileId, setprofileId] = useState("")
    // const [profilepics, setprofilepics] = useState("")
    const [profilepic, setprofilepic] = useState("")
    const url = "http://localhost:4007/user/update"
    
    useEffect(() => {
      if (localStorage.userDetail) {
        console.log("User exist")
        setprofileId(JSON.parse(localStorage.userDetail))
        console.log(profileId)
      }
    }, [])
    
    const update = () => {
        const profileUpdate = {fullname, username, email, website, profilepic, }
        axios.post(url, profileUpdate).then((res)=> {
            console.log(res)
            // setprofilepics(res.data.img_upload)
            navigate("/")
        })
        
        
    }
    const avatar = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setprofilepic(reader.result)
        }
        
    }
    if (!open) {
        return null
    }
  return (
    < >
      <div className='overlay'>
        <div className="container "  >
            <div className="row ">
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-6 ">
                    <div className="row mt-2 mb-3" id='modalContainer'>
                        <p className='mt-2 mb-5' onClick={onClose}>x</p>
                        <div className="col-12 col-md-3" >profileId
                        {!profilepic ? <img src={profileId.user_avatar} alt="" className='rounded-circle img-fluid me-3 me-md-5 mt-3' style={{width:"120px", height:"120px"}} /> : 
                        <img src={profilepic} alt="" className='rounded-circle img-fluid me-3 me-md-5 mt-3' style={{width:"120px", height:"120px"}} />
                        }
                            <div>
                                <label for='formFileLg' className='form-label btn btn-outline-primary'> Change</label>
                                <input type="file" hidden onChange={(e)=>avatar(e)} id='formFileLg' />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 mt-4">

                            <div className="mb-3 row">
                                <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="name" className="form-control" id="inputName" placeholder={profileId.fullname} onChange={(e)=>setfullname(e.target.value)} value={fullname} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputUsername" className="col-sm-2 col-form-label">username</label>
                                <div className="col-sm-10">
                                    <input type="name" className="form-control" id="inputUsername"  placeholder={profileId.username} onChange={(e)=>setusername(e.target.value)} value={username} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail"  placeholder={profileId.email} onChange={(e)=>setemail(e.target.value)} value={email} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputWebsite" className="col-sm-2 col-form-label">Website</label>
                                <div className="col-sm-10">
                                    <input type="website" className="form-control" id="inputWebsite" placeholder={profileId.website_link} onChange={(e)=>setwebsite(e.target.value)} value={website} />
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-8"></div>
                                <div className="col-4">
                                <button className='btn btn-success w-100' onClick={update}>Save</button>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Modal